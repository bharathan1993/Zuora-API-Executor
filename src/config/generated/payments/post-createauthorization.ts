import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createauthorizationEndpoint: ApiEndpoint = {
  "id": "post-createauthorization",
  "name": "Create authorization",
  "description": "Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [Create a payment](https://developer.zuora.com/api-references/api/operation/POST_CreatePayment) or [Create an order](https://developer.zuora.com/api-references/api/operation/POST_Order/) to capture the authorized funds, or use [Cancel authorization](https://developer.zuora.com/api-references/api/operation/POST_CancelAuthorization) to cancel the authorization.",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/authorize",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of the payment method where the authorization is created."
    }
  ],
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account. Either `accountId` or `accountNumber` is required.",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account. Either `accountNumber` or `accountId` is required.",
      "section": "Account Settings"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
      "description": "The amount of the transaction.",
      "section": "Additional Fields"
    },
    {
      "name": "mitTransactionSource",
      "label": "Mit Transaction Source",
      "type": "string",
      "required": false,
      "description": "Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework. - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates. - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals. - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates. - `M_MOTO`: Mail Order Telephone Order (MOTO) payment transaction. This option is only available for credit card payments on Stripe v2. See [Overview of Stripe payment gateway integration](https://knowledgecenter.zuora.com/Zuora_Collect/Payment_gateway_integrations/Supported_payment_gateways/Stripe_Payment_Gateway/A_Overview_of_Stripe_payment_gateway_integration) for more information.",
      "enum": [
        "C_Unscheduled",
        "M_Recurring",
        "M_Unscheduled",
        "M_MOTO"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "softDescriptor",
      "label": "Soft Descriptor",
      "type": "string",
      "required": false,
      "description": "A text, rendered on a cardholder’s statement, describing a particular product or service purchased by the cardholder.",
      "section": "Additional Fields"
    },
    {
      "name": "softDescriptorPhone",
      "label": "Soft Descriptor Phone",
      "type": "string",
      "required": false,
      "description": "The phone number that relates to the soft descriptor, usually the phone number of customer service.",
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways). Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.",
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "description": "The name of a gateway-specific parameter.",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "The value of the gateway-specific parameter.",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "gatewayOrderId",
      "label": "Gateway Order Id",
      "type": "string",
      "required": true,
      "description": "The order ID for the specific gateway. The specified order ID will be used in transaction authorization. If you specify an empty value for this field, Zuora will generate an ID and you will have to associate this ID with your order ID by yourself if needed. It is recommended to specify an ID for this field.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway instance. If Payment Gateway Routing is enabled: - If this field is not specified, gateway routing rules will be invoked. - If this field is specified, the specified gateway will be used to authorize the payment. If Payment Gateway Routing is disabled: - If this field is not specified, the default payment gateway will be used to authorize the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. - If this field is specified, the specified gateway will be used to authorize the payment.",
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
