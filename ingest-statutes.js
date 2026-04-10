// ingest-statutes.js
// Reads Nigerian tax statutes, generates embeddings, and stores them in Supabase
// Run once: node ingest-statutes.js

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const Anthropic = require('@anthropic-ai/sdk');
const statutes = require('./statutes-data');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// Generate embedding for a piece of text using Anthropic's API
async function generateEmbedding(text) {
  const response = await anthropic.embeddings.create({
    model: 'voyage-3',
    input: text,
    input_type: 'document'
  });
  return response.embeddings[0].embedding;
}

// Pause between API calls to avoid rate limiting
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ingestStatutes() {
  console.log(`Starting ingestion of ${statutes.length} statutory provisions...`);
  console.log('This will take a few minutes — please wait.\n');

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < statutes.length; i++) {
    const statute = statutes[i];

    try {
      console.log(`[${i + 1}/${statutes.length}] Processing: ${statute.act_name} — ${statute.section_number}`);

      // Create the text to embed — combine all fields for richer search
      const textToEmbed = `${statute.act_name} ${statute.section_number} ${statute.section_title}: ${statute.section_text}`;

      // Generate embedding vector
      const embedding = await generateEmbedding(textToEmbed);

      // Store in Supabase
      const { error } = await supabase
        .from('statutes')
        .upsert({
          act_name: statute.act_name,
          section_number: statute.section_number,
          section_title: statute.section_title,
          section_text: statute.section_text,
          embedding: embedding
        }, {
          onConflict: 'act_name, section_number'
        });

      if (error) {
        console.error(`  ERROR saving to Supabase: ${error.message}`);
        errorCount++;
      } else {
        console.log(`  Done.`);
        successCount++;
      }

      // Wait 500ms between calls to respect rate limits
      await sleep(500);

    } catch (err) {
      console.error(`  ERROR processing ${statute.section_number}: ${err.message}`);
      errorCount++;
    }
  }

  console.log('\n─────────────────────────────────────');
  console.log(`Ingestion complete!`);
  console.log(`Successfully stored: ${successCount} provisions`);
  console.log(`Errors: ${errorCount}`);
  console.log('─────────────────────────────────────');
  console.log('\nYour NaijaLex RAG database is ready.');
}

ingestStatutes().catch(err => {
  console.error('Fatal error during ingestion:', err);
  process.exit(1);
});
