import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryproductrateplanbykeyEndpoint: ApiEndpoint = {
  "id": "queryproductrateplanbykey",
  "name": "Retrieve a product rate plan",
  "description": "Retrieve the details of a specific Product Rate Plan object.",
  "method": "GET",
  "path": "/object-query/product-rate-plans/{key}",
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
