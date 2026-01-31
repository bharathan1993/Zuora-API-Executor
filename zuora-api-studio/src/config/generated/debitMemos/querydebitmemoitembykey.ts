import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydebitmemoitembykeyEndpoint: ApiEndpoint = {
  "id": "querydebitmemoitembykey",
  "name": "Retrieve a debit memo item",
  "description": "Retrieve the details of a specific Debit Memo Item object.",
  "method": "GET",
  "path": "/object-query/debit-memo-items/{key}",
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
