import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflow_runEndpoint: ApiEndpoint = {
  "id": "get-workflow-run",
  "name": "Retrieve a workflow run",
  "description": "Retrieves information about a specific workflow run by its ID.",
  "method": "GET",
  "path": "/workflows/workflow_runs/{workflow_run_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_run_id",
      "label": "Workflow Run Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: workflow_run_id",
      "placeholder": "Enter workflow run id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
