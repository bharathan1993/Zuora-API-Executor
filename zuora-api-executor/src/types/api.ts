export type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'email' | 'array' | 'object' | 'textarea';

export interface FieldDefinition {
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  description?: string;
  placeholder?: string;
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
  authType?: 'bearer' | 'basic' | 'apiKey';
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
