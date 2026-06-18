import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createpaymentsessionEndpoint: ApiEndpoint = {
  "id": "post-createpaymentsession",
  "name": "Create a payment session",
  "description": "Use this operation to create a payment session on your server side.",
  "method": "POST",
  "path": "/web-payments/sessions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account in Zuora that is associated with this payment method. This field is required when `processPayment` is set to `true`. It is optional when `processPayment` is set to `false`.",
      "section": "Account Settings"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
      "description": "If `processPayment` is `true`, it is the amount of the payment. If `invoices` is specified, the value of `amount` must be the current total balances of the specified invoices. If `processPayment` is `false`, it is the authorization amount for the payment method.",
      "section": "Additional Fields"
    },
    {
      "name": "authAmount",
      "label": "Auth Amount",
      "type": "number",
      "required": false,
      "description": "The authorization amount for the payment method. Specify a value greater than 0. **Note:** This field is being deprecated. It is recommended to use the `amount` field.",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "The currency of the payment in the format of the three-character ISO currency code.",
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the overview topic of each gateway integration in Zuora Knowledge Center. Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway instance configured in Zuora that will process the payment, such as `e884322ab8c711edab030242ac120004`. If Payment Gateway Routing is enabled: - If this field is not specified, gateway routing rules will be invoked. - If this field is specified, the specified gateway will be used to process the payment. If Payment Gateway Routing is disabled: - If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. - If this field is specified, the specified gateway will be used to process the payment.",
      "section": "Payment Settings"
    },
    {
      "name": "processPayment",
      "label": "Process Payment",
      "type": "boolean",
      "required": true,
      "description": "Indicate whether a payment should be processed after creating the payment method. If this field is set to `true`, you must specify either the `amount` field or the `invoices` and `amount` fields. If this field is set to `false`, you must specify the `amount` field.",
      "section": "Payment Settings"
    },
    {
      "name": "storePaymentMethod",
      "label": "Store Payment Method",
      "type": "boolean",
      "required": false,
      "description": "`true` indicates that the payment method will be stored in Zuora and will be used in subsequent recurring payments. `false` indicates that the payment method will not be stored in Zuora. End-customers need to be brought back on-session to authenticate the payment.",
      "defaultValue": true,
      "section": "Payment Settings"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "The array of invoices that a payment applies to. All the specified invoices will be fully paid. The value of the `amount` field must be the current total balances of the specified invoices. Here is an example: ``` \"invoices\": [ { \"invoiceNumber\": \"INV00001274\" }, { \"invoiceNumber\": \"INV00001278\" } ] ```",
      "itemType": "object",
      "itemFields": [
        {
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "description": "The invoice number, such as `INV0000001`.",
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
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
