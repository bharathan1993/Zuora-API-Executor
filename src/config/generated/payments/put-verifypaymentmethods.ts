import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_verifypaymentmethodsEndpoint: ApiEndpoint = {
  "id": "put-verifypaymentmethods",
  "name": "Verify a payment method",
  "description": "Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.",
  "method": "PUT",
  "path": "/v1/payment-methods/{payment-method-id}/verify",
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
      "description": "The ID of the payment method to be verified."
    }
  ],
  "bodyFields": [
    {
      "name": "currencyCode",
      "label": "Currency Code",
      "type": "string",
      "required": false,
      "description": "The currency used for payment method authorization.",
      "section": "Additional Fields"
    },
    {
      "name": "securityCode",
      "label": "Security Code",
      "type": "string",
      "required": false,
      "description": "The CVV or CVV2 security code for the credit card or debit card. To ensure PCI compliance, the value of this field is not stored and cannot be queried.",
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
      "name": "paymentGatewayName",
      "label": "Payment Gateway Name",
      "type": "string",
      "required": false,
      "description": "The name of the payment gateway instance. If Payment Gateway Routing is enabled: - If this field is not specified, gateway routing rules will be invoked. - If this field is specified, the specified gateway will be used to verify the payment. If Payment Gateway Routing is disabled: - If this field is not specified, the default payment gateway will be used to verify the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. - If this field is specified, the specified gateway will be used to verify the payment.",
      "section": "Account Settings"
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
