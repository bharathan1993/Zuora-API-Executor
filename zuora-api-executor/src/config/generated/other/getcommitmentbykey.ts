import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentbykeyEndpoint: ApiEndpoint = {
  "id": "getcommitmentbykey",
  "name": "Retrieve a commitment",
  "description": "Retrieves the details of a specific commitment using its ID or number.",
  "method": "GET",
  "path": "/v1/commitments/{commitmentKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "commitmentKey",
      "label": "Commitment Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: commitmentKey",
      "placeholder": "Enter commitment key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
