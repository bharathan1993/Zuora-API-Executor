import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryorderlineitembykeyEndpoint: ApiEndpoint = {
  "id": "queryorderlineitembykey",
  "name": "Retrieve an order line item",
  "description": "Retrieve the details of a specific Order Line Item object.",
  "method": "GET",
  "path": "/object-query/order-line-items/{key}",
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
