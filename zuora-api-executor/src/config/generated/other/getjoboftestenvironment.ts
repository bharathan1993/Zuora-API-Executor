import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getjoboftestenvironmentEndpoint: ApiEndpoint = {
  "id": "getjoboftestenvironment",
  "name": "Retrieve a job of a test environment",
  "description": "Use this operation to retrieve a specific job associated ",
  "method": "GET",
  "path": "/test-environments/{id}/jobs/{jobId}",
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
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: jobId",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
