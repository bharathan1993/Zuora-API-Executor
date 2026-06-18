import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentitempartEndpoint: ApiEndpoint = {
  "id": "get-paymentitempart",
  "name": "Retrieve a payment part item",
  "description": "**Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/payments/{paymentKey}/parts/{partid}/item-parts/{itempartid}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentKey",
      "label": "Payment Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of an unapplied payment. For example, `8a8082e65b27f6c3015b89e4344c16b1`, or `P-00000001`."
    },
    {
      "name": "partid",
      "label": "Partid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a specific payment part. You can get the payment part ID from the response of [List all parts of a payment](https://www.zuora.com/developer/api-references/api/operation/GET_PaymentParts)."
    },
    {
      "name": "itempartid",
      "label": "Itempartid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a specific payment part item. You can get the payment part item ID from the response of [List all payment part items](https://www.zuora.com/developer/api-references/api/operation/GET_PaymentItemParts)."
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
