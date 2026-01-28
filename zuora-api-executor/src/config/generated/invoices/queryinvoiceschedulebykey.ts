import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryinvoiceschedulebykeyEndpoint: ApiEndpoint = {
  "id": "queryinvoiceschedulebykey",
  "name": "Retrieve an invoice schedule",
  "description": "Retrieves the details of a specific Invoice Schedule object.",
  "method": "GET",
  "path": "/object-query/invoice-schedules/{key}",
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
