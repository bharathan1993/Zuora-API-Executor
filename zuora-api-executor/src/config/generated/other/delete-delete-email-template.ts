import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_delete_email_templateEndpoint: ApiEndpoint = {
  "id": "delete-delete-email-template",
  "name": "Delete an email template",
  "description": "Deletes an email template. This operation supports deleting an email template for all event types.",
  "method": "DELETE",
  "path": "/notifications/email-templates/{id}",
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
