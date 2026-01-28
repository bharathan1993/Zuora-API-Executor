import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_workflowEndpoint: ApiEndpoint = {
  "id": "delete-workflow",
  "name": "Delete a workflow",
  "description": "Deletes a specific workflow by its ID.",
  "method": "DELETE",
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
