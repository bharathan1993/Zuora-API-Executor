import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_workflowstasksupdateEndpoint: ApiEndpoint = {
  "id": "put-workflowstasksupdate",
  "name": "Update workflow tasks",
  "description": "Updates a group of workflow tasks.",
  "method": "PUT",
  "path": "/workflows/tasks/batch_update",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "data",
      "label": "Data",
      "type": "array",
      "required": false,
      "description": "The list of tasks to update.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "action_type",
          "label": "Action Type",
          "type": "string",
          "required": false,
          "description": "The type of task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "description": "The type of the API used.\n",
          "section": "Additional Fields"
        },
        {
          "name": "concurrent_limit",
          "label": "Concurrent Limit",
          "type": "number",
          "required": false,
          "description": "The maximum number of this task that can run concurrently.\n",
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": true,
          "description": "The unique ID of the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The name of the task.\n",
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": false,
          "description": "The selected object for the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "object_id",
          "label": "Object Id",
          "type": "string",
          "required": false,
          "description": "The ID of the selected object of the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "description": "The status of the task instance.\n",
          "enum": [
            "Queued",
            "Processing",
            "Pending",
            "Success",
            "Stopped",
            "Error"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "description": "The array of filter tags.\n",
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "workflow_id",
          "label": "Workflow Id",
          "type": "number",
          "required": false,
          "description": "The ID of the workflow the task belongs to.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
