import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_batchqueryjobEndpoint: ApiEndpoint = {
  "id": "delete-batchqueryjob",
  "name": "Cancel a running aggregate query job",
  "description": "Cancels the current AQuA job, only if the job is not complete. If the job is complete, an error is thrown.",
  "method": "DELETE",
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
