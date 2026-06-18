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
      "description": "The ID of the operation job to retrieve information about. For example, 2c92c8955bd63cc1015bd7c151af02ab."
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
