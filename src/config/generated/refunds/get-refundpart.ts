import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_refundpartEndpoint: ApiEndpoint = {
  "id": "get-refundpart",
  "name": "Retrieve a refund part",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/refunds/{refundKey}/parts/{refundpartid}",
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
