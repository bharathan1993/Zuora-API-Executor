import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_datalabelingjobEndpoint: ApiEndpoint = {
  "id": "get-datalabelingjob",
  "name": "Retrieve a data labeling job",
  "description": "Retrieves a data labeling job. You can use this operation to track the status of the data labeling job.",
  "method": "GET",
  "path": "/v1/multi-organizations/data-labeling-job/{job-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "job-id",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: job-id",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
