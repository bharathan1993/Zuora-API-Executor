import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryratingdetailbykeyEndpoint: ApiEndpoint = {
  "id": "queryratingdetailbykey",
  "name": "Retrieve a rating detail",
  "description": "Retrieves a single rating detail by ID.",
  "method": "GET",
  "path": "/object-query/rating-details/{key}",
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
