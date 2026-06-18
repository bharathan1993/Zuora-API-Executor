import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentbykeyEndpoint: ApiEndpoint = {
  "id": "getcommitmentbykey",
  "name": "Retrieve a commitment",
  "description": "Retrieves the details of a specific commitment using its ID or number.",
  "method": "GET",
  "path": "/commitments/{commitmentKey}",
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
      "description": "The unique identifier (ID or number) of the commitment."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
