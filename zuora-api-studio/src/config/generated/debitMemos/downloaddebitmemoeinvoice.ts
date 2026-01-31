import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const downloaddebitmemoeinvoiceEndpoint: ApiEndpoint = {
  "id": "downloaddebitmemoeinvoice",
  "name": "Download a debit memo in the specified file format",
  "description": "Downloads the debit memo based on the specified file format. ",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/e-invoice/download",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: debitMemoKey",
      "placeholder": "Enter debit memo key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
