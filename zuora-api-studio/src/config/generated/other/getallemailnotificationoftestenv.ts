import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getallemailnotificationoftestenvEndpoint: ApiEndpoint = {
  "id": "getallemailnotificationoftestenv",
  "name": "List all email notifications of a test environment",
  "description": "Use this operation to retrieve all notifications associated ",
  "method": "GET",
  "path": "/test-environments/{id}/notifications",
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
