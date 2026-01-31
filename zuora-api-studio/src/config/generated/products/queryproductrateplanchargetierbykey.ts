import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryproductrateplanchargetierbykeyEndpoint: ApiEndpoint = {
  "id": "queryproductrateplanchargetierbykey",
  "name": "Retrieve a product rate plan charge tier",
  "description": "Retrieve the details of a specific Product Rate Plan Charge Tier object.",
  "method": "GET",
  "path": "/object-query/product-rate-plan-charge-tiers/{key}",
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
