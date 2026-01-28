import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_get_notification_definitionEndpoint: ApiEndpoint = {
  "id": "get-get-notification-definition",
  "name": "Retrieve a notification definition",
  "description": "Queries the notification definition of the given ID.",
  "method": "GET",
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
