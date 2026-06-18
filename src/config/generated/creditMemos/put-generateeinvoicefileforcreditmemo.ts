import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_generateeinvoicefileforcreditmemoEndpoint: ApiEndpoint = {
  "id": "put-generateeinvoicefileforcreditmemo",
  "name": "Generate an e-invoice file for a credit memo",
  "description": "Generates an e-invoice file for a credit memo. If the Credit Memo status is **Failed** during e-invoice generation, you can use **Regenerate E-Invoice**. Once you fix the errors and trigger the regeneration, the system will resubmit the document to the e-invoicing service provider, and its status will update to **Processing**.",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoKey}/e-invoice/generate",
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
      "description": "The ID or number of the credit memo. For example, 2c92c8955bd63cc1015bd7c151af02ab or CM-0000001."
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
