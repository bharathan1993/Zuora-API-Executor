import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypaymentscheduleitembykeyEndpoint: ApiEndpoint = {
  "id": "querypaymentscheduleitembykey",
  "name": "Retrieve a payment schedule item",
  "description": "Retrieve the details of a specific Payment Schedule Item object.",
  "method": "GET",
  "path": "/object-query/payment-schedule-items/{key}",
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
