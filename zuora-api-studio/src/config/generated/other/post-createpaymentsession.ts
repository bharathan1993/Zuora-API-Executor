import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createpaymentsessionEndpoint: ApiEndpoint = {
  "id": "post-createpaymentsession",
  "name": "Create a payment session",
  "description": "Use this operation to create a payment session on your server side. ",
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
      "description": "The ID of the customer account in Zuora that is associated with this\npayment method.\n\nThis field is required when `processPayment` is set to `true`. It is optional when `processPayment` is set to `false`.\n",
      "section": "Account Settings"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
      "description": "If `processPayment` is `true`, it is the amount of the payment. If `invoices` is specified, the value of `amount` must be the current total balances of the specified invoices.\n\nIf `processPayment` is `false`, it is the authorization amount for the payment method.\n",
      "section": "Additional Fields"
    },
    {
      "name": "authAmount",
      "label": "Auth Amount",
      "type": "number",
      "required": false,
      "description": "The authorization amount for the payment method. Specify a value greater\nthan 0.\n\n**Note:** This field is being deprecated. It is recommended to use the `amount` field.\n",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "The currency of the payment in the format of the three-character ISO\ncurrency code.\n",
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values.\nThe fields supported by gateways vary. For more information, see the\noverview topic of each gateway integration in <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Manage_payment_gateway_integrations_and_payment_methods/Set_up_payment_gateway_integrations\" target=\"_blank\">Zuora Knowledge Center</a>.\n\nZuora sends all the information that you specified to the gateway. If you\nspecify any unsupported gateway option parameters, they will be ignored\nwithout error prompts.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway instance configured in Zuora that will\nprocess the payment, such as `e884322ab8c711edab030242ac120004`.\n\nIf <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing\" target=\"_blank\">Payment Gateway Routing</a> is enabled: \n  - If this field is not specified, gateway routing rules will be invoked.\n  - If this field is specified, the specified gateway will be used to process the payment.\n\nIf Payment Gateway Routing is disabled:\n  - If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. \n  - If this field is specified, the specified gateway will be used to process the payment.\n",
      "section": "Payment Settings"
    },
    {
      "name": "processPayment",
      "label": "Process Payment",
      "type": "boolean",
      "required": true,
      "description": "Indicate whether a payment should be processed after creating the payment\nmethod.\n\nIf this field is set to `true`, you must specify either the `amount` field or the `invoices` and `amount` fields.\n\nIf this field is set to `false`, you must specify the `amount` field.\n",
      "section": "Payment Settings"
    },
    {
      "name": "storePaymentMethod",
      "label": "Store Payment Method",
      "type": "boolean",
      "required": false,
      "description": "`true` indicates that the payment method will be stored in Zuora and will be used \nin subsequent recurring payments.\n\n`false` indicates that the payment method will not be stored in Zuora. \nEnd-customers need to be brought back on-session to authenticate the payment.\n",
      "defaultValue": true,
      "section": "Payment Settings"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "The array of invoices that a payment applies to. All the specified invoices will be fully paid. \nThe value of the `amount` field must be the current total balances of the specified invoices.\n\nHere is an example:\n\n```\n\"invoices\": [\n  {\n    \"invoiceNumber\": \"INV00001274\"\n  },\n  {\n    \"invoiceNumber\": \"INV00001278\"\n  }\n]\n```\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "description": "The invoice number, such as `INV0000001`.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
