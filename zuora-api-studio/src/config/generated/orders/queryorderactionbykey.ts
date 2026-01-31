import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryorderactionbykeyEndpoint: ApiEndpoint = {
  "id": "queryorderactionbykey",
  "name": "Retrieve an order action",
  "description": "Retrieve the details of a specific Order Action object.",
  "method": "GET",
  "path": "/object-query/order-actions/{key}",
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
