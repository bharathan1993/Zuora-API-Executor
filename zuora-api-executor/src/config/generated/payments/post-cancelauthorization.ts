import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_cancelauthorizationEndpoint: ApiEndpoint = {
  "id": "post-cancelauthorization",
  "name": "Cancel authorization",
  "description": "Allows you to cancel an authorization. For gateway integrations that support this operation, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DB_Delayed_Capture\" target=\"_blank\">Delayed Capture</a>.",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/voidAuthorize",
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
      "description": "Path parameter: payment-method-id",
      "placeholder": "Enter payment method id"
    }
  ],
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account.",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account.",
      "section": "Account Settings"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways).\n\nZuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.\n",
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "description": "The name of a gateway-specific parameter.\n",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "The value of the gateway-specific parameter.\n",
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
      "description": "The order ID for the specific gateway.\n\nThe specified order ID will be used in transaction authorization. If you specify an empty value for this field, Zuora will generate an ID and you will have to associate this ID with your order ID by yourself if needed. It is recommended to specify an ID for this field.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway instance. \n  - If this field is specified and it is a Worldline Global Collect gateway, the specified gateway is used.\n  - If this field is not specified or is not a Worldline Global Collect gateway, the cancellation operation uses the payment gateway originally used for the authorization.\n",
      "section": "Payment Settings"
    },
    {
      "name": "transactionId",
      "label": "Transaction Id",
      "type": "string",
      "required": true,
      "description": "The ID of the transaction.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
