import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const performactionofjobEndpoint: ApiEndpoint = {
  "id": "performactionofjob",
  "name": "Perform an action on a test environment job",
  "description": "Use this operation to perform a specified action ",
  "method": "POST",
  "path": "/test-environments/{id}/jobs/{jobId}/actions",
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
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: jobId",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [
    {
      "name": "jobAction",
      "label": "Job Action",
      "type": "string",
      "required": true,
      "description": "The action to perform against the workflow job",
      "enum": [
        "CANCEL"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
