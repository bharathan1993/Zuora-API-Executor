import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodsdecryptionEndpoint: ApiEndpoint = {
  "id": "post-paymentmethodsdecryption",
  "name": "Create an Apple Pay payment method",
  "description": "The decryption API endpoint can conditionally perform 4 tasks in one atomic call:",
  "method": "POST",
  "path": "/v1/payment-methods/decryption",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountID",
      "label": "Account I D",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account associated with this payment method. To create an orphan payment method that is not associated with any customer account, you can skip this field. As soon as the account information is available, associate the payment method with an account through the [Update a payment method](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentMethod/) operation.",
      "section": "Account Settings"
    },
    {
      "name": "cardHolderInfo",
      "label": "Card Holder Info",
      "type": "object",
      "required": false,
      "description": "The container for the cardholder information. The cardholder name is required for credit card validation. It is strongly recommended to specify the nested `cardHolderName` field in this container. For more information, see `cardHolderName`. The required cardholder address fields vary by gateway. It is strongly recommended to review the gateway's documentation for the most accurate and up-to-date information.",
      "fields": [
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "description": "The first address line.",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "description": "The second address line.",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "cardHolderName",
          "label": "Card Holder Name",
          "type": "string",
          "required": false,
          "description": "The cardholder's full name as it appears on the card. The cardholder name information is required for credit card validation. Zuora retrieves the cardholder name using the following priority: 1. This `cardHolderName` field if available. 2. The cardholder name in the `paymentToken` field if available. 3. The full bill-to-contact name of the customer account. It is strongly recommended to provide the cardholder name through this field.",
          "maxLength": 50,
          "section": "Account Settings"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "The city. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "The country, which must be a valid country name or abbreviation. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
          "section": "Additional Fields"
        },
        {
          "name": "email",
          "label": "Email",
          "type": "string",
          "required": false,
          "description": "The cardholder's email address.",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "description": "The phone number.",
          "maxLength": 40,
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "The state, which must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region.",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "The zip code.",
          "maxLength": 20,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "integrationType",
      "label": "Integration Type",
      "type": "string",
      "required": true,
      "description": "Field to identify the token decryption type. **Note:** The only value at this time is `ApplePay`.",
      "section": "Additional Fields"
    },
    {
      "name": "merchantID",
      "label": "Merchant I D",
      "type": "string",
      "required": true,
      "description": "The Merchant ID that was configured for use with Apple Pay in the Apple iOS Developer Center.",
      "section": "Additional Fields"
    },
    {
      "name": "mitConsentAgreementSrc",
      "label": "Mit Consent Agreement Src",
      "type": "string",
      "required": false,
      "description": "This field is only available for the following gateway integrations to create stored credential profiles within payment methods: - Chase Paymentech Orbital Gateway - CyberSource Payment API v2.0 - Stripe v2 - Vantiv (Now Worldpay) - Worldpay 1.4 Specify how the consent agreement has been established with the customer. The allowed value is `External`. It is required if the `mitProfileAction` field is specified. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `External` set to this field.",
      "enum": [
        "External"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": false,
      "description": "The id of invoice this payment will apply to. **Note:** When `processPayment` is `true`, this field is required. Only one invoice can be paid; for scenarios where you want to pay for multiple invoices, set `processPayment` to `false` and call payment API separately.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "mitProfileAction",
      "label": "Mit Profile Action",
      "type": "string",
      "required": false,
      "description": "This field is only available for the following gateway integrations to create stored credential profiles within payment methods: - Chase Paymentech Orbital Gateway - CyberSource Payment API v2.0 - Stripe v2 - Vantiv (Now Worldpay) - Worldpay 1.4 Specify either of the following values in this field: - `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent. Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile. If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`. - `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`. If you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Activate` set to this field.",
      "enum": [
        "Activate",
        "Persist"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "mitProfileType",
      "label": "Mit Profile Type",
      "type": "string",
      "required": false,
      "description": "This field is only available for the following gateway integrations to create stored credential profiles within payment methods: - Chase Paymentech Orbital Gateway - CyberSource Payment API v2.0 - Stripe v2 - Vantiv (Now Worldpay) - Worldpay 1.4 This field indicates the type of the stored credential profile to process recurring or unsecheduled transactions. It is required if the `mitProfileAction` field is specified. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Recurring` set to this field.",
      "enum": [
        "Recurring",
        "Unscheduled"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The label name of the gateway instance configured in Zuora that will be used for payment method validation and payment processing. - When `processPayment` is `true`, this `paymentGateway` field is required. - When `processPayment` is `false` or is not provided, the specified gateway instance will be used for payment method validation. Specify a valid gateway instance and it must support the Apple Pay payment method. If not specified, the default gateway of your Zuora customer account will be used.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentToken",
      "label": "Payment Token",
      "type": "object",
      "required": true,
      "description": "The payload with the Apple Pay token or payment data.",
      "section": "Payment Settings"
    },
    {
      "name": "processPayment",
      "label": "Process Payment",
      "type": "boolean",
      "required": false,
      "description": "A boolean flag to control whether a payment should be processed after creating payment method. The payment amount will be equivalent to the amount the merchant supplied in the ApplePay session. Default is false. If this field is set to `true`, you must specify the `paymentGateway` field with the payment gateway instance name. If this field is set to `false`: - You must select the **Verify new credit card** check box on the gateway instance settings page. Otherwise, the cryptogram will not be sent to the gateway. - A separate subscribe or payment API call is required after this payment method creation call.",
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
