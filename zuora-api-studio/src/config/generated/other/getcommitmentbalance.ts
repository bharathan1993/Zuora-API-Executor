import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentbalanceEndpoint: ApiEndpoint = {
  "id": "getcommitmentbalance",
  "name": "Retrieve the balance for a commitment",
  "description": "Retrieves the balance amount for a specific commitment for current and past periods. Future periods are not covered.",
  "method": "GET",
  "path": "/v1/commitments/{commitmentId}/balance",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "commitmentId",
      "label": "Commitment Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: commitmentId",
      "placeholder": "Enter commitment id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
