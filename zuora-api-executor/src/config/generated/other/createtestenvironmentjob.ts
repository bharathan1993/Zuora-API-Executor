import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createtestenvironmentjobEndpoint: ApiEndpoint = {
  "id": "createtestenvironmentjob",
  "name": "Create a test environment job",
  "description": "Use this operation to create a new job for a specific Test Environment. ",
  "method": "POST",
  "path": "/test-environments/{id}/jobs",
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
  "bodyFields": [
    {
      "name": "jobType",
      "label": "Job Type",
      "type": "string",
      "required": true,
      "description": "The type of workflow job to be performed on the Test Environment",
      "enum": [
        "REFRESH"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "scheduledRefreshTime",
      "label": "Scheduled Refresh Time",
      "type": "date",
      "required": false,
      "description": "Optional date for scheduling a job",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
