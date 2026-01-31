import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_attachmentsEndpoint: ApiEndpoint = {
  "id": "delete-attachments",
  "name": "Delete an attachment",
  "description": "Use the Delete Attachment REST request to delete an attachment from a Zuora object.",
  "method": "DELETE",
  "path": "/v1/attachments/{attachment-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "attachment-id",
      "label": "Attachment Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: attachment-id",
      "placeholder": "Enter attachment id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
