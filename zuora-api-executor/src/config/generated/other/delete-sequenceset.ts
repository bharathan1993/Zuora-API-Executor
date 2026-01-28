import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_sequencesetEndpoint: ApiEndpoint = {
  "id": "delete-sequenceset",
  "name": "Delete a sequence set",
  "description": "Deletes a specific sequence set configured for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.",
  "method": "DELETE",
  "path": "/v1/sequence-sets/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
