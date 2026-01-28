import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const downloadcreditmemoeinvoiceEndpoint: ApiEndpoint = {
  "id": "downloadcreditmemoeinvoice",
  "name": "Download a credit memo in the specified file format",
  "description": "Downloads the credit memo based on the specified file format. ",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/download",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: creditMemoKey",
      "placeholder": "Enter credit memo key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
