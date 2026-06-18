import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_refunditempartEndpoint: ApiEndpoint = {
  "id": "get-refunditempart",
  "name": "Retrieve a refund part item",
  "description": "**Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/refunds/{refundKey}/parts/{refundpartid}/item-parts/{itempartid}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "refundKey",
      "label": "Refund Key",
      "type": "string",
      "required": true,
      "description": "The number or unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9."
    },
    {
      "name": "refundpartid",
      "label": "Refundpartid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a specific refund part. You can get the refund part ID from the response of [List all parts of a refund](https://developer.zuora.com/api-references/api/operation/GET_RefundParts)."
    },
    {
      "name": "itempartid",
      "label": "Itempartid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a specific refund part item. You can get the refund part item ID from the response of [Get refund part items](https://developer.zuora.com/api-references/api/operation/GET_RefundItemParts)."
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
