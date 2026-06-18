import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_generateeinvoicefilefordebitmemoEndpoint: ApiEndpoint = {
  "id": "put-generateeinvoicefilefordebitmemo",
  "name": "Generate an e-invoice file for a debit memo",
  "description": "Generates an e-invoice file for a debit memo. If the Credit Memo status is **Failed** during e-invoice generation, you can use **Regenerate E-Invoice**. Once you fix the errors and trigger the regeneration, the system will resubmit the document to the e-invoicing service provider, and its status will update to **Processing**.",
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
      "description": "The ID or number of the debit memo. For example, 2c92c8955bd63cc1015bd7c151af02ab or DM-0000001."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
