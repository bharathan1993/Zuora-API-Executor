import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryratingresultbykeyEndpoint: ApiEndpoint = {
  "id": "queryratingresultbykey",
  "name": "Retrieve a rating result",
  "description": "Retrieve the details of a specific Rating Result object.",
  "method": "GET",
  "path": "/object-query/rating-results/{key}",
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
