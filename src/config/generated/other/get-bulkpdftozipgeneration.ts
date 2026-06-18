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
      "description": "The ID of the job for which information needs to be retrieved. For example, 2c92c8955bd63cc1015bd7c151af02ab"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
