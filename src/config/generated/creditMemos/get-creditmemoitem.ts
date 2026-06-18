import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_creditmemoitemEndpoint: ApiEndpoint = {
  "id": "get-creditmemoitem",
  "name": "Retrieve a credit memo item",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/credit-memos/{creditMemoKey}/items/{cmitemid}",
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
      "description": "The unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 or CM00000001."
    },
    {
      "name": "cmitemid",
      "label": "Cmitemid",
      "type": "string",
      "required": true,
      "description": "The unique ID of a credit memo item. You can get the credit memo item ID from the response of [List credit memo items](https://developer.zuora.com/api-references/api/operation/GET_CreditMemoItems)."
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
