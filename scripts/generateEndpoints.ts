import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { OpenAPIParser } from '../src/utils/openApiParser.js';
import type { ApiEndpoint } from '../src/types/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate TypeScript configuration file for an endpoint
 */
function generateEndpointFile(endpoint: ApiEndpoint): string {
  // Create a copy with environments replaced by a placeholder
  const endpointCopy = {
    ...endpoint,
    environments: '__ENVIRONMENTS_PLACEHOLDER__' as any,
  };

  // Convert to JSON string
  let jsonString = JSON.stringify(endpointCopy, null, 2);

  // Replace the placeholder with the actual environments reference
  jsonString = jsonString.replace(
    '"__ENVIRONMENTS_PLACEHOLDER__"',
    'zuoraEnvironments'
  );

  const code = `import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const ${endpoint.id.replace(/-/g, '_')}Endpoint: ApiEndpoint = ${jsonString};
`;

  return code;
}

/**
 * Sanitize filename to be valid
 */
function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

/**
 * Group endpoints by category/tag based on URL path patterns.
 * Order matters — first match wins.
 */
function categorizeEndpoints(endpoints: ApiEndpoint[]): Record<string, ApiEndpoint[]> {
  const categories: Record<string, ApiEndpoint[]> = {
    // Core billing objects
    accounts: [],
    subscriptions: [],
    orders: [],
    invoices: [],
    payments: [],
    products: [],
    contacts: [],
    creditMemos: [],
    debitMemos: [],
    // Extended billing & finance
    billRuns: [],
    refunds: [],
    usage: [],
    accounting: [],
    journalEntries: [],
    revenue: [],
    // Platform & integration
    workflows: [],
    dataQueries: [],
    customObjects: [],
    fulfillments: [],
    attachments: [],
    notifications: [],
    settings: [],
    // Catch-all
    other: [],
  };

  for (const endpoint of endpoints) {
    const p = endpoint.path.toLowerCase();

    // Core billing objects
    if (p.includes('/accounts')) {
      categories.accounts.push(endpoint);
    } else if (p.includes('/subscription')) {
      categories.subscriptions.push(endpoint);
    } else if (p.includes('/order')) {
      categories.orders.push(endpoint);
    } else if (p.includes('/invoice')) {
      categories.invoices.push(endpoint);
    } else if (p.includes('/payment')) {
      categories.payments.push(endpoint);
    } else if (p.includes('/product') || p.includes('/catalog')) {
      categories.products.push(endpoint);
    } else if (p.includes('/contact')) {
      categories.contacts.push(endpoint);
    } else if (p.includes('/credit-memo')) {
      categories.creditMemos.push(endpoint);
    } else if (p.includes('/debit-memo')) {
      categories.debitMemos.push(endpoint);

    // Extended billing & finance
    } else if (p.includes('/bill-run')) {
      categories.billRuns.push(endpoint);
    } else if (p.includes('/refund')) {
      categories.refunds.push(endpoint);
    } else if (p.includes('/usage') || p.includes('/object-postimport') || p.includes('/object-getusage') || p.includes('/object-putusage') || p.includes('/object-deleteusage')) {
      categories.usage.push(endpoint);
    } else if (p.includes('/accounting-code') || p.includes('/accounting-period')) {
      categories.accounting.push(endpoint);
    } else if (p.includes('/journal-') || p.includes('/summary-journal') || p.includes('/journal-run')) {
      categories.journalEntries.push(endpoint);
    } else if (p.includes('/revenue-') || p.includes('/revpro-') || p.includes('/revenue_')) {
      categories.revenue.push(endpoint);

    // Platform & integration
    } else if (p.includes('/workflow')) {
      categories.workflows.push(endpoint);
    } else if (p.includes('/query/') || p.includes('/batch-query') || p.includes('/query-jobs') || p.includes('/dataquery')) {
      categories.dataQueries.push(endpoint);
    } else if (p.includes('/custom-object') || p.includes('/customobject') || p.includes('/objects/definitions') || p.includes('/objects/records')) {
      categories.customObjects.push(endpoint);
    } else if (p.includes('/fulfillment')) {
      categories.fulfillments.push(endpoint);
    } else if (p.includes('/attachment')) {
      categories.attachments.push(endpoint);
    } else if (p.includes('/notification') || p.includes('/email-template') || p.includes('/event-trigger') || p.includes('/callout')) {
      categories.notifications.push(endpoint);
    } else if (p.includes('/setting') || p.includes('/sequence-set')) {
      categories.settings.push(endpoint);

    } else {
      categories.other.push(endpoint);
    }
  }

  return categories;
}

/**
 * Generate index file that exports all endpoints
 */
