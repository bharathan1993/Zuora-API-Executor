import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_attachmentsEndpoint: ApiEndpoint = {
  "id": "get-attachments",
  "name": "Retrieve an attachment",
  "description": "Use the View Attachment REST request to retrieve information about an attachment document.",
  "method": "GET",
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
