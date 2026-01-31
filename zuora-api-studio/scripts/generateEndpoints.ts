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
 * Group endpoints by category/tag
 */
function categorizeEndpoints(endpoints: ApiEndpoint[]): Record<string, ApiEndpoint[]> {
  const categories: Record<string, ApiEndpoint[]> = {
    accounts: [],
    subscriptions: [],
    orders: [],
    invoices: [],
    payments: [],
    products: [],
    contacts: [],
    creditMemos: [],
    debitMemos: [],
    other: [],
  };

  for (const endpoint of endpoints) {
    const path = endpoint.path.toLowerCase();

    if (path.includes('/accounts')) {
      categories.accounts.push(endpoint);
    } else if (path.includes('/subscription')) {
      categories.subscriptions.push(endpoint);
    } else if (path.includes('/order')) {
      categories.orders.push(endpoint);
    } else if (path.includes('/invoice')) {
      categories.invoices.push(endpoint);
    } else if (path.includes('/payment')) {
      categories.payments.push(endpoint);
    } else if (path.includes('/product') || path.includes('/catalog')) {
      categories.products.push(endpoint);
    } else if (path.includes('/contact')) {
      categories.contacts.push(endpoint);
    } else if (path.includes('/credit-memo')) {
      categories.creditMemos.push(endpoint);
    } else if (path.includes('/debit-memo')) {
      categories.debitMemos.push(endpoint);
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

  // Create category directories
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

  console.log('\n🎉 Generation complete!\n');
  console.log('Next steps:');
  console.log('1. Review generated files in src/config/generated/');
  console.log('2. Update src/config/zuoraEndpoints.ts to import from generated/index.ts');
  console.log('3. Test the application with the new endpoints\n');
}

// Run generator
main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
