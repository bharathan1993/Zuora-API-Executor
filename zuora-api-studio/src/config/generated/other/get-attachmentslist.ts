import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_attachmentslistEndpoint: ApiEndpoint = {
  "id": "get-attachmentslist",
  "name": "List attachments by object type and key",
  "description": "Use the View Attachment REST request to get a list of attachments on an account, an invoice, a subscription, a credit memo, or a debit memo.",
  "method": "GET",
  "path": "/v1/attachments/{object-type}/{object-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object-type",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "description": "Path parameter: object-type",
      "placeholder": "Enter object type"
    },
    {
      "name": "object-key",
      "label": "Object Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: object-key",
      "placeholder": "Enter object key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
