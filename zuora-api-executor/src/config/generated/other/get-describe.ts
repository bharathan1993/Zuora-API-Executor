import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_describeEndpoint: ApiEndpoint = {
  "id": "get-describe",
  "name": "Describe an object",
  "description": "Provides a reference listing of each object that is available in your Zuora tenant.",
  "method": "GET",
  "path": "/v1/describe/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "Path parameter: object",
      "placeholder": "Enter object"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
