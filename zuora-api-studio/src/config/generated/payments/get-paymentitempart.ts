import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentitempartEndpoint: ApiEndpoint = {
  "id": "get-paymentitempart",
  "name": "Retrieve a payment part item",
  "description": "**Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
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
      "description": "Path parameter: paymentKey",
      "placeholder": "Enter payment key"
    },
    {
      "name": "partid",
      "label": "Partid",
      "type": "string",
      "required": true,
      "description": "Path parameter: partid",
      "placeholder": "Enter partid"
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
