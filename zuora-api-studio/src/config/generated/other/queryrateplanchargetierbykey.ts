import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrateplanchargetierbykeyEndpoint: ApiEndpoint = {
  "id": "queryrateplanchargetierbykey",
  "name": "Retrieve a rate plan charge tier",
  "description": "Retrieve the details of a specific Rate Plan Charge Tier object.",
  "method": "GET",
  "path": "/object-query/rate-plan-charge-tiers/{key}",
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
