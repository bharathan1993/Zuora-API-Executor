import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_generateeinvoicefilefordebitmemoEndpoint: ApiEndpoint = {
  "id": "put-generateeinvoicefilefordebitmemo",
  "name": "Generate an e-invoice file for a debit memo",
  "description": "Generates an e-invoice file for a debit memo.  ",
  "method": "PUT",
  "path": "/v1/debit-memos/{debitMemoKey}/e-invoice/generate",
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
