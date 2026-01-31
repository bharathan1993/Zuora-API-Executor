import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypaymentrunbykeyEndpoint: ApiEndpoint = {
  "id": "querypaymentrunbykey",
  "name": "Retrieve a payment run",
  "description": "Retrieve the details of a specific Payment Run object.",
  "method": "GET",
  "path": "/object-query/payment-runs/{key}",
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
