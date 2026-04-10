const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting (simple in-memory store)
const requestCounts = new Map();
const RATE_LIMIT = 20; // requests per IP per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const entry = requestCounts.get(ip) || { count: 0, resetAt: now + RATE_WINDOW };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + RATE_WINDOW;
  }

  entry.count++;
  requestCounts.set(ip, entry);

  if (entry.count > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  next();
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'NaijaLex Tax Advisor API' });
});

// Secure Anthropic proxy endpoint
app.post('/api/tax-query', rateLimit, async (req, res) => {
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'API key not configured on server.' });
  }

  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'A valid question is required.' });
  }

  if (question.length > 1000) {
    return res.status(400).json({ error: 'Question too long. Max 1000 characters.' });
  }

  const SYSTEM_PROMPT = `You are NaijaLex, an expert Nigerian tax law advisor. You have deep knowledge of:
- Companies Income Tax Act (CITA) Cap C21 LFN 2004 and amendments
- Personal Income Tax Act (PITA) Cap P8 LFN 2004 and amendments
- Value Added Tax Act (VATA) Cap V1 LFN 2004 and amendments
- Capital Gains Tax Act (CGTA)
- Stamp Duties Act
- Finance Acts 2019, 2020, 2021, 2022, 2023
- FIRS administrative circulars and information notices
- Tax Appeal Tribunal decisions
- National Tax Policy

When answering, you MUST respond in this exact JSON format (no markdown, no backticks, just raw JSON):
{
  "answer": "A clear, plain-English explanation of the tax matter (2-4 paragraphs max)",
  "citations": [
    {
      "act": "Short act name e.g. CITA, PITA, VATA, Finance Act 2020",
      "section": "Section reference e.g. Section 29(1)",
      "excerpt": "A precise paraphrase of the statutory text (1-2 sentences)"
    }
  ],
  "related_topics": ["topic1", "topic2"]
}

Always include 2-4 citations. Be precise and accurate. If a question is outside Nigerian tax law, say so in the answer field and return an empty citations array. Never invent section numbers — only cite provisions you are confident exist. Always note if a Finance Act amendment changed a provision.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question.trim() }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      return res.status(502).json({ error: data.error?.message || 'Upstream API error.' });
    }

    const text = (data.content || []).map(b => b.type === 'text' ? b.text : '').join('');

    let parsed;
    try {
      parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
    } catch {
      parsed = { answer: text, citations: [], related_topics: [] };
    }

    res.json(parsed);

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
});

// Catch-all: serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NaijaLex server running on port ${PORT}`);
});
