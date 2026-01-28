import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_operationjobEndpoint: ApiEndpoint = {
  "id": "get-operationjob",
  "name": "Retrieve an operation job",
  "description": "Retrieves information about a specific operation job.",
  "method": "GET",
  "path": "/v1/operations/jobs/{jobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
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
