import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const gettestenvironmentEndpoint: ApiEndpoint = {
  "id": "gettestenvironment",
  "name": "Retrieve a test environment response",
  "description": "Use this operation to retrieves a specific Test Environment by its unique identifier. ",
  "method": "GET",
  "path": "/test-environments/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
