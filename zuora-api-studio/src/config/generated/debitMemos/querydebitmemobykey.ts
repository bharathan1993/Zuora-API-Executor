import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydebitmemobykeyEndpoint: ApiEndpoint = {
  "id": "querydebitmemobykey",
  "name": "Retrieve a debit memo",
  "description": "Retrieve the details of a specific Debit Memo object.",
  "method": "GET",
  "path": "/object-query/debit-memos/{key}",
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
