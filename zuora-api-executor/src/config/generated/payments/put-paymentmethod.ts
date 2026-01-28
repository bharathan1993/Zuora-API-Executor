import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentmethodEndpoint: ApiEndpoint = {
  "id": "put-paymentmethod",
  "name": "Update a payment method",
  "description": "This operation allows you to update an existing payment method.",
  "method": "PUT",
  "path": "/v1/payment-methods/{payment-method-id}",
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
      "name": "accountHolderInfo",
      "label": "Account Holder Info",
      "type": "object",
      "required": false,
      "description": "The account holder information. This field is not supported in updating Credit Card Reference Transaction payment methods.\n",
      "fields": [
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "description": "The first line of the address for the account holder.\n\nThis field is required for SEPA Direct Debit payment methods on Stripe v2 for [certain countries](https://stripe.com/docs/payments/sepa-debit/set-up-payment?platform=web#web-submit-payment-method).\n",
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "description": "The second line of the address for the account holder. \n",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "The city where the account holder stays.\n",
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "The country where the account holder stays.\n\nThis field is required for SEPA payment methods on Stripe v2 for [certain countries](https://stripe.com/docs/payments/sepa-debit/set-up-payment?platform=web#web-submit-payment-method).\n",
          "section": "Additional Fields"
        },
        {
          "name": "email",
          "label": "Email",
          "type": "string",
          "required": false,
          "description": "The email address of the account holder.\n",
          "section": "Communication Settings"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "description": "The phone number of the account holder.\n",
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "The state where the account holder stays.\n",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "The zip code for the address of the account holder.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "description": "The customer account ID such as `2x92c0f859b0480f0159d3a4a6ee5bb6` or the customer account number such as `A02855638`.\n\n**Note:** You can use this field to associate an orphan payment method with a customer account. If a payment method is already associated with a customer account, you cannot change the associated payment method through this operation. You cannot remove the previous account ID and leave this field empty, either.\n",
      "section": "Account Settings"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
      "type": "string",
      "required": false,
      "description": "Specifies the ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method. \nThis field is not supported in updating Credit Card Reference Transaction payment methods.\n\nIf <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing\" target=\"_blank\">Payment Gateway Routing</a> is enabled: \n  - If this field is not specified, gateway routing rules will be invoked.\n  -  If this field is specified, the specified gateway will be used to update the payment.\n\nIf Payment Gateway Routing is disabled:\n  -  If this field is not specified, the default payment gateway will be used to update the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. \n  -  If this field is specified, the specified gateway will be used to update the payment.\n",
      "section": "Payment Settings"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways).\n\nZuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.\n\nThis field is not supported in updating Credit Card Reference Transaction payment methods.\n",
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
      "name": "maxConsecutivePaymentFailures",
      "label": "Max Consecutive Payment Failures",
      "type": "number",
      "required": false,
      "description": "The maximum number of payment failures allowed for this payment method.  \nThis field is only applicable if `useDefaultRetryRule` is set to `false`.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentRetryWindow",
      "label": "Payment Retry Window",
      "type": "number",
      "required": false,
      "description": "The retry interval in hours.  \nThis field is only applicable if `useDefaultRetryRule` is set to `false`.\n",
      "section": "Payment Settings"
    },
    {
      "name": "currencyCode",
      "label": "Currency Code",
      "type": "string",
      "required": false,
      "description": "The currency used for payment method authorization.\n",
      "section": "Additional Fields"
    },
    {
      "name": "ipAddress",
      "label": "Ip Address",
      "type": "string",
      "required": false,
      "description": "The IPv4 or IPv6 information of the user when the payment method is created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, Zuora directly passes it to gateways. \n\nIf the IP address length is beyond 45 characters, a validation error occurs.\n\nFor validating SEPA payment methods on Stripe v2, this field is required.\n",
      "section": "Additional Fields"
    },
    {
      "name": "mandateInfo",
      "label": "Mandate Info",
      "type": "object",
      "required": false,
      "description": "The mandate information for the Credit Card, Credit Card Reference Transaction, ACH, or Bank Transfer payment method.\n",
      "fields": [
        {
          "name": "mandateId",
          "label": "Mandate Id",
          "type": "string",
          "required": false,
          "description": "The mandate ID.\n",
          "maxLength": 36,
          "section": "Additional Fields"
        },
        {
          "name": "mandateReason",
          "label": "Mandate Reason",
          "type": "string",
          "required": false,
          "description": "The reason of the mandate from the gateway side.\n",
          "maxLength": 64,
          "section": "Additional Fields"
        },
        {
          "name": "mandateStatus",
          "label": "Mandate Status",
          "type": "string",
          "required": false,
          "description": "The status of the mandate from the gateway side.\n",
          "maxLength": 64,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "processingOptions",
      "label": "Processing Options",
      "type": "object",
      "required": false,
      "description": "The container for payment method processing options.\n",
      "fields": [
        {
          "name": "checkDuplicated",
          "label": "Check Duplicated",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether to perform a duplication check when you create a payment method of the following types:\n  - Credit Card\n  - ACH\n  - Bank Transfer\n\nThe default value is `false`.\n\nWith this field set to `true`, Zuora will check the active and closed payment methods associated with the same billing account to ensure that no duplicate payment methods are created. \n\nFor more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/D1_Duplication_check_on_payment_methods\" target=\"_blank\">Duplication check on payment methods</a>.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useDefaultRetryRule",
      "label": "Use Default Retry Rule",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to apply the default retry rule configured for your tenant in the Zuora Payments settings:\n  - To use the default retry rule, specify `true`. \n  - To use the custom retry rule specific to this payment method, specify `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "expirationMonth",
      "label": "Expiration Month",
      "type": "number",
      "required": false,
      "description": "One or two digits expiration month (1-12).\n        \n",
      "section": "Additional Fields"
    },
    {
      "name": "expirationYear",
      "label": "Expiration Year",
      "type": "number",
      "required": false,
      "description": "Four-digit expiration year.\n",
      "section": "Additional Fields"
    },
    {
      "name": "securityCode",
      "label": "Security Code",
      "type": "string",
      "required": false,
      "description": "Optional. It is the CVV or CVV2 security code specific for the credit card or debit card. To ensure PCI compliance, this value is not stored and cannot be queried. \n\nIf securityCode code is not passed in the request payload, this operation only updates related fields in the payload. It does not validate the payment method through the gateway.\n\nIf securityCode is passed in the request payload, this operation retrieves the credit card information from payload and validates them through the gateway.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
