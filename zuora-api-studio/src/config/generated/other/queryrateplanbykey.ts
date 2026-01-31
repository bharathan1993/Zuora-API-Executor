import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrateplanbykeyEndpoint: ApiEndpoint = {
  "id": "queryrateplanbykey",
  "name": "Retrieve a rate plan",
  "description": "Retrieve the details of a specific Rate Plan object.",
  "method": "GET",
  "path": "/object-query/rate-plans/{key}",
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
