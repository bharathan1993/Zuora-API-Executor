# OpenAPI Generator for Zuora API Studio

## 🎉 Overview

This project now includes an **automatic endpoint configuration generator** that parses the Zuora OpenAPI specification and generates TypeScript configurations for **all 712 Zuora APIs**.

## 📊 What Was Generated

- **712 API Endpoints** across 9 categories
- **Organized by category**:
  - Accounts (15 endpoints)
  - Subscriptions (24 endpoints)
  - Orders (26 endpoints)
  - Invoices (42 endpoints)
  - Payments (95 endpoints)
  - Products (50 endpoints)
  - Contacts (11 endpoints)
  - Credit Memos (40 endpoints)
  - Debit Memos (31 endpoints)
  - Other (378 endpoints)

- **TypeScript configuration files** in `src/config/generated/`
- **Complete field definitions** with types, descriptions, validations
- **Organized field sections** (Account Settings, Payment Settings, Tax Settings, etc.)
- **All 10 Zuora environments** (US/EU/APAC sandbox and production)

## 🚀 How to Use

### Regenerate Endpoints

To regenerate all endpoint configurations from the latest OpenAPI spec:

```bash
yarn generate-endpoints
```

This command:
1. Reads `zuora_openapi.yaml` (10.7MB OpenAPI 3.0 spec)
2. Parses all 712 endpoints
3. Resolves all `$ref` schema references
4. Converts OpenAPI schemas to our `FieldDefinition` format
5. Organizes fields into logical sections
6. Generates TypeScript files in `src/config/generated/`
7. Creates an index file exporting all endpoints

### Generated File Structure

```
src/config/generated/
├── accounts/
│   ├── post-account.ts
│   ├── get-account.ts
│   ├── put-account.ts
│   └── ...
├── subscriptions/
│   ├── post-subscription.ts
│   ├── get-subscription.ts
│   └── ...
├── orders/
├── invoices/
├── payments/
├── products/
├── contacts/
├── creditMemos/
├── debitMemos/
├── other/
└── index.ts  (exports all endpoints)
```

## 🛠️ Architecture

### 1. OpenAPI Parser (`src/utils/openApiParser.ts`)

The parser handles:
- **YAML parsing** with js-yaml
- **Schema resolution** (resolves `$ref` and `allOf`)
- **Type mapping** (OpenAPI types → our `FieldType`)
- **Field sectioning** (automatically groups related fields)
- **Nested objects** (recursively processes complex schemas)

### 2. Generator Script (`scripts/generateEndpoints.ts`)

The generator:
- Uses the parser to extract endpoints
- Categorizes endpoints by URL patterns
- Generates TypeScript configuration files
- Creates an index file with all exports
- Provides progress feedback

### 3. Integration (`src/config/zuoraEndpoints.ts`)

The main config file:
- Imports from `generated/index.ts`
- Provides helper functions:
  - `getEndpointById(id)` - Find endpoint by ID
  - `getEndpointsByCategory(category)` - Filter by category
  - `getAvailableCategories()` - List all categories

## 📝 Example Generated Configuration

```typescript
export const post_accountEndpoint: ApiEndpoint = {
  "id": "post-account",
  "name": "Create an account",
  "description": "Creates a customer account with a payment method...",
  "method": "POST",
  "path": "/v1/accounts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": [
    {
      "id": "us-developer-central-sandbox-incl-test-drive",
      "name": "US Developer & Central Sandbox (incl. Test Drive)",
      "baseUrl": "https://rest.test.zuora.com"
    },
    // ... 9 more environments
  ],
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Account name, up to 255 characters.",
      "maxLength": 255
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "A unique account number...",
      "section": "Account Settings"
    },
    // ... 100+ more fields
  ]
}
```

## 🎨 UI Features

### Enhanced Sidebar

