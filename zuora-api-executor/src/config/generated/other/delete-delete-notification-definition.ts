import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_delete_notification_definitionEndpoint: ApiEndpoint = {
  "id": "delete-delete-notification-definition",
  "name": "Delete a notification definition",
  "description": "Deletes a notification definition.",
  "method": "DELETE",
  "path": "/notifications/notification-definitions/{id}",
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
