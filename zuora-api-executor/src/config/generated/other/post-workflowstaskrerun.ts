import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_workflowstaskrerunEndpoint: ApiEndpoint = {
  "id": "post-workflowstaskrerun",
  "name": "Rerun a workflow task",
  "description": "Reruns a specific workflow task by its ID.",
  "method": "POST",
  "path": "/workflows/tasks/{task_id}/rerun",
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
