import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_batchqueryjobEndpoint: ApiEndpoint = {
  "id": "get-batchqueryjob",
  "name": "Retrieve an aggregate query job",
  "description": "Retrieves an aggregate query using the Job ID.",
  "method": "GET",
  "path": "/v1/batch-query/jobs/{jobid}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jobid",
      "label": "Jobid",
      "type": "string",
      "required": true,
      "description": "Path parameter: jobid",
      "placeholder": "Enter jobid"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
