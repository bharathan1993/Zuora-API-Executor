import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypaymentmethodbykeyEndpoint: ApiEndpoint = {
  "id": "querypaymentmethodbykey",
  "name": "Retrieve a payment method",
  "description": "Retrieve the details of a specific Payment Method object.",
  "method": "GET",
  "path": "/object-query/payment-methods/{key}",
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
