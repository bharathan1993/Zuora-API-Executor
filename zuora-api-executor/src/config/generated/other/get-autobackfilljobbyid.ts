import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_autobackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "get-autobackfilljobbyid",
  "name": "Retrieve an auto backfill job",
  "description": "Use this operation to retrieve a specific auto backfill job.",
  "method": "GET",
  "path": "/v1/uno/data-backfill/propagation/jobs/{jobId}",
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
