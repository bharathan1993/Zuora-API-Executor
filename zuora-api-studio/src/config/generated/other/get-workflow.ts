import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowEndpoint: ApiEndpoint = {
  "id": "get-workflow",
  "name": "Retrieve a workflow",
  "description": "Retrieves information about a specific workflow by its ID.",
  "method": "GET",
  "path": "/workflows/{workflow_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: workflow_id",
      "placeholder": "Enter workflow id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
