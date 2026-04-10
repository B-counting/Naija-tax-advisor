# NaijaLex — Nigerian Tax Law AI Advisor

An open-source, AI-powered Nigerian tax law advisor with statutory citation display. Built with Node.js, Express, and the Claude API.

## Features
- Answers grounded in CITA, PITA, VATA, Finance Acts 2019–2023, FIRS circulars
- Every answer includes statutory citations with section references
- Secure backend — Anthropic API key never exposed to the browser
- Built-in rate limiting (20 requests/IP/hour)
- MIT licensed and open-source

## Project Structure
```
naija-tax-advisor/
├── server.js          # Express backend + secure API proxy
├── package.json
├── .env.example       # Copy to .env and add your key
├── .gitignore
└── public/
    └── index.html     # Frontend chatbot UI
```

## Local Development

1. Clone and install:
```bash
git clone https://github.com/yourusername/naija-tax-advisor.git
cd naija-tax-advisor
npm install
```

2. Set your API key:
```bash
cp .env.example .env
# Edit .env: ANTHROPIC_API_KEY=sk-ant-your-key-here
```
Get your key at: https://console.anthropic.com

3. Run:
```bash
npm run dev    # development
npm start      # production
```
Visit http://localhost:3000

---

## Deployment — Get a Public URL

### Option A: Railway (Recommended — free tier)
1. Push code to GitHub
2. Go to https://railway.app → New Project → Deploy from GitHub
3. Select your repo
4. In Variables tab, add: `ANTHROPIC_API_KEY=sk-ant-your-key`
5. Railway auto-detects Node.js and deploys
6. Your live URL: `https://your-app.railway.app`

### Option B: Render (Free tier)
1. Push code to GitHub
2. Go to https://render.com → New → Web Service
3. Connect your repo, set:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add env var: `ANTHROPIC_API_KEY`
5. Your live URL: `https://your-app.onrender.com`

### Option C: Netlify Drop (No backend — standalone HTML only)
Use the standalone `naija_tax_advisor_chatbot.html` file and drag it to https://app.netlify.com/drop.
Note: This exposes API calls from the browser. Use only for demos.

---

## API Reference

### POST /api/tax-query
```json
Request:  { "question": "What is the CIT rate for small companies?" }
Response: { "answer": "...", "citations": [...], "related_topics": [...] }
```

### GET /api/health
Returns `{ "status": "ok" }` for uptime monitoring.

---

## License
MIT © 2026 — Built for the Nigerian tax community
