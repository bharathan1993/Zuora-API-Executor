import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycreditmemobykeyEndpoint: ApiEndpoint = {
  "id": "querycreditmemobykey",
  "name": "Retrieve a credit memo",
  "description": "Retrieve the details of a specific Credit Memo object.",
  "method": "GET",
  "path": "/object-query/credit-memos/{key}",
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
