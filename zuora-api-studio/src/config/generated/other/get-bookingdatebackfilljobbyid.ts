import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_bookingdatebackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "get-bookingdatebackfilljobbyid",
  "name": "Retrieve a booking date backfill job",
  "description": "Use this operation to retrieve a specific booking date backfill job.",
  "method": "GET",
  "path": "/v1/uno/data-backfill/bookingdate/jobs/{jobId}",
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
