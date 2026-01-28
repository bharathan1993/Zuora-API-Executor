import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_attachmentsEndpoint: ApiEndpoint = {
  "id": "post-attachments",
  "name": "Create an attachment",
  "description": "Use the Add Attachment REST request with a multipart/form-data to attach a document file to an Account, a Subscription, an Invoice, a Credit Memo, or a Debit Memo.",
  "method": "POST",
  "path": "/v1/attachments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
