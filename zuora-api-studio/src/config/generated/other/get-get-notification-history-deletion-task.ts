import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_get_notification_history_deletion_taskEndpoint: ApiEndpoint = {
  "id": "get-get-notification-history-deletion-task",
  "name": "Retrieve a notification history deletion task",
  "description": "Get the notification history deletion task by ID.",
  "method": "GET",
  "path": "/notifications/history/tasks/{id}",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
