import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrefundapplicationitembykeyEndpoint: ApiEndpoint = {
  "id": "queryrefundapplicationitembykey",
  "name": "Retrieve a refund application item",
  "description": "Retrieve the details of a specific Refund Application Item object.",
  "method": "GET",
  "path": "/object-query/refund-application-items/{key}",
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
