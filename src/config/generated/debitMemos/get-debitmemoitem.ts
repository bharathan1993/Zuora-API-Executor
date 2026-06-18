import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemoitemEndpoint: ApiEndpoint = {
  "id": "get-debitmemoitem",
  "name": "Retrieve a debit memo item",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/items/{dmitemid}",
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
      "description": "The unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001."
    },
    {
      "name": "dmitemid",
      "label": "Dmitemid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a debit memo item. You can get the debit memo item ID from the response of [List debit memo items](https://developer.zuora.com/api-references/api/operation/GET_DebitMemoItems)."
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
