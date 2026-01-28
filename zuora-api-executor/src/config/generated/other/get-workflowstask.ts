import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowstaskEndpoint: ApiEndpoint = {
  "id": "get-workflowstask",
  "name": "Retrieve a workflow task",
  "description": "Retrieves a specific workflow task by its ID.",
  "method": "GET",
  "path": "/workflows/tasks/{task_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "task_id",
      "label": "Task Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: task_id",
      "placeholder": "Enter task id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
