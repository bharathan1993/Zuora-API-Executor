import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletetestenvironmentnotificationEndpoint: ApiEndpoint = {
  "id": "deletetestenvironmentnotification",
  "name": "Delete a notification of a test environment",
  "description": "Use this operation to delete a specific notification associated ",
  "method": "DELETE",
  "path": "/test-environments/{id}/notifications/{notificationId}",
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
    },
    {
      "name": "notificationId",
      "label": "Notification Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: notificationId",
      "placeholder": "Enter notification id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
