import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_writeoffcreditmemoEndpoint: ApiEndpoint = {
  "id": "put-writeoffcreditmemo",
  "name": "Write off a credit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoId}/write-off",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoId",
      "label": "Credit Memo Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172."
    }
  ],
  "bodyFields": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the debit memo.",
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. The default value is `Write-off`.",
      "section": "Additional Fields"
    },
    {
      "name": "memoDate",
      "label": "Memo Date",
      "type": "date",
      "required": false,
      "description": "The creation date of the debit memo and the effective date of the credit memo. Credit memos are applied to the corresponding debit memos on `memoDate`. By default, `memoDate` is set to the current date.",
      "section": "Credit & Settlement Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