function generateIndexFile(categories: Record<string, ApiEndpoint[]>): string {
  const imports: string[] = [];
  const exports: string[] = [];

  let totalEndpoints = 0;

  for (const [category, endpoints] of Object.entries(categories)) {
    if (endpoints.length === 0) continue;

    for (const endpoint of endpoints) {
      const varName = endpoint.id.replace(/-/g, '_') + 'Endpoint';
      const filename = sanitizeFilename(endpoint.id);
      imports.push(`import { ${varName} } from './${category}/${filename}.js';`);
      exports.push(`  ${varName},`);
      totalEndpoints++;
    }
  }

  const code = `/**
 * Auto-generated from OpenAPI specification
 * Total endpoints: ${totalEndpoints}
 */
import type { ApiEndpoint } from '../../types/api.js';

${imports.join('\n')}

export const zuoraEndpoints: ApiEndpoint[] = [
${exports.join('\n')}
];
`;

  return code;
}

/**
 * Main generator function
 */
async function main() {
  console.log('🚀 Starting Zuora API Endpoint Generator\n');

  // Paths
  const specPath = path.join(__dirname, '..', 'zuora_openapi.yaml');
  const outputDir = path.join(__dirname, '..', 'src', 'config', 'generated');

  // Initialize parser
  console.log('📖 Loading OpenAPI specification...');
  const parser = new OpenAPIParser();
  parser.loadSpec(specPath);

  // Parse all endpoints
  console.log('⚙️  Parsing endpoints...');
  const endpoints = parser.parseAllEndpoints();

  const detailedSpecPath = path.join(__dirname, '..', 'zuora_openapi_otc.yaml');
  if (fs.existsSync(detailedSpecPath)) {
    console.log('📝 Enriching field descriptions from detailed OTC spec...');
    const detailedParser = new OpenAPIParser();
    detailedParser.loadSpec(detailedSpecPath);
    const enrichedCount = parser.enrichEndpointsWithDescriptions(endpoints, detailedParser);
    console.log(`✅ Enriched descriptions for ${enrichedCount} endpoints\n`);
  } else {
    console.log('ℹ️  Skipping description enrichment (zuora_openapi_otc.yaml not found)\n');
  }

  console.log(`✅ Parsed ${endpoints.length} endpoints\n`);

  // Categorize endpoints
  console.log('📂 Categorizing endpoints...');
  const categories = categorizeEndpoints(endpoints);

  for (const [category, categoryEndpoints] of Object.entries(categories)) {
    if (categoryEndpoints.length > 0) {
      console.log(`  - ${category}: ${categoryEndpoints.length} endpoints`);
    }
  }

  // Create output directory
  console.log('\n📁 Creating output directories...');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Remove old generated category directories to avoid stale files
  if (fs.existsSync(outputDir)) {
    for (const entry of fs.readdirSync(outputDir)) {
      const entryPath = path.join(outputDir, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        fs.rmSync(entryPath, { recursive: true, force: true });
      }
    }
  }

  // Create (fresh) category directories
  for (const category of Object.keys(categories)) {
    const categoryDir = path.join(outputDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
  }

  // Generate endpoint files
  console.log('\n✍️  Generating endpoint configuration files...');
  let filesGenerated = 0;

  for (const [category, categoryEndpoints] of Object.entries(categories)) {
    for (const endpoint of categoryEndpoints) {
      const filename = sanitizeFilename(endpoint.id) + '.ts';
      const filePath = path.join(outputDir, category, filename);
      const code = generateEndpointFile(endpoint);

      fs.writeFileSync(filePath, code, 'utf8');
      filesGenerated++;
    }
  }

  console.log(`✅ Generated ${filesGenerated} endpoint files`);

  // Generate index file
  console.log('\n📝 Generating index file...');
  const indexCode = generateIndexFile(categories);
  const indexPath = path.join(outputDir, 'index.ts');
  fs.writeFileSync(indexPath, indexCode, 'utf8');
  console.log('✅ Generated index file');

  // Generate summary
  console.log('\n📊 Generation Summary:');
  console.log('═'.repeat(50));
  console.log(`Total endpoints parsed: ${endpoints.length}`);
  console.log(`Files generated: ${filesGenerated}`);
  console.log(`Output directory: ${outputDir}`);
  console.log('═'.repeat(50));

  const categoryBreakdown = Object.entries(categories)
    .filter(([, eps]) => eps.length > 0)
    .map(([cat, eps]) => `  ${cat}: ${eps.length}`)
    .join('\n');
  console.log('\nCategory breakdown:\n' + categoryBreakdown);

  console.log('\n🎉 Generation complete!\n');
}

// Run generator
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
