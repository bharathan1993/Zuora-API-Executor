import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_attachmentsEndpoint: ApiEndpoint = {
  "id": "put-attachments",
  "name": "Update an attachment",
  "description": "Use the Edit Attachment REST request to make changes to the descriptive fields of an attachment, such as the description and the file name. You cannot change the actual content of the attached file in Zuora. If you need to change the actual content, you need to delete the attachment and add the updated file as a new attachment.",
  "method": "PUT",
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
  "bodyFields": [
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "Description of the attachment.\n",
      "section": "Additional Fields"
    },
    {
      "name": "fileName",
      "label": "File Name",
      "type": "string",
      "required": false,
      "description": "File name of the attachment. The value should not contain the file extension. Only the file name without the extension can be edited.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
