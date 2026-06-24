export type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'email' | 'array' | 'object' | 'textarea';

export interface ChainedValue {
  id: string;
  key: string;     // JSON path, e.g. "accountId" or "subscription.id"
  value: string;
  source: string;  // e.g. "Create Account"
  pinnedAt: number;
}

export interface FieldDefinition {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  description?: string;
  placeholder?: string;
  sampleValue?: any;
  defaultValue?: any;
  enum?: string[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  fields?: FieldDefinition[]; // For nested objects
  itemType?: FieldType; // For array items
  itemFields?: FieldDefinition[]; // For array of objects
  itemEnum?: string[]; // For array of enum values
  section?: string; // Group fields into sections
  advanced?: boolean; // Mark as advanced/optional field
}

export interface Environment {
  id: string;
  name: string;
  baseUrl: string;
  description?: string;
}

export interface ApiEndpoint {
  id: string;
  name: string;
  description: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  baseUrl: string; // Default base URL
  environments?: Environment[]; // Available environments
  requiresAuth: boolean;
  authType?: 'bearer' | 'basic' | 'apiKey' | 'revenue-token';
  product?: 'revenue';
  headers?: Record<string, string>;
  queryParams?: FieldDefinition[];
  pathParams?: FieldDefinition[];
  bodyFields?: FieldDefinition[];
  exampleRequest?: any;
  exampleResponse?: any;
}

export interface ApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
  duration: number;
  timestamp?: number;
  blobUrl?: string;
  filename?: string;
  request?: {
    url: string;
    method: string;
    headers: Record<string, string>;
    data?: any;
  };
}

export interface ApiRequest {
  endpoint: ApiEndpoint;
  authToken?: string;
  data?: any;
  queryParams?: Record<string, any>;
  pathParams?: Record<string, any>;
  customHeaders?: Record<string, string>;
}

export interface SavedRequest {
  id: string;
  name: string;
  endpointId: string;
  environmentId?: string;
  folderId?: string;
  data?: Record<string, any>;
  queryParams?: Record<string, any>;
  customHeaders?: Record<string, string>;
  pathParams?: Record<string, any>;
  createdAt: number;
}

export interface SavedFolder {
  id: string;
  name: string;
  endpointId: string;
  createdAt: number;
}

// ── Custom Fields ─────────────────────────────────────────────────────────────

export const CUSTOM_FIELD_OBJECT_TYPES = [
  'Account', 'Subscription', 'Order', 'Invoice', 'Payment',
  'CreditMemo', 'DebitMemo', 'Contact', 'Product', 'RatePlan', 'RatePlanCharge',
] as const;

export type CustomFieldObjectType = typeof CUSTOM_FIELD_OBJECT_TYPES[number];

export interface CustomFieldDefinition {
  id: string;
  name: string;        // API name, e.g. "PONumber__c"
  label: string;       // Display label, e.g. "PO Number"
  type: 'string' | 'number' | 'boolean' | 'date';
  defaultValue?: string;
}

export type TenantCustomFields = Partial<Record<CustomFieldObjectType, CustomFieldDefinition[]>>;
