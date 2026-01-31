import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_databackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "get-databackfilljobbyid",
  "name": "Retrieve a data backfill job",
  "description": "Returns a single Data Backfill job",
  "method": "GET",
  "path": "/v1/uno/data-backfill/jobs/{jobId}",
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
