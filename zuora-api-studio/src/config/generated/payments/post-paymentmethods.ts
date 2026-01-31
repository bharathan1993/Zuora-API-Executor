import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodsEndpoint: ApiEndpoint = {
  "id": "post-paymentmethods",
  "name": "Create a payment method",
  "description": "You can use this operation to create either a payment method associated ",
  "method": "POST",
  "path": "/v1/payment-methods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "Type of the payment method. The following types of the payment methods are supported:\n\n  * `CreditCard`\n\n  * `CreditCardReferenceTransaction`\n\n  * `ACH`\n\n  * `SEPA`\n\n  * `Betalingsservice`\n\n  * `Autogiro`\n\n  * `Bacs`\n\n  * `Becs`\n\n  * `Becsnz`\n\n  * `PAD`\n\n  * `PayPalCP`\n\n  * `PayPalEC`\n\n  * `PayPalNativeEC`\n\n  * `PayPalAdaptive`\n\n  * `AdyenApplePay`\n\n  * `AdyenGooglePay`\n\n  * `GooglePay`\n\n  * `AmazonPay`\n\n\nTo view the schema and example applicable to a specific payment method type, select the corresponding option from the following list.\n",
      "enum": [
        "CreditCard",
        "CreditCardReferenceTransaction",
        "ACH",
        "SEPA",
        "Betalingsservice",
        "Autogiro",
        "Bacs",
        "Becs",
        "Becsnz",
        "PAD",
        "PayPalCP",
        "PayPalEC",
        "PayPalNativeEC",
        "PayPalAdaptive",
        "AdyenApplePay",
        "AdyenGooglePay",
        "GooglePay",
        "AmazonPay"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "cardHolderInfo",
      "label": "Card Holder Info",
      "type": "object",
      "required": false,
      "description": "Container for cardholder information. The nested `cardHolderName` field is required.\n",
      "fields": [
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "description": "First address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "cardHolderName",
          "label": "Card Holder Name",
          "type": "string",
          "required": true,
          "description": "The card holder's full name as it appears on the card, e.g., \"John J Smith\", 50 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City, 40 characters or less.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country, must be a valid country name or abbreviation.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
          "section": "Additional Fields"
        },
        {
          "name": "email",
          "label": "Email",
          "type": "string",
          "required": false,
          "description": "Card holder's email address, 80 characters or less.\n",
          "section": "Communication Settings"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "description": "Phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>.\n",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "Zip code, 20 characters or less.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "cardType",
      "label": "Card Type",
      "type": "string",
      "required": false,
      "description": "The type of the credit card.\nPossible values include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see <a href=\"https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways\" target=\"_blank\">Supported Payment Gateways</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "checkDuplicated",
      "label": "Check Duplicated",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the duplication check is performed when you create a new credit card payment method. The default value is `false`.\n\nWith this field set to `true`, Zuora will check all active payment methods associated with the same billing account to ensure that no duplicate credit card payment methods are created. An error is returned if a duplicate payment method is found.\n        \nThe following fields are used for the duplication check:\n  - `cardHolderName`\n  - `expirationMonth`\n  - `expirationYear`\n  - `creditCardMaskNumber`. It is the masked credit card number generated by Zuora. For example, `************1234`.\n\n**This field is being deprecated.**  To achieve the same purpose, use the `processingOptions` > `checkDuplicated` field of the payment method object.\n",
      "section": "Additional Fields"
    },
    {
      "name": "expirationMonth",
      "label": "Expiration Month",
      "type": "number",
      "required": false,
      "description": "One or two digit expiration month (1-12) of the credit card.\n",
      "section": "Additional Fields"
    },
    {
      "name": "expirationYear",
      "label": "Expiration Year",
      "type": "number",
      "required": false,
      "description": "Four-digit expiration year of the credit card.\n",
      "section": "Additional Fields"
    },
    {
      "name": "mitConsentAgreementRef",
      "label": "Mit Consent Agreement Ref",
      "type": "string",
      "required": false,
      "description": "Specifies your reference for the stored credential consent agreement that you have established with the customer. Only applicable if you set the `mitProfileAction` field.\n",
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "mitConsentAgreementSrc",
      "label": "Mit Consent Agreement Src",
      "type": "string",
      "required": false,
      "description": "Required if you set the `mitProfileAction` field. Specifies how the consent agreement has been established with the customer. The allowed value is `External`. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `External` set to this field.\n",
      "enum": [
        "External"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "mitNetworkTransactionId",
      "label": "Mit Network Transaction Id",
      "type": "string",
      "required": false,
      "description": "Specifies the ID of a network transaction. Only applicable if you set the `mitProfileAction` field to `Persist`.\n",
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "screeningAmount",
      "label": "Screening Amount",
      "type": "number",
      "required": false,
      "description": "For <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Supported_payment_gateways/Chase_Orbital_Payment_Gateway\" target=\"_blank\">Chase Paymentech Orbital Gateway</a> integrations, if the Safetech Fraud service is enabled, use this field to pass in the amount used for fraud screening for Credit Card validation transactions.\n\nTwo-decimal amount is supported.\n\nIf the `screeningAmount` field is not specified, the authorization amount is used for fraud screening.\n",
      "section": "Additional Fields"
    },
    {
      "name": "securityCode",
      "label": "Security Code",
      "type": "string",
      "required": false,
      "description": "CVV or CVV2 security code of the credit card.\n\nTo ensure PCI compliance, this value is not stored and cannot be queried.\n",
      "section": "Additional Fields"
    },
    {
      "name": "tokens",
      "label": "Tokens",
      "type": "object",
      "required": false,
      "description": "To create tokenized payment methods, pass in the existing token information through the fields in this container.\n\nCurrently, this field is only supported on certain integrations. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "fields": [
        {
          "name": "gatewayType",
          "label": "Gateway Type",
          "type": "string",
          "required": true,
          "description": "The type of the payment gateway to generate the tokens. This field is\ncase-sensitive.\n",
          "section": "Payment Settings"
        },
        {
          "name": "secondTokenId",
          "label": "Second Token Id",
          "type": "string",
          "required": false,
          "description": "Pass in the second token of the payment method.\n",
          "section": "Additional Fields"
        },
        {
          "name": "thirdTokenId",
          "label": "Third Token Id",
          "type": "string",
          "required": false,
          "description": "Pass in the third token of the payment method.\n",
          "section": "Additional Fields"
        },
        {
          "name": "tokenId",
          "label": "Token Id",
          "type": "string",
          "required": true,
          "description": "Pass in the first token of the payment method.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "tokenize",
      "label": "Tokenize",
      "type": "boolean",
      "required": false,
      "description": "Specify `true` to tokenize the payment method.\n\nCurrently, this field is only supported on certain integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "mandateInfo",
      "label": "Mandate Info",
      "type": "object",
      "required": false,
      "description": "The container of the mandate information for the payment method.\n",
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
          "description": "Indicates whether to perform a duplication check when you create a payment method.\n\nThe default value is `false`.\n\nWith this field set to `true`, Zuora will check the active and closed payment methods associated with the same billing account to ensure that no duplicate payment methods are created. \n\nFor more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/D1_Duplication_check_on_payment_methods\" target=\"_blank\">Duplication check on payment methods</a>.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
      "name": "makeDefault",
      "label": "Make Default",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether the payment method will be the default payment method of the customer account that owns the payment method. Only applicable if the `accountKey` field is set.\n\nWhen you set this field to `true`, make sure the payment method is supported by the default payment gateway.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "skipValidation",
      "label": "Skip Validation",
      "type": "boolean",
      "required": false,
      "description": "Specify whether to skip the validation of the information through the payment gateway. For example, when migrating your payment methods, you can set this field to `true` to skip the validation. \n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "secondTokenId",
      "label": "Second Token Id",
      "type": "string",
      "required": false,
      "description": "A gateway unique identifier that replaces sensitive payment method data. \n\n`secondTokenId` is conditionally required only when `tokenId` is being used to represent a gateway customer profile. `secondTokenId` is used in the CC Reference Transaction payment method.\n",
      "section": "Additional Fields"
    },
    {
      "name": "tokenId",
      "label": "Token Id",
      "type": "string",
      "required": false,
      "description": "A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile.\n\nWhen `tokenId` is used to represent a customer profile, `secondTokenId` is conditionally required for representing the underlying tokenized payment method.\n\nThe values for the `tokenId` and `secondTokenId` fields differ for gateways. For more information, see the Knowledge Center article specific to each gateway that supports the CC Reference Transaction payment method.\n",
      "section": "Additional Fields"
    },
    {
      "name": "addressLine1",
      "label": "Address Line1",
      "type": "string",
      "required": false,
      "description": "First address line, 255 characters or less.\n",
      "section": "Additional Fields"
    },
    {
      "name": "addressLine2",
      "label": "Address Line2",
      "type": "string",
      "required": false,
      "description": "Second address line, 255 characters or less.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankABACode",
      "label": "Bank A B A Code",
      "type": "string",
      "required": false,
      "description": "The nine-digit routing number or ABA number used by banks. This field is\nonly required if the `type` field is set to `ACH`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "city",
      "label": "City",
      "type": "string",
      "required": false,
      "description": "City, 40 characters or less.\n\n\nIt is recommended to provide the city and country information when\ncreating a payment method. The information will be used to process\npayments. If the information is not provided during payment method\ncreation, the city and country data will be missing during payment\nprocessing.\n    \n",
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": false,
      "description": "Country, must be a valid country name or abbreviation.\n\n\nSee <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_countries_or_regions\"\ntarget=\"_blank\">View countries or regions</a>\nfor the list of supported country names and abbreviations.\n\n\nIt is recommended to provide the city and country information when\ncreating a payment method. The information will be used to process\npayments. If the information is not provided during payment method\ncreation, the city and country data will be missing during payment\nprocessing.\n",
      "section": "Additional Fields"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "string",
      "required": false,
      "description": "Phone number, 40 characters or less.\n",
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "description": "State, must be a valid subregion (state or province) name or code. For more information, see <a\nhref=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\"\ntarget=\"_blank\">View subregions of a specific country or region</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "zipCode",
      "label": "Zip Code",
      "type": "string",
      "required": false,
      "description": "Zip code, 20 characters or less.\n",
      "section": "Additional Fields"
    },
    {
      "name": "IBAN",
      "label": "I B A N",
      "type": "string",
      "required": false,
      "description": "The International Bank Account Number. \n\nThis field is required if the `type` field is set to `SEPA`. \nHowever, for the creation of tokenized SEPA payment methods, this field is optional. \nCurrently, SEPA tokenization is supported on selected payment gateway integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "section": "Additional Fields"
    },
    {
      "name": "businessIdentificationCode",
      "label": "Business Identification Code",
      "type": "string",
      "required": false,
      "description": "The BIC code used for SEPA.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankCode",
      "label": "Bank Code",
      "type": "string",
      "required": false,
      "description": "The sort code or number that identifies the bank. This is also known as the sort code.\n",
      "section": "Additional Fields"
    },
    {
      "name": "branchCode",
      "label": "Branch Code",
      "type": "string",
      "required": false,
      "description": "The branch code of the bank used for direct debit.\n",
      "section": "Additional Fields"
    },
    {
      "name": "BAID",
      "label": "B A I D",
      "type": "string",
      "required": false,
      "description": "ID of a PayPal billing agreement.\n",
      "section": "Additional Fields"
    },
    {
      "name": "preapprovalKey",
      "label": "Preapproval Key",
      "type": "string",
      "required": false,
      "description": "The PayPal preapproval key.\n",
      "section": "Additional Fields"
    },
    {
      "name": "amazonPayToken",
      "label": "Amazon Pay Token",
      "type": "string",
      "required": false,
      "description": "This field is specific for setting up Amazon Pay gateway integrations to specify the stringified Amazon Pay token.\n",
      "section": "Additional Fields"
    },
    {
      "name": "cardMaskNumber",
      "label": "Card Mask Number",
      "type": "string",
      "required": false,
      "description": "The masked card number.\n\nCurrently, this field is only supported on certain integrations. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "section": "Account Settings"
    },
    {
      "name": "cardNumber",
      "label": "Card Number",
      "type": "string",
      "required": false,
      "description": "Credit card number.\n",
      "section": "Account Settings"
    },
    {
      "name": "identityNumber",
      "label": "Identity Number",
      "type": "string",
      "required": false,
      "description": "The identity number used for Bank Transfer.\n",
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "description": "The customer account ID such as `2x92c0f859b0480f0159d3a4a6ee5bb6` or the customer account number such as `A02855638`. \n\nTo create an orphan payment method that is not associated with any customer account, you can skip this field.  As soon as the account information is available, associate the payment method with an account through the [Update a payment method](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentMethod/)  operation.\n",
      "section": "Account Settings"
    },
    {
      "name": "creditCardMaskNumber",
      "label": "Credit Card Mask Number",
      "type": "string",
      "required": false,
      "description": "The masked credit card number, such as `*********1112`.\nThis field is specific for the CC Reference Transaction payment method. It is an optional field that you can use to distinguish different CC Reference Transaction payment methods.\nThough there are no special restrictions on the input string, it is highly recommended to specify a card number that is masked.\n",
      "maxLength": 19,
      "section": "Account Settings"
    },
    {
      "name": "bankAccountMaskNumber",
      "label": "Bank Account Mask Number",
      "type": "string",
      "required": false,
      "description": "The masked account number such as ****1234.\n\nCurrently, this field is only supported on certain integrations. \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "section": "Account Settings"
    },
    {
      "name": "bankAccountName",
      "label": "Bank Account Name",
      "type": "string",
      "required": false,
      "description": "The name of the account holder, which can be either a person or a company.\n\n\nFor ACH payment methods on the BlueSnap integration, see [Overview of\nBlueSnap gateway\nintegration](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways/BlueSnap_Gateway/Overview_of_BlueSnap_gateway_integration#Payer_Name_Extraction)\nfor more information about how Zuora splits the string in this field into\ntwo parts and passes them to BlueSnap's `firstName` and `lastName` fields.\n",
      "maxLength": 70,
      "section": "Account Settings"
    },
    {
      "name": "bankAccountNumber",
      "label": "Bank Account Number",
      "type": "string",
      "required": false,
      "description": "The bank account number associated with the ACH payment.\n\nFor the creation of tokenized ACH payment methods, this field is optional. Currently, ACH tokenization is supported on selected payment gateway integrations.  \nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information\" target=\"_blank\">this article</a> for more information.\n",
      "maxLength": 30,
      "section": "Account Settings"
    },
    {
      "name": "bankAccountType",
      "label": "Bank Account Type",
      "type": "string",
      "required": false,
      "description": "The type of bank account associated with the ACH payment.\n\n\nWhen creating an ACH payment method on Adyen, this field is required by\nZuora but it is not required by Adyen. To create the ACH payment method\nsuccessfully, specify a real value for this field if you can. If it is not\npossible to get the real value for it, specify any of the allowed values\nas a dummy value, `Checking` preferably.\n",
      "enum": [
        "BusinessChecking",
        "Checking",
        "Saving"
      ],
      "section": "Account Settings"
    },
    {
      "name": "bankName",
      "label": "Bank Name",
      "type": "string",
      "required": false,
      "description": "The name of the bank where the ACH payment account is held.\n\n\nWhen creating an ACH payment method on Adyen, this field is required by\nZuora but it is not required by Adyen. To create the ACH payment method\nsuccessfully, specify a real value for this field if you can. If it is not\npossible to get the real value for it, specify a dummy value.\n",
      "maxLength": 70,
      "section": "Account Settings"
    },
    {
      "name": "accountHolderInfo",
      "label": "Account Holder Info",
      "type": "object",
      "required": false,
      "description": "The container for the account holder information. The nested `accountHolderName` field is required.\n",
      "fields": [
        {
          "name": "accountHolderName",
          "label": "Account Holder Name",
          "type": "string",
          "required": false,
          "description": "Required.\n\nThe full name of the bank account holder.\n",
          "maxLength": 60,
          "section": "Account Settings"
        },
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "description": "The first line of the address for the account holder.\n",
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
          "description": "The city where the account holder stays.\n\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "The country where the account holder stays.\n",
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
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": false,
          "description": "The first name of the account holder.\n",
          "section": "Account Settings"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": false,
          "description": "The last name of the account holder.\n",
          "section": "Account Settings"
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
      "name": "accountMaskNumber",
      "label": "Account Mask Number",
      "type": "string",
      "required": false,
      "description": "The masked account number such as ****1234.\n",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer's bank account.\n",
      "section": "Account Settings"
    },
    {
      "name": "mitProfileAction",
      "label": "Mit Profile Action",
      "type": "string",
      "required": false,
      "description": "Specifies how Zuora creates and activates the stored credential profile.\n\n- `Activate` - Use this value if you are creating the stored credential profile after receiving the customer's consent.\n\n  Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.\n  \n  If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.\n\n\n- `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.\n\nIf you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Activate` set to this field.\n",
      "enum": [
        "Activate",
        "Persist"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "mitProfileAgreedOn",
      "label": "Mit Profile Agreed On",
      "type": "date",
      "required": false,
      "description": "The date on which the profile is agreed. The date format is `yyyy-mm-dd`.\n",
      "section": "Communication Settings"
    },
    {
      "name": "mitProfileType",
      "label": "Mit Profile Type",
      "type": "string",
      "required": false,
      "description": "Required if you set the `mitProfileAction` field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Recurring` set to this field.\n",
      "enum": [
        "Recurring",
        "Unscheduled"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "required": false,
      "description": "Email address associated with the payment method. This field is specific for setting up Apple Pay on Adyen v2.0. This field will be passed to Adyen as `shopperEmail`.\n",
      "section": "Communication Settings"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
      "type": "string",
      "required": false,
      "description": "Internal ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method.\n\nIf you do not set this field, Zuora will use one of the following payment gateways instead:\n\n* The default payment gateway of the customer account that owns the payment method, if the `accountKey` field is set.\n* The default payment gateway of your Zuora tenant, if the `accountKey` field is not set.\n\nIf <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing\" target=\"_blank\">Payment Gateway Routing</a> is enabled: \n  - If this field is not specified, gateway routing rules will be invoked.\n  - If this field is specified, the specified gateway will be used to process the payment.\n\nIf Payment Gateway Routing is disabled:\n  - If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. \n  - If this field is specified, the specified gateway will be used to process the payment.\n",
      "section": "Payment Settings"
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
      "name": "applePaymentData",
      "label": "Apple Payment Data",
      "type": "string",
      "required": false,
      "description": "This field is specific for setting up Apple Pay for Adyen to include payload with Apple Pay token or Apple payment data. This information should be stringified. For more information, see [Set up Adyen Apple Pay](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Apple_Pay_on_Web/Set_up_Adyen_Apple_Pay).\n",
      "section": "Payment Settings"
    },
    {
      "name": "googlePaymentToken",
      "label": "Google Payment Token",
      "type": "string",
      "required": false,
      "description": "This field is specific for setting up Google Pay on Chase gateway integrations to specify the stringified Google Pay token. For more information, see [Set up Google Pay on Chase](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Set_up_Google_Pay_on_Chase).\n",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
