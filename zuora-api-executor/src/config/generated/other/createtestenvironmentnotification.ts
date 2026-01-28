import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createtestenvironmentnotificationEndpoint: ApiEndpoint = {
  "id": "createtestenvironmentnotification",
  "name": "Create a test environment notification",
  "description": "Use this operation to create a new notification ",
  "method": "POST",
  "path": "/test-environments/{id}/notifications",
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
  "bodyFields": [
    {
      "name": "address",
      "label": "Address",
      "type": "string",
      "required": false,
      "description": "The email address to receive notifications for the Test Environment when a refresh job has been completed or cancelled",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the recipient who will receive notifications for the Test Environment",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
