// server.js — NaijaLex RAG-powered Nigerian Tax Advisor
// Full RAG pipeline: retrieve statutory sections → ground Claude → return citations

const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// Validate required environment variables
const requiredEnvVars = ['ANTHROPIC_API_KEY', 'SUPABASE_URL', 'SUPABASE_SERVICE_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── Rate limiting ────────────────────────────────────────────────────────────
const requestCounts = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 60 * 1000;

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const entry = requestCounts.get(ip) || { count: 0, resetAt: now + RATE_WINDOW };
  if (now > entry.resetAt) { entry.count = 0; entry.resetAt = now + RATE_WINDOW; }
  entry.count++;
  requestCounts.set(ip, entry);
  if (entry.count > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  next();
}

// ─── Step 1: Embed the user's question ───────────────────────────────────────
async function embedQuestion(question) {
  const response = await anthropic.embeddings.create({
    model: 'voyage-3',
    input: question,
    input_type: 'query'
  });
  return response.embeddings[0].embedding;
}

// ─── Step 2: Retrieve most relevant statutory sections from Supabase ──────────
async function retrieveStatutes(questionEmbedding, matchCount = 5) {
  const { data, error } = await supabase.rpc('match_statutes', {
    query_embedding: questionEmbedding,
    match_count: matchCount
  });

  if (error) throw new Error(`Retrieval error: ${error.message}`);
  return data || [];
}

// ─── Step 3: Build grounded prompt and call Claude ───────────────────────────
async function generateAnswer(question, retrievedStatutes) {
  // Format the retrieved statutes as grounding context
  const statuteContext = retrievedStatutes.map((s, i) =>
    `[${i + 1}] ${s.act_name} — ${s.section_number} (${s.section_title}):
"${s.section_text}"`
  ).join('\n\n');

  const SYSTEM_PROMPT = `You are NaijaLex, an expert Nigerian tax law advisor. You answer questions ONLY based on the statutory provisions provided to you below. Do not use any knowledge outside of these provisions.

RETRIEVED STATUTORY PROVISIONS:
${statuteContext}

INSTRUCTIONS:
- Answer the question using ONLY the provisions above
- Be clear and use plain English
- If the provisions do not fully answer the question, say so honestly
- Always reference which specific provision your answer comes from
- Never invent section numbers or provisions not shown above

Respond in this exact JSON format (raw JSON only, no markdown, no backticks):
{
  "answer": "Clear plain-English explanation based strictly on the retrieved provisions",
  "citations": [
    {
      "act": "Act name exactly as shown in the provisions",
      "section": "Section number exactly as shown",
      "excerpt": "The most relevant sentence or two from that provision verbatim"
    }
  ],
  "related_topics": ["2-3 related Nigerian tax topics the user might want to explore next"],
  "disclaimer": "This information is drawn from Nigerian tax legislation and is provided for informational purposes only. It does not constitute formal legal or tax advice. Please consult a qualified tax professional (ICAN/CITN member) or contact FIRS directly for advice specific to your circumstances."
}`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: question }]
  });

  const text = (response.content || []).map(b => b.type === 'text' ? b.text : '').join('');

  try {
    return JSON.parse(text.replace(/```json|```/g, '').trim());
  } catch {
    return {
      answer: text,
      citations: [],
      related_topics: [],
      disclaimer: 'This information is provided for informational purposes only and does not constitute formal legal or tax advice.'
    };
  }
}

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'NaijaLex RAG Tax Advisor' });
});

// ─── Main RAG endpoint ────────────────────────────────────────────────────────
app.post('/api/tax-query', rateLimit, async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'A valid question is required.' });
  }

  if (question.length > 1000) {
    return res.status(400).json({ error: 'Question too long. Max 1000 characters.' });
  }

  try {
    console.log(`Query received: "${question.trim().substring(0, 80)}..."`);

    // Step 1: Embed the question
    console.log('Step 1: Embedding question...');
    const questionEmbedding = await embedQuestion(question.trim());

    // Step 2: Retrieve relevant statutes
    console.log('Step 2: Retrieving relevant statutory provisions...');
    const retrievedStatutes = await retrieveStatutes(questionEmbedding, 5);
    console.log(`  Retrieved ${retrievedStatutes.length} provisions`);

    if (retrievedStatutes.length === 0) {
      return res.json({
        answer: 'I could not find relevant statutory provisions for your question in the database. Please try rephrasing your question or ask about a specific Nigerian tax act.',
        citations: [],
        related_topics: ['CITA', 'PITA', 'VAT', 'Finance Acts'],
        disclaimer: 'This tool covers Nigerian tax legislation including CITA, PITA, VATA, and Finance Acts 2019-2023.'
      });
    }

    // Step 3: Generate grounded answer
    console.log('Step 3: Generating grounded answer...');
    const answer = await generateAnswer(question.trim(), retrievedStatutes);

    console.log('Query completed successfully.');
    res.json(answer);

  } catch (err) {
    console.error('RAG pipeline error:', err.message);
    res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
});

// ─── Serve frontend ───────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NaijaLex RAG server running on port ${PORT}`);
  console.log(`Supabase: ${process.env.SUPABASE_URL}`);
});