The Sidebar component now includes:
- **Category grouping** - Endpoints organized by business domain
- **Collapsible sections** - Expand/collapse categories
- **Search functionality** - Find APIs by name, path, or method
- **API counter** - Shows total APIs available (712)
- **Method badges** - Color-coded HTTP methods (POST, GET, PUT, DELETE)
- **Icons per category** - Visual indicators for each category

### Dynamic Forms

Each API endpoint automatically gets:
- **Auto-generated forms** from field definitions
- **Field validation** (required, maxLength, pattern, enum)
- **Nested objects** (expandable/collapsible)
- **Section organization** (Account Settings, Payment Settings, etc.)
- **Type-aware inputs** (text, number, boolean, date, email, textarea, select)
- **Custom headers** support
- **JSON preview** of request body

## 🔄 Keeping Up-to-Date

When Zuora updates their OpenAPI specification:

1. Download the latest spec: `zuora_openapi.yaml`
2. Replace the existing file
3. Run: `yarn generate-endpoints`
4. All 712+ endpoints will be regenerated with latest fields

## 📚 Developer Reference

### Adding a New Endpoint Category

Edit `src/config/zuoraEndpoints.ts`:

```typescript
export const getAvailableCategories = (): string[] => {
  return [
    // ... existing categories
    'your-new-category',
  ];
};

export const getEndpointsByCategory = (category: string): ApiEndpoint[] => {
  const categoryLower = category.toLowerCase();

  return zuoraEndpoints.filter((endpoint) => {
    const path = endpoint.path.toLowerCase();

    switch (categoryLower) {
      // ... existing cases
      case 'your-new-category':
        return path.includes('/your-pattern');
      // ...
    }
  });
};
```

### Customizing Field Sections

Edit `src/utils/openApiParser.ts` → `determineSection()`:

```typescript
private determineSection(fieldName: string): string | undefined {
  const name = fieldName.toLowerCase();

  if (name.includes('your-pattern')) {
    return 'Your Custom Section';
  }

  // ... existing logic
}
```

### Custom Type Mapping

Edit `src/utils/openApiParser.ts` → `mapOpenAPIType()`:

```typescript
private mapOpenAPIType(schema: any): FieldType {
  // Add custom type mappings here
  if (schema.format === 'your-custom-format') {
    return 'your-custom-type';
  }

  // ... existing logic
}
```

## 🎯 Benefits

1. **Massive Scale** - From 1 API to 712 APIs instantly
2. **Always Up-to-Date** - Regenerate from latest spec
3. **Zero Manual Work** - No more typing field definitions
4. **Type Safety** - Full TypeScript support
5. **Consistent UI** - All APIs have same UX
6. **Comprehensive** - All fields, all parameters, all endpoints
7. **Maintainable** - Single source of truth (OpenAPI spec)

## 📦 Dependencies

- `js-yaml` - Parse OpenAPI YAML files
- `@types/js-yaml` - TypeScript types for js-yaml
- `tsx` - Execute TypeScript scripts

## 🐛 Troubleshooting

### Generator fails with memory error

The OpenAPI spec is 10.7MB. Increase Node.js memory:

```bash
NODE_OPTIONS=--max-old-space-size=4096 yarn generate-endpoints
```

### TypeScript compilation errors

Run TypeScript in watch mode to see errors:

```bash
yarn tsc --watch
```

### Missing fields in generated endpoints

Check if the field is defined in `zuora_openapi.yaml` under the schema for that endpoint.

## 🎓 Next Steps

1. ✅ Generated 712 endpoints
2. ✅ Category organization
3. ✅ Search functionality
4. ⏳ Test each category
5. ⏳ Add example requests
6. ⏳ Improve field descriptions
7. ⏳ Add validation error messages
8. ⏳ Deploy to production

## 🙌 Hackathon Achievement

**From 1 manually configured API to 712 auto-generated APIs in a single sprint!**

This generator transforms the project from a proof-of-concept to a **production-ready tool** that can handle the entire Zuora API catalog.
