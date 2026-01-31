import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querytaxationitembykeyEndpoint: ApiEndpoint = {
  "id": "querytaxationitembykey",
  "name": "Retrieve a taxation item",
  "description": "Retrieve the details of a specific Taxation Item object.",
  "method": "GET",
  "path": "/object-query/taxation-items/{key}",
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
