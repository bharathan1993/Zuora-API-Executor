import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryinvoicebykeyEndpoint: ApiEndpoint = {
  "id": "queryinvoicebykey",
  "name": "Retrieve an invoice",
  "description": "Retrieve the details of a specific Invoice object.",
  "method": "GET",
  "path": "/object-query/invoices/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
