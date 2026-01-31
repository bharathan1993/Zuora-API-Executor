import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_lastbatchqueryjobEndpoint: ApiEndpoint = {
  "id": "get-lastbatchqueryjob",
  "name": "Retrieve the last completed aggregate query job",
  "description": "Returns the details of the last completed job.",
  "method": "GET",
  "path": "/v1/batch-query/jobs/partner/{partner}/project/{project}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "partner",
      "label": "Partner",
      "type": "string",
      "required": true,
      "description": "Path parameter: partner",
      "placeholder": "Enter partner"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "string",
      "required": true,
      "description": "Path parameter: project",
      "placeholder": "Enter project"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
