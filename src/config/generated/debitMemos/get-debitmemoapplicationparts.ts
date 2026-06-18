import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemoapplicationpartsEndpoint: ApiEndpoint = {
  "id": "get-debitmemoapplicationparts",
  "name": "List all application parts of a debit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoId}/application-parts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoId",
      "label": "Debit Memo Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e."
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
