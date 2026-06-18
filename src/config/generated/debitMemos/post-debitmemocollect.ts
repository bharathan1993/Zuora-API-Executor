import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_debitmemocollectEndpoint: ApiEndpoint = {
  "id": "post-debitmemocollect",
  "name": "Collect a posted debit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/debit-memos/{debitMemoKey}/collect",
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
      "description": "The ID or number of a posted debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e."
    }
  ],
  "bodyFields": [
    {
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "description": "The priority order to apply credit memos and/or unapplied payments to the debit memo. Possible item values are: `CreditMemo`, `UnappliedPayment`. **Note:** - This field is valid only if the `applyCredit` field is set to `true`. - If no value is specified for this field, the default priority order is used, [\"CreditMemo\", \"UnappliedPayment\"], to apply credit memos first and then apply unapplied payments. - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `[\"CreditMemo\"]`, only credit memos are used to apply the debit memo.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically apply credit memos or unapplied payments, or both to the debit memo. If the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the debit memo. If no value is specified or the value is `false`, no action is taken.",
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "description": "Indicates if the current request needs to collect payment or not.",
      "defaultValue": false,
      "section": "Subscription Settings"
    },
    {
      "name": "payment",
      "label": "Payment",
      "type": "object",
      "required": false,
      "description": "Some detail info that would be used to processed an electronic payment. The info would only effect when `collect` set to `true`.",
      "fields": [
        {
          "name": "gatewayId",
          "label": "Gateway Id",
          "type": "string",
          "required": false,
          "description": "The ID of the gateway instance that processes the payment. The ID must be a valid gateway instance ID and this gateway must support the specific payment method. If no gateway ID is specified in the request body, the default gateway for the customer account is used automatically, if this default one is not configured, the default gateway of the tenant would be used.",
          "section": "Payment Settings"
        },
        {
          "name": "paymentMethodId",
          "label": "Payment Method Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the payment method that the customer used to make the payment. If no payment method ID is specified in the request body, the default payment method for the customer account is used automatically. If the default payment method is different from the type of payments that you want to create, an error occurs.",
          "section": "Payment Settings"
        }
      ],
      "section": "Payment Settings"
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
