import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_bulkpdftozipgenerationEndpoint: ApiEndpoint = {
  "id": "get-bulkpdftozipgeneration",
  "name": "Retrieve information of a bulk PDF file generation job",
  "description": "Retrieves information about the job which includes its status, message, and downloadable ZIP file URL link.",
  "method": "GET",
  "path": "/v1/operations/bulk-pdf/{jobId}",
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
