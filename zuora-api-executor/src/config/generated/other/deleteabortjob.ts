import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteabortjobEndpoint: ApiEndpoint = {
  "id": "deleteabortjob",
  "name": "Abort a bulk job",
  "description": "Aborts an existing job by sending a POST request to this URI. The request URI identifies the job to abort.",
  "method": "POST",
  "path": "/bulk-data/bulk-jobs/{id}/aborts",
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
