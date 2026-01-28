import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_stopworkflowrunEndpoint: ApiEndpoint = {
  "id": "put-stopworkflowrun",
  "name": "Stop a workflow run",
  "description": "Stop a specific workflow run by its ID.",
  "method": "PUT",
  "path": "/workflows/workflow_runs/{workflow_run_id}/stop",
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
