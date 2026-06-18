import fs from 'fs';
import yaml from 'js-yaml';
import type { ApiEndpoint, FieldDefinition, FieldType, Environment } from '../types/api.js';

interface OpenAPISpec {
  openapi: string;
  info: any;
  servers: Array<{ url: string; description?: string }>;
  paths: Record<string, any>;
  components: {
    schemas: Record<string, any>;
    parameters?: Record<string, any>;
  };
}

interface ParsedEndpoint {
  path: string;
  method: string;
  operation: any;
  requestBodySchema?: any;
  parameters?: any[];
}

// Global header parameter names to skip as query/path params (they become the headers object)
const GLOBAL_HEADER_PARAM_NAMES = new Set([
  'Accept-Encoding',
  'Content-Encoding',
  'Zuora-Entity-Ids',
  'Zuora-Org-Ids',
  'Zuora-Track-Id',
  'Zuora-Version',
  'X-Zuora-WSDL-Version',
  'Authorization',
]);

export class OpenAPIParser {
  private spec: OpenAPISpec | null = null;
  private schemas: Record<string, any> = {};
  private componentParams: Record<string, any> = {};

  /**
   * Load and parse the OpenAPI YAML file
   */
  loadSpec(filePath: string): void {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      this.spec = yaml.load(fileContents) as OpenAPISpec;
      this.schemas = this.spec.components?.schemas || {};
      this.componentParams = this.spec.components?.parameters || {};
      console.log(`✅ Loaded OpenAPI spec with ${Object.keys(this.spec.paths).length} paths`);
    } catch (error) {
      console.error('Error loading OpenAPI spec:', error);
      throw error;
    }
  }

  /**
   * Get all environments from the OpenAPI spec
   */
  getEnvironments(): Environment[] {
    if (!this.spec) {
      throw new Error('Spec not loaded. Call loadSpec() first.');
    }

    return this.spec.servers.map((server) => ({
      id: this.generateEnvironmentId(server.description || server.url),
      name: server.description || server.url,
      baseUrl: server.url,
    }));
  }

  /**
   * Generate a consistent environment ID from description
   */
  private generateEnvironmentId(description: string): string {
    return description
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  /**
   * Extract all endpoints from the OpenAPI spec
   */
  getAllEndpoints(): ParsedEndpoint[] {
    if (!this.spec) {
      throw new Error('Spec not loaded. Call loadSpec() first.');
    }

    const endpoints: ParsedEndpoint[] = [];

    for (const [path, pathItem] of Object.entries(this.spec.paths)) {
      // Path-level parameters (inherited by all operations on this path)
      const pathItemParams: any[] = pathItem.parameters || [];

      for (const [method, operation] of Object.entries(pathItem)) {
        if (['get', 'post', 'put', 'delete', 'patch'].includes(method.toLowerCase())) {
          const requestBodySchema = this.getRequestBodySchema(operation);
          // Operation-level parameters override/extend path-level ones
          const operationParams: any[] = (operation as any).parameters || [];

          // Merge: operation params take precedence over path-item params (dedupe by name+in)
          const mergedParams = this.mergeParameters(pathItemParams, operationParams);

          endpoints.push({
            path,
            method: method.toUpperCase(),
            operation,
            requestBodySchema,
            parameters: mergedParams,
          });
        }
      }
    }

    return endpoints;
  }

  /**
   * Merge path-level and operation-level parameters, with operation params taking precedence
   */
  private mergeParameters(pathParams: any[], opParams: any[]): any[] {
    const resolvedOp = opParams.map(p => this.resolveParameter(p)).filter(Boolean);
    const resolvedPath = pathParams.map(p => this.resolveParameter(p)).filter(Boolean);

    const opKeys = new Set(resolvedOp.map(p => `${p.in}:${p.name}`));
    const merged = [...resolvedOp];
    for (const p of resolvedPath) {
      if (!opKeys.has(`${p.in}:${p.name}`)) {
        merged.push(p);
      }
    }
    return merged;
  }

  /**
   * Resolve a parameter — follow $ref if present
   */
  private resolveParameter(param: any): any | null {
    if (!param) return null;

    if (param.$ref) {
      const refName = param.$ref.split('/').pop();
      return this.componentParams[refName] || null;
    }

    return param;
  }

  /**
   * Get request body schema from operation
   */
  private getRequestBodySchema(operation: any): any {
    if (!operation.requestBody?.content?.['application/json']?.schema) {
      return null;
    }

    const schema = operation.requestBody.content['application/json'].schema;
    return this.resolveSchema(schema);
  }

  /**
   * Resolve $ref references recursively
   */
  private resolveSchema(schema: any, visited: Set<string> = new Set()): any {
    if (!schema) return null;

    // Handle $ref
    if (schema.$ref) {
      const refPath = schema.$ref;

      // Prevent circular references
      if (visited.has(refPath)) {
        console.warn(`Circular reference detected: ${refPath}`);
        return null;
      }

      visited.add(refPath);

      const refName = refPath.split('/').pop();
      const resolvedSchema = this.schemas[refName];

      if (!resolvedSchema) {
        console.warn(`Schema not found: ${refName}`);
        return null;
      }

      return this.resolveSchema(resolvedSchema, visited);
    }

    // Handle allOf (merge schemas)
    if (schema.allOf) {
      const merged: any = { properties: {} };

      for (const subSchema of schema.allOf) {
        const resolved = this.resolveSchema(subSchema, visited);
        if (resolved?.properties) {
          merged.properties = { ...merged.properties, ...resolved.properties };
        }
        if (resolved?.required) {
          merged.required = [...(merged.required || []), ...resolved.required];
        }
      }

      return merged;
    }

    // Handle oneOf/anyOf (union properties for UI visibility)
    if (schema.oneOf || schema.anyOf) {
      const variants = schema.oneOf || schema.anyOf;
      const merged: any = { properties: {} };

      for (const variant of variants) {
        const resolved = this.resolveSchema(variant, new Set(visited));
        if (resolved?.properties) {
          merged.properties = { ...merged.properties, ...resolved.properties };
        }
        if (resolved?.required) {
          merged.required = [...(merged.required || []), ...resolved.required];
        }
      }

      return {
        ...schema,
        ...merged,
      };
    }

    // Handle properties with nested $refs
    if (schema.properties) {
      const resolvedProperties: Record<string, any> = {};

      for (const [propName, propSchema] of Object.entries(schema.properties)) {
        resolvedProperties[propName] = this.resolveSchema(propSchema as any, new Set(visited));
      }

      return {
        ...schema,
        properties: resolvedProperties,
      };
    }

    // Handle array items with nested $refs
    if (schema.items) {
      return {
        ...schema,
        items: this.resolveSchema(schema.items, new Set(visited)),
      };
    }

    return schema;
  }

  /**
   * Convert OpenAPI schema to FieldDefinition array
   */
  schemaToFields(schema: any, requiredFields: string[] = []): FieldDefinition[] {
    if (!schema?.properties) {
      return [];
    }

    const fields: FieldDefinition[] = [];
    const required = schema.required || requiredFields || [];

    for (const [fieldName, fieldSchema] of Object.entries(schema.properties)) {
      const field = this.convertFieldSchema(fieldName, fieldSchema as any, required.includes(fieldName));
      if (field) {
        fields.push(field);
      }
    }

    return fields;
  }

  /**
   * Convert a single field schema to FieldDefinition
   */
  convertFieldSchema(name: string, schema: any, isRequired: boolean): FieldDefinition | null {
    if (!schema) return null;

    // Map OpenAPI type to our FieldType
    const fieldType = this.mapOpenAPIType(schema);

    const field: FieldDefinition = {
      name,
      label: this.generateLabel(name),
      type: fieldType,
      required: isRequired,
      description: schema.description ? this.normalizeDescription(schema.description) : undefined,
      placeholder: schema.placeholder || undefined,
      defaultValue: schema.default,
    };

    // Add enum values
    if (schema.enum) {
      field.enum = schema.enum.map(String);
    }

    // Add string constraints
    if (schema.maxLength) {
      field.maxLength = schema.maxLength;
    }
    if (schema.minLength) {
      field.minLength = schema.minLength;
    }
    if (schema.pattern) {
      field.pattern = schema.pattern;
    }

    // Handle nested objects
    if (fieldType === 'object' && schema.properties) {
      field.fields = this.schemaToFields(schema, schema.required || []);
    }

    // Handle arrays
    if (fieldType === 'array') {
      const itemSchema = schema.items ? this.resolveSchema(schema.items) : null;
      if (itemSchema) {
        const itemType = this.mapOpenAPIType(itemSchema);
        field.itemType = itemType;
        if (itemSchema.enum) {
          field.itemEnum = itemSchema.enum.map(String);
        }
        if (itemType === 'object' && itemSchema.properties) {
          field.itemFields = this.schemaToFields(itemSchema, itemSchema.required || []);
        }
      }
    }

    // Determine section based on field name patterns
    field.section = this.determineSection(name);

    return field;
  }

  /**
   * Map OpenAPI type to our FieldType
   */
  private mapOpenAPIType(schema: any): FieldType {
    if (schema.items && !schema.type) return 'array';
    if (schema.properties && !schema.type) return 'object';

    const type = schema.type?.toLowerCase();
    const format = schema.format?.toLowerCase();

    if (type === 'string') {
      if (format === 'date' || format === 'date-time') return 'date';
      if (format === 'email') return 'email';
      if (schema.maxLength && schema.maxLength > 500) return 'textarea';
      return 'string';
    }

    if (type === 'integer' || type === 'number') return 'number';
    if (type === 'boolean') return 'boolean';
    if (type === 'array') return 'array';
    if (type === 'object') return 'object';

    return 'string'; // default
  }

  /**
   * Generate human-readable label from field name
   */
  private generateLabel(name: string): string {
    // Split camelCase or PascalCase
    const words = name
      .replace(/([A-Z])/g, ' $1')
      .replace(/[_-]/g, ' ')
      .trim()
      .split(/\s+/);

    // Capitalize first letter of each word
    return words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  /**
   * Determine which section a field belongs to based on naming patterns
   */
  private determineSection(fieldName: string): string | undefined {
    const name = fieldName.toLowerCase();

    // Account Settings
    if (name.includes('account') || name.includes('number') || name.includes('name') ||
        name.includes('batch') || name.includes('crm') || name.includes('parent')) {
      return 'Account Settings';
    }

    // Payment Settings
    if (name.includes('payment') || name.includes('autopay') || name.includes('gateway') ||
        name.includes('creditcard') || name.includes('paymentmethod')) {
      return 'Payment Settings';
    }

    // Invoice Settings
    if (name.includes('invoice') || name.includes('bill') || name.includes('document') ||
        name.includes('template')) {
      return 'Invoice & Document Settings';
    }

    // Contact Information
    if (name.includes('contact') || name.includes('billto') || name.includes('soldto') ||
        name.includes('shipto')) {
      return 'Contact Information';
    }

    // Tax Settings
    if (name.includes('tax') || name.includes('vat')) {
      return 'Tax Settings';
    }

    // Credit/Settlement
    if (name.includes('credit') || name.includes('debit') || name.includes('memo') ||
        name.includes('settlement') || name.includes('apply')) {
      return 'Credit & Settlement Settings';
    }

    // Subscription Settings
    if (name.includes('subscription') || name.includes('collect') || name.includes('runbilling')) {
      return 'Subscription Settings';
    }

    // Communication
    if (name.includes('communication') || name.includes('email') || name.includes('profile')) {
      return 'Communication Settings';
    }

    // Advanced/Other
    return 'Additional Fields';
  }

  /**
   * Extract query parameters from the resolved parameters list
   */
  private extractQueryParams(params: any[]): FieldDefinition[] {
    const fields: FieldDefinition[] = [];

    for (const param of params) {
      if (!param || param.in !== 'query') continue;
      // Skip global Zuora headers that happen to use in:query (none expected, but guard anyway)
      if (GLOBAL_HEADER_PARAM_NAMES.has(param.name)) continue;

      const schema = param.schema || {};
      const field = this.convertFieldSchema(param.name, schema, param.required ?? false);
      if (field) {
        // Override description from the parameter-level description (richer than schema-level)
        if (param.description) {
          field.description = this.normalizeDescription(param.description);
        }
        // Clear section for query params — they live in their own panel
        field.section = undefined;
        fields.push(field);
      }
    }

    return fields;
  }

  /**
   * Extract path parameters — prefer spec metadata, fall back to regex on the path string
   */
  private extractPathParams(path: string, params?: any[]): FieldDefinition[] {
    // Build a map from spec parameters (in: path) for quick lookup
    const specPathParams: Record<string, any> = {};
    if (params) {
      for (const param of params) {
        if (param?.in === 'path') {
          specPathParams[param.name] = param;
        }
      }
    }

    const pathParams: FieldDefinition[] = [];
    const paramRegex = /\{([^}]+)\}/g;
    let match;

    while ((match = paramRegex.exec(path)) !== null) {
      const paramName = match[1];
      const specParam = specPathParams[paramName];

      if (specParam) {
        const schema = specParam.schema || {};
        const field = this.convertFieldSchema(paramName, schema, true);
        if (field) {
          if (specParam.description) {
            field.description = this.normalizeDescription(specParam.description);
          }
          field.section = undefined;
          pathParams.push(field);
        }
      } else {
        // Fallback: synthesise a basic string field
        pathParams.push({
          name: paramName,
          label: this.generateLabel(paramName),
          type: 'string',
          required: true,
          description: `Path parameter: ${paramName}`,
          placeholder: `Enter ${this.generateLabel(paramName).toLowerCase()}`,
        });
      }
    }

    return pathParams;
  }

  /**
   * Convert parsed endpoint to ApiEndpoint format
   */
  convertToApiEndpoint(parsed: ParsedEndpoint, environments: Environment[]): ApiEndpoint {
    const operation = parsed.operation;
    const operationId = operation.operationId || this.generateOperationId(parsed.path, parsed.method);

    let fields: FieldDefinition[] = [];

    if (parsed.requestBodySchema) {
      fields = this.schemaToFields(
        parsed.requestBodySchema,
        parsed.requestBodySchema.required || []
      );
    }

    // Extract path and query parameters from the merged parameters list
    const resolvedParams = parsed.parameters || [];
    const pathParams = this.extractPathParams(parsed.path, resolvedParams);
    const queryParams = this.extractQueryParams(resolvedParams);

    // Group body fields by section
    const groupedFields = this.groupFieldsBySection(fields);

    return {
      id: operationId.toLowerCase().replace(/_/g, '-'),
      name: operation.summary || this.generateName(parsed.path, parsed.method),
      description: operation.description ? this.normalizeDescription(operation.description.split('\n')[0]) : '',
      method: parsed.method as 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
      path: parsed.path,
      baseUrl: environments[0]?.baseUrl || 'https://rest.zuora.com',
      environments,
      requiresAuth: true,
      authType: 'bearer',
      pathParams: pathParams.length > 0 ? pathParams : undefined,
      queryParams: queryParams.length > 0 ? queryParams : undefined,
      bodyFields: this.flattenGroupedFields(groupedFields),
      headers: {
        'Content-Type': 'application/json',
        'Zuora-Track-Id': '',
        'Zuora-Entity-Ids': '',
        'Zuora-Org-Ids': '',
        'Zuora-Version': '',
      },
    };
  }

  /**
   * Group fields by their section
   */
  private groupFieldsBySection(fields: FieldDefinition[]): Record<string, FieldDefinition[]> {
    const grouped: Record<string, FieldDefinition[]> = {
      required: [],
    };

    for (const field of fields) {
      if (field.required && !field.section) {
        grouped.required.push(field);
      } else if (field.section) {
        if (!grouped[field.section]) {
          grouped[field.section] = [];
        }
        grouped[field.section].push(field);
      } else {
        if (!grouped['Additional Fields']) {
          grouped['Additional Fields'] = [];
        }
        grouped['Additional Fields'].push(field);
      }
    }

    return grouped;
  }

  /**
   * Flatten grouped fields back to array (required first, then sectioned)
   */
  private flattenGroupedFields(grouped: Record<string, FieldDefinition[]>): FieldDefinition[] {
    const result: FieldDefinition[] = [];

    // Add required fields first (without section)
    if (grouped.required) {
      result.push(...grouped.required);
    }

    // Add sectioned fields
    for (const [section, fields] of Object.entries(grouped)) {
      if (section !== 'required') {
        result.push(...fields);
      }
    }

    return result;
  }

  /**
   * Generate operation ID from path and method
   */
  private generateOperationId(path: string, method: string): string {
    const cleanPath = path
      .replace(/^\/v1\//, '')
      .replace(/\{[^}]+\}/g, 'id')
      .replace(/\//g, '_')
      .replace(/-/g, '_');

    return `${method}_${cleanPath}`;
  }

  /**
   * Generate human-readable name from path and method
   */
  private generateName(path: string, method: string): string {
    const resource = path
      .split('/')
      .filter(part => part && !part.startsWith('{'))
      .pop() || 'Resource';

    const actionMap: Record<string, string> = {
      POST: 'Create',
      GET: 'Get',
      PUT: 'Update',
      DELETE: 'Delete',
      PATCH: 'Patch',
    };

    const action = actionMap[method] || method;
    const resourceName = this.generateLabel(resource);

    return `${action} ${resourceName}`;
  }

  /**
   * Strip HTML and normalize whitespace from OpenAPI description text.
   */
  normalizeDescription(description: string): string {
    return description
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<a [^>]*>(.*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Copy field descriptions from a detailed OpenAPI spec onto endpoints parsed from a compact spec.
   */
  enrichEndpointsWithDescriptions(
    endpoints: ApiEndpoint[],
    detailedParser: OpenAPIParser,
  ): number {
    const detailedByKey = new Map<string, ParsedEndpoint>();

    for (const parsed of detailedParser.getAllEndpoints()) {
      detailedByKey.set(`${parsed.method} ${parsed.path}`, parsed);
    }

    let enrichedCount = 0;

    for (const endpoint of endpoints) {
      const detailed = detailedByKey.get(`${endpoint.method} ${endpoint.path}`);
      if (!detailed) continue;

      let enriched = false;

      if (detailed.operation.description) {
        const description = this.normalizeDescription(detailed.operation.description.split('\n')[0]);
        if (description && description !== endpoint.description) {
          endpoint.description = description;
          enriched = true;
        }
      }

      if (endpoint.bodyFields?.length && detailed.requestBodySchema) {
        enriched = this.enrichFieldDescriptions(endpoint.bodyFields, detailed.requestBodySchema) || enriched;
      }

      if (endpoint.queryParams?.length && detailed.parameters?.length) {
        enriched = this.enrichParameterDescriptions(endpoint.queryParams, detailed.parameters) || enriched;
      }

      if (endpoint.pathParams?.length && detailed.parameters?.length) {
        enriched = this.enrichParameterDescriptions(endpoint.pathParams, detailed.parameters) || enriched;
      }

      if (enriched) {
        enrichedCount += 1;
      }
    }

    return enrichedCount;
  }

  private enrichParameterDescriptions(fields: FieldDefinition[], parameters: any[]): boolean {
    let enriched = false;

    for (const field of fields) {
      const param = parameters.find((candidate) => candidate?.name === field.name);
      if (!param?.description) continue;

      const description = this.normalizeDescription(param.description);
      if (description && description !== field.description) {
        field.description = description;
        enriched = true;
      }
    }

    return enriched;
  }

  private enrichFieldDescriptions(fields: FieldDefinition[], schema: any): boolean {
    const resolvedSchema = this.resolveSchema(schema);
    if (!resolvedSchema?.properties) {
      return false;
    }

    let enriched = false;

    for (const field of fields) {
      const propertySchema = resolvedSchema.properties[field.name];
      if (!propertySchema) continue;

      const resolvedProperty = this.resolveSchema(propertySchema);
      if (resolvedProperty?.description) {
        const description = this.normalizeDescription(resolvedProperty.description);
        if (description && description !== field.description) {
          field.description = description;
          enriched = true;
        }
      }

      if (field.fields?.length) {
        enriched = this.enrichFieldDescriptions(field.fields, resolvedProperty) || enriched;
      }

      if (field.itemFields?.length && resolvedProperty?.items) {
        enriched = this.enrichFieldDescriptions(field.itemFields, resolvedProperty.items) || enriched;
      }
    }

    return enriched;
  }

  /**
   * Parse all endpoints and convert to ApiEndpoint format
   */
  parseAllEndpoints(): ApiEndpoint[] {
    const environments = this.getEnvironments();
    const parsedEndpoints = this.getAllEndpoints();

    console.log(`\n📊 Processing ${parsedEndpoints.length} endpoints...`);

    const apiEndpoints: ApiEndpoint[] = [];

    for (const parsed of parsedEndpoints) {
      try {
        const apiEndpoint = this.convertToApiEndpoint(parsed, environments);
        apiEndpoints.push(apiEndpoint);
      } catch (error) {
        console.warn(`⚠️  Failed to parse ${parsed.method} ${parsed.path}:`, error);
      }
    }

    console.log(`✅ Successfully parsed ${apiEndpoints.length} endpoints\n`);

    return apiEndpoints;
  }
}
