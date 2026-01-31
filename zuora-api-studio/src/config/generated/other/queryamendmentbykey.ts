import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryamendmentbykeyEndpoint: ApiEndpoint = {
  "id": "queryamendmentbykey",
  "name": "Retrieve an amendment",
  "description": "Retrieve the details of a specific Amendment object.",
  "method": "GET",
  "path": "/object-query/amendments/{key}",
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
