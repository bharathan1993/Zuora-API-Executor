import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const listcommitmentschedulesEndpoint: ApiEndpoint = {
  "id": "listcommitmentschedules",
  "name": "List schedules for a commitment",
  "description": "Retrieves all the schedules for a specific commitment.",
  "method": "GET",
  "path": "/v1/commitments/{commitmentKey}/schedules",
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
