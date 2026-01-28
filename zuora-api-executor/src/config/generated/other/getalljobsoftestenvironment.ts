import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getalljobsoftestenvironmentEndpoint: ApiEndpoint = {
  "id": "getalljobsoftestenvironment",
  "name": "List all jobs of a test environment",
  "description": "Use this operation to retrieve a list of job responses associated ",
  "method": "GET",
  "path": "/test-environments/{id}/jobs",
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
