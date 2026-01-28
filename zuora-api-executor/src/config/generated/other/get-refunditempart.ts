import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_refunditempartEndpoint: ApiEndpoint = {
  "id": "get-refunditempart",
  "name": "Retrieve a refund part item",
  "description": "**Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.  ",
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
      "description": "Path parameter: refundKey",
      "placeholder": "Enter refund key"
    },
    {
      "name": "refundpartid",
      "label": "Refundpartid",
      "type": "string",
      "required": true,
      "description": "Path parameter: refundpartid",
      "placeholder": "Enter refundpartid"
    },
    {
      "name": "itempartid",
      "label": "Itempartid",
      "type": "string",
      "required": true,
      "description": "Path parameter: itempartid",
      "placeholder": "Enter itempartid"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
