import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_get_email_templateEndpoint: ApiEndpoint = {
  "id": "get-get-email-template",
  "name": "Retrieve an email template",
  "description": "Queries the email template based on the specified ID. This operation supports retrieving the email template for all event types.",
  "method": "GET",
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
