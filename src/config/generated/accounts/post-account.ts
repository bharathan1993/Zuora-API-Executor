import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_accountEndpoint: ApiEndpoint = {
  "id": "post-account",
  "name": "Create an account",
  "description": "Creates a customer account with a payment method, a bill-to contact,",
  "method": "POST",
  "path": "/v1/accounts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "A unique account number, up to 50 characters that do not begin with the default account number prefix. If no account number is specified, one is generated.",
      "section": "Account Settings"
    },
    {
      "name": "batch",
      "label": "Batch",
      "type": "string",
      "required": false,
      "description": "The alias name given to a batch. A string of 50 characters or less. **Note**: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package.",
      "section": "Account Settings"
    },
    {
      "name": "crmId",
      "label": "Crm Id",
      "type": "string",
      "required": false,
      "description": "CRM account ID for the account, up to 100 characters.",
      "section": "Account Settings"
    },
    {
      "name": "customerServiceRepName",
      "label": "Customer Service Rep Name",
      "type": "string",
      "required": false,
      "description": "Name of the account's customer service representative, if applicable.",
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Account name, up to 255 characters.",
      "section": "Account Settings"
    },
    {
      "name": "parentId",
      "label": "Parent Id",
      "type": "string",
      "required": false,
      "description": "Identifier of the parent customer account for this Account object. The length is 32 characters. Use this field if you have Customer Hierarchy enabled.",
      "section": "Account Settings"
    },
    {
      "name": "partnerAccount",
      "label": "Partner Account",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer account is a partner, distributor, or reseller. You can set this field to `true` if you have business with distributors or resellers, or operating in B2B model to manage numerous subscriptions through concurrent API requests. After this field is set to `true`, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments. **Note**: This field is available only if you have the Reseller Account feature enabled.",
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "profileNumber",
      "label": "Profile Number",
      "type": "string",
      "required": false,
      "description": "The number of the communication profile that this account is linked to. You can provide either or both of the `communicationProfileId` and `profileNumber` fields. If both are provided, the request will fail if they do not refer to the same communication profile. If none is provided, the default communication profile will be used for this account.",
      "section": "Account Settings"
    },
    {
      "name": "purchaseOrderNumber",
      "label": "Purchase Order Number",
      "type": "string",
      "required": false,
      "description": "The purchase order number provided by your customer for services, products, or both purchased.",
      "section": "Account Settings"
    },
    {
      "name": "additionalEmailAddresses",
      "label": "Additional Email Addresses",
      "type": "array",
      "required": false,
      "description": "A list of additional email addresses to receive email notifications. Use commas to separate email addresses.",
      "itemType": "string",
      "section": "Communication Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "description": "The ID of the communication profile that this account is linked to. You can provide either or both of the `communicationProfileId` and `profileNumber` fields. If both are provided, the request will fail if they do not refer to the same communication profile. If none is provided, the default communication profile will be used for this account.",
      "section": "Communication Settings"
    },
    {
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "description": "The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`. **Note:** - This field is valid only if the `applyCredit` field is set to `true`. - If no value is specified for this field, the default priority order is used, [\"CreditMemo\", \"UnappliedPayment\"], to apply credit memos first and then apply unapplied payments. - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `[\"CreditMemo\"]`, only credit memos are used to apply to invoices.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "A currency as defined in Billing Settings in the Zuora UI. For payment method authorization, if the `paymentMethod` > `currencyCode` field is specified, `currencyCode` is used. Otherwise, this `currency` field is used for payment method authorization. If no currency is specified for the account, the default currency of the account is then used.",
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "A string of up to 65,535 characters.",
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabel",
      "label": "Organization Label",
      "type": "string",
      "required": false,
      "description": "Name of the organization that the account belongs to. This field is only required when you have already turned on Multi-Org feature.",
      "section": "Additional Fields"
    },
    {
      "name": "salesRep",
      "label": "Sales Rep",
      "type": "string",
      "required": false,
      "description": "The name of the sales representative associated with this account, if applicable. Maximum of 50 characters.",
      "section": "Additional Fields"
    },
    {
      "name": "sequenceSetId",
      "label": "Sequence Set Id",
      "type": "string",
      "required": false,
      "description": "The ID or number of the billing document sequence set to assign to the customer account. The billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set. If a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set.",
      "section": "Additional Fields"
    },
    {
      "name": "tagging",
      "label": "Tagging",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "Date through which to calculate charges if an invoice or a credit memo is generated, as yyyy-mm-dd. Default is current date. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `211.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version). **Note:** The credit memo is only available only if you have the Invoice Settlement feature enabled.",
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "description": "Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "CustomerType__NS",
      "label": "Customer Type N S",
      "type": "string",
      "required": false,
      "description": "Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Company",
        "Individual"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Department__NS",
      "label": "Department N S",
      "type": "string",
      "required": false,
      "description": "Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the account's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "description": "Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
      "type": "string",
      "required": false,
      "description": "Value of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the account was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Yes",
        "No"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically apply credit memos or unapplied payments, or both to an invoice. If the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken. **Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "description": "Applies a credit balance to an invoice. If the value is `true`, the credit balance is applied to the invoice. If the value is `false`, no action is taken. Prerequisite: `invoice` must be `true`. To view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method. **Note:** - If you are using the field `invoiceCollect` rather than the field `invoice`, the `invoiceCollect` value must be `true`. - This field is deprecated if you have the Invoice Settlement feature enabled.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "description": "Whether future payments are to be automatically billed when they are due. - If this field is set to `true`, you must specify either the `creditCard` field or the `hpmCreditCardPaymentMethodId` field, but not both. - If this field is set to `false`, you can specify neither the `creditCard` field nor the `hpmCreditCardPaymentMethodId` field.",
      "section": "Payment Settings"
    },
    {
      "name": "creditCard",
      "label": "Credit Card",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "cardHolderInfo",
          "label": "Card Holder Info",
          "type": "object",
          "required": true,
          "description": "Container for cardholder information.",
          "fields": [
            {
              "name": "addressLine1",
              "label": "Address Line1",
              "type": "string",
              "required": true,
              "description": "First address line, 255 characters or less.",
              "section": "Additional Fields"
            },
            {
              "name": "addressLine2",
              "label": "Address Line2",
              "type": "string",
              "required": false,
              "description": "Second address line, 255 characters or less.",
              "section": "Additional Fields"
            },
            {
              "name": "cardHolderName",
              "label": "Card Holder Name",
              "type": "string",
              "required": true,
              "description": "The card holder's full name as it appears on the card, e.g., \"John J Smith\", 50 characters or less.",
              "section": "Account Settings"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": true,
              "description": "City, 40 characters or less. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": true,
              "description": "Country; must be a valid country name or abbreviation. It is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.",
              "section": "Additional Fields"
            },
            {
              "name": "email",
              "label": "Email",
              "type": "string",
              "required": false,
              "description": "Card holder's email address, 80 characters or less.",
              "section": "Communication Settings"
            },
            {
              "name": "phone",
              "label": "Phone",
              "type": "string",
              "required": false,
              "description": "Phone number, 40 characters or less.",
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": true,
              "description": "State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region.",
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": true,
              "description": "Zip code, 20 characters or less.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "cardNumber",
          "label": "Card Number",
          "type": "string",
          "required": true,
          "description": "Card number, up to 16 characters. Once created, this field can't be updated or queried, and is only available in masked format (e.g., XXXX-XXXX-XXXX-1234).",
          "section": "Account Settings"
        },
        {
          "name": "cardType",
          "label": "Card Type",
          "type": "string",
          "required": true,
          "description": "The type of the credit card. Possible values include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).",
          "section": "Additional Fields"
        },
        {
          "name": "expirationMonth",
          "label": "Expiration Month",
          "type": "string",
          "required": true,
          "description": "Two-digit expiration month (01-12).",
          "section": "Additional Fields"
        },
        {
          "name": "expirationYear",
          "label": "Expiration Year",
          "type": "string",
          "required": true,
          "description": "Four-digit expiration year.",
          "section": "Additional Fields"
        },
        {
          "name": "securityCode",
          "label": "Security Code",
          "type": "string",
          "required": false,
          "description": "The CVV or CVV2 security code of the card. To ensure PCI compliance, this value is not stored and cannot be queried.",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "gatewayRoutingEligible",
      "label": "Gateway Routing Eligible",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to include the applicable billing accounts to gateway routing for controlled adoption.",
      "defaultValue": false,
      "section": "Payment Settings"
    },
    {
      "name": "hpmCreditCardPaymentMethodId",
      "label": "Hpm Credit Card Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment method associated with this account. You can use this field to set the default payment method for the account. The payment method ID specified in this field will be set as the default payment method for this account. You can pass the ID of any valid payment method, including a system-generated payment method ID, into this field. If the `autoPay` field is set to `true`, you must provide the credit card payment method ID for either this field or the `creditCard` field, but not both. For the Credit Card Reference Transaction payment method, you can specify the payment method ID in this field or use the `paymentMethod` field to create a CC Reference Transaction payment method for an account.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethod",
      "label": "Payment Method",
      "type": "object",
      "required": false,
      "description": "Payment method information associated with an account.",
      "fields": [
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
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
          "fields": [
            {
              "name": "addressLine1",
              "label": "Address Line1",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "addressLine2",
              "label": "Address Line2",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "cardHolderName",
              "label": "Card Holder Name",
              "type": "string",
              "required": true,
              "section": "Account Settings"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "email",
              "label": "Email",
              "type": "string",
              "required": false,
              "section": "Communication Settings"
            },
            {
              "name": "phone",
              "label": "Phone",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "cardMaskNumber",
          "label": "Card Mask Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "cardNumber",
          "label": "Card Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "cardType",
          "label": "Card Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "checkDuplicated",
          "label": "Check Duplicated",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "expirationMonth",
          "label": "Expiration Month",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "expirationYear",
          "label": "Expiration Year",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "identityNumber",
          "label": "Identity Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "mitConsentAgreementRef",
          "label": "Mit Consent Agreement Ref",
          "type": "string",
          "required": false,
          "maxLength": 128,
          "section": "Additional Fields"
        },
        {
          "name": "mitConsentAgreementSrc",
          "label": "Mit Consent Agreement Src",
          "type": "string",
          "required": false,
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
          "maxLength": 128,
          "section": "Additional Fields"
        },
        {
          "name": "mitProfileAction",
          "label": "Mit Profile Action",
          "type": "string",
          "required": false,
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
          "section": "Communication Settings"
        },
        {
          "name": "mitProfileType",
          "label": "Mit Profile Type",
          "type": "string",
          "required": false,
          "enum": [
            "Recurring",
            "Unscheduled"
          ],
          "section": "Communication Settings"
        },
        {
          "name": "screeningAmount",
          "label": "Screening Amount",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "securityCode",
          "label": "Security Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "tokens",
          "label": "Tokens",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "gatewayType",
              "label": "Gateway Type",
              "type": "string",
              "required": true,
              "section": "Payment Settings"
            },
            {
              "name": "secondTokenId",
              "label": "Second Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "thirdTokenId",
              "label": "Third Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "tokenId",
              "label": "Token Id",
              "type": "string",
              "required": true,
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
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "mandateInfo",
          "label": "Mandate Info",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "mandateId",
              "label": "Mandate Id",
              "type": "string",
              "required": false,
              "maxLength": 36,
              "section": "Additional Fields"
            },
            {
              "name": "mandateReason",
              "label": "Mandate Reason",
              "type": "string",
              "required": false,
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "mandateStatus",
              "label": "Mandate Status",
              "type": "string",
              "required": false,
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
          "fields": [
            {
              "name": "checkDuplicated",
              "label": "Check Duplicated",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "accountKey",
          "label": "Account Key",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "authGateway",
          "label": "Auth Gateway",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "currencyCode",
          "label": "Currency Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "gatewayOptions",
          "label": "Gateway Options",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "key",
              "label": "Key",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Payment Settings"
        },
        {
          "name": "ipAddress",
          "label": "Ip Address",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "makeDefault",
          "label": "Make Default",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "skipValidation",
          "label": "Skip Validation",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "creditCardMaskNumber",
          "label": "Credit Card Mask Number",
          "type": "string",
          "required": false,
          "maxLength": 19,
          "section": "Account Settings"
        },
        {
          "name": "secondTokenId",
          "label": "Second Token Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "tokenId",
          "label": "Token Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "bankABACode",
          "label": "Bank A B A Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "bankAccountMaskNumber",
          "label": "Bank Account Mask Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountName",
          "label": "Bank Account Name",
          "type": "string",
          "required": false,
          "maxLength": 70,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountNumber",
          "label": "Bank Account Number",
          "type": "string",
          "required": false,
          "maxLength": 30,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountType",
          "label": "Bank Account Type",
          "type": "string",
          "required": false,
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
          "maxLength": 70,
          "section": "Account Settings"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "IBAN",
          "label": "I B A N",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "accountHolderInfo",
          "label": "Account Holder Info",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "accountHolderName",
              "label": "Account Holder Name",
              "type": "string",
              "required": false,
              "maxLength": 60,
              "section": "Account Settings"
            },
            {
              "name": "addressLine1",
              "label": "Address Line1",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "addressLine2",
              "label": "Address Line2",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "email",
              "label": "Email",
              "type": "string",
              "required": false,
              "section": "Communication Settings"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "phone",
              "label": "Phone",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
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
          "section": "Account Settings"
        },
        {
          "name": "businessIdentificationCode",
          "label": "Business Identification Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "bankCode",
          "label": "Bank Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "branchCode",
          "label": "Branch Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "BAID",
          "label": "B A I D",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "email",
          "label": "Email",
          "type": "email",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "preapprovalKey",
          "label": "Preapproval Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "applePaymentData",
          "label": "Apple Payment Data",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "googlePaymentToken",
          "label": "Google Payment Token",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "amazonPayToken",
          "label": "Amazon Pay Token",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "description": "Payment terms for this account. Possible values are: `Due Upon Receipt`, `Net 30`, `Net 60`, `Net 90`. **Note**: If you want to specify a payment term when creating a new account, you must set a value in this field. If you do not set a value in this field, Zuora will use the default value set in **Billing Settings** > **Payment Terms** from Zuora UI.",
      "section": "Payment Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "description": "The account's bill cycle day (BCD), when bill runs generate invoices for the account. Specify any day of the month (1-31, where 31 = end-of-month), or 0 for auto-set. Required if no subscription will be created. Optional if a subscription is created and defaults to the day-of-the-month of the subscription's `contractEffectiveDate`.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContact",
      "label": "Bill To Contact",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "description": "First address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. If using Zuora Tax, be aware that Zuora tax requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "Zip code, 20 characters or less.",
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "creditMemoTemplateId",
      "label": "Credit Memo Template Id",
      "type": "string",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. The unique ID of the credit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "debitMemoTemplateId",
      "label": "Debit Memo Template Id",
      "type": "string",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. The unique ID of the debit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos. - If this field is specified, the specified date is used as the billing document date. - If this field is not specified, the date specified in the `targetDate` is used as the billing document date.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "einvoiceProfile",
      "label": "Einvoice Profile",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "businessCategory",
          "label": "Business Category",
          "type": "string",
          "required": false,
          "description": "The high-level category of the business.",
          "enum": [
            "B2B",
            "B2C",
            "B2G"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "businessName",
          "label": "Business Name",
          "type": "string",
          "required": false,
          "description": "The full official name that the Buyer is registered with the relevant legal authority.",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "businessNumber",
          "label": "Business Number",
          "type": "string",
          "required": false,
          "description": "The unique identifier number of the legal entity or person that you do business with. For example, you must use a GSTIN for India.",
          "section": "Account Settings"
        },
        {
          "name": "businessNumberSchemeId",
          "label": "Business Number Scheme Id",
          "type": "string",
          "required": false,
          "description": "The identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person.",
          "section": "Account Settings"
        },
        {
          "name": "enabled",
          "label": "Enabled",
          "type": "boolean",
          "required": false,
          "description": "Whether to enable the e-invoicing profile for the customer account. If the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format: - The account must be configured to generate e-invoice files for billing documents. - The billing document must be in Posted status. - A business region must be created for the billing country contact, and be linked to an e-invoicing service provider.",
          "section": "Additional Fields"
        },
        {
          "name": "endpointId",
          "label": "Endpoint Id",
          "type": "string",
          "required": false,
          "description": "The Buyer's electronic address, to which the application-level response to the billing document might be delivered.",
          "section": "Additional Fields"
        },
        {
          "name": "endpointSchemeId",
          "label": "Endpoint Scheme Id",
          "type": "string",
          "required": false,
          "description": "The identification scheme identifier of the Buyer’s electronic address.",
          "section": "Additional Fields"
        },
        {
          "name": "taxRegisterNumber",
          "label": "Tax Register Number",
          "type": "string",
          "required": false,
          "description": "The Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status.",
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsEmail",
      "label": "Invoice Delivery Prefs Email",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer wants to receive invoices through email.",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsPrint",
      "label": "Invoice Delivery Prefs Print",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer wants to receive printed invoices, such as through postal mail.",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "description": "Invoice template ID or template number, configured in Billing Settings in the Zuora UI.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "description": "Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/B_Credit_and_Debit_Memos/Rules_for_generating_invoices_and_credit_memos). The billing documents generated in this operation is only for this subscription, not for the entire customer account. Possible values: - `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created. - `false`: No invoice is created. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "defaultValue": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "shipToSameAsBillTo",
      "label": "Ship To Same As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Whether the ship-to contact and bill-to contact are the same entity. The created account has the same bill-to contact and ship-to contact entity only when all the following conditions are met in the request body: - This field is set to `true`. - A bill-to contact is specified. - No ship-to contact is specified.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToSameAsBillTo",
      "label": "Sold To Same As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Whether the sold-to contact and bill-to contact are the same entity. The created account has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body: - This field is set to `true`. - A bill-to contact is specified. - No sold-to contact is specified.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "summaryStatementTemplateId",
      "label": "Summary Statement Template Id",
      "type": "string",
      "required": false,
      "description": "The summary statement template ID or number. When a user attempts to generate a summary statement from the \"Account Summary Statement\" screen, the system utilizes this template to produce the PDF.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "description": "Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account. If the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken. Prerequisite: The `invoice` or `runBilling` field must be `true`. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "defaultValue": true,
      "section": "Subscription Settings"
    },
    {
      "name": "subscription",
      "label": "Subscription",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "autoRenew",
          "label": "Auto Renew",
          "type": "boolean",
          "required": false,
          "description": "If `true`, auto-renew is enabled. Default is `false`.",
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "description": "Effective contract date for this subscription, as `yyyy-mm-dd`.",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date on which the services or products within a subscription have been accepted by the customer, as `yyyy-mm-dd`. Default value is dependent on the value of other fields. See Notes section for more details.",
          "section": "Additional Fields"
        },
        {
          "name": "initialTerm",
          "label": "Initial Term",
          "type": "number",
          "required": false,
          "description": "Duration of the initial subscription term in whole months. Default is 0.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceOwnerAccountKey",
          "label": "Invoice Owner Account Key",
          "type": "string",
          "required": false,
          "description": "Invoice owner account number or ID. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
          "section": "Account Settings"
        },
        {
          "name": "invoiceSeparately",
          "label": "Invoice Separately",
          "type": "boolean",
          "required": false,
          "description": "Separates a single subscription from other subscriptions and invoices the charge independently. If the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice. The default value is `false`. Prerequisite: The default subscription setting `Enable Subscriptions to be Invoiced Separately` must be set to `Yes`.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "renewalTerm",
          "label": "Renewal Term",
          "type": "number",
          "required": false,
          "description": "Duration of the renewal term in whole months. Default is 0.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date on which the services or products within a subscription have been activated and access has been provided to the customer, as `yyyy-mm-dd`. Default value is dependent on the value of other fields. See Notes section for more details.",
          "section": "Tax Settings"
        },
        {
          "name": "subscribeToRatePlans",
          "label": "Subscribe To Rate Plans",
          "type": "array",
          "required": false,
          "description": "Container for one or more rate plans for this subscription.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "chargeOverrides",
              "label": "Charge Overrides",
              "type": "array",
              "required": false,
              "description": "This optional container is used to override the quantity of one or more product rate plan charges for this subscription.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "amendedByOrderOn",
                  "label": "Amended By Order On",
                  "type": "string",
                  "required": false,
                  "description": "The date when the rate plan charge is amended through an order or amendment. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.",
                  "section": "Additional Fields"
                },
                {
                  "name": "applyDiscountTo",
                  "label": "Apply Discount To",
                  "type": "string",
                  "required": false,
                  "description": "Specifies the type of charges that you want a specific discount to apply to. Values: * `ONETIME` * `RECURRING` * `USAGE` * `ONETIMERECURRING` * `ONETIMEUSAGE` * `RECURRINGUSAGE` * `ONETIMERECURRINGUSAGE`",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "billCycleDay",
                  "label": "Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed. Values: `1`-`31`",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billCycleType",
                  "label": "Bill Cycle Type",
                  "type": "string",
                  "required": false,
                  "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field. Values: * `DefaultFromCustomer` * `SpecificDayofMonth` * `SubscriptionStartDay` * `ChargeTriggerDay` * `SpecificDayofWeek`",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriod",
                  "label": "Billing Period",
                  "type": "string",
                  "required": false,
                  "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD). Values: * `Month` * `Quarter` * `Semi_Annual` * `Annual` * `Eighteen_Months` * `Two_Years` * `Three_Years` * `Five_Years` * `Specific_Months` * `Subscription_Term` * `Week` * `Specific_Weeks`",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriodAlignment",
                  "label": "Billing Period Alignment",
                  "type": "string",
                  "required": false,
                  "description": "Aligns charges within the same subscription if multiple charges begin on different dates. Values: * `AlignToCharge` * `AlignToSubscriptionStart` * `AlignToTermStart`",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingTiming",
                  "label": "Billing Timing",
                  "type": "string",
                  "required": false,
                  "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage, and discount charges. Values: * `IN_ADVANCE` (default) * `IN_ARREARS`",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "chargeModelConfiguration",
                  "label": "Charge Model Configuration",
                  "type": "object",
                  "required": false,
                  "description": "Container for charge model configuration data. **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                  "fields": [
                    {
                      "name": "customFieldPerUnitRate",
                      "label": "Custom Field Per Unit Rate",
                      "type": "string",
                      "required": false,
                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFieldTotalAmount",
                      "label": "Custom Field Total Amount",
                      "type": "string",
                      "required": false,
                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "formula",
                      "label": "Formula",
                      "type": "string",
                      "required": false,
                      "description": "The pricing formula to calculate actual rating amount for each usage record. This field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "discountAmount",
                  "label": "Discount Amount",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the amount of fixed-amount discount.",
                  "section": "Additional Fields"
                },
                {
                  "name": "discountLevel",
                  "label": "Discount Level",
                  "type": "string",
                  "required": false,
                  "description": "Specifies if the discount applies to the product rate plan only, the entire subscription, or to any activity in the account. Values: * `rateplan` * `subscription` * `account`",
                  "section": "Additional Fields"
                },
                {
                  "name": "discountPercentage",
                  "label": "Discount Percentage",
                  "type": "number",
                  "required": false,
                  "description": "Percentage of discount for a percentage discount.",
                  "section": "Additional Fields"
                },
                {
                  "name": "endDateCondition",
                  "label": "End Date Condition",
                  "type": "string",
                  "required": false,
                  "description": "Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date. Values: * `Subscription_End` * `Fixed_Period` * `Specific_End_Date` * `One_Time`",
                  "section": "Additional Fields"
                },
                {
                  "name": "excludeItemBillingFromRevenueAccounting",
                  "label": "Exclude Item Billing From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "excludeItemBookingFromRevenueAccounting",
                  "label": "Exclude Item Booking From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "description": "The flag to exclude rate plan charges from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "includedUnits",
                  "label": "Included Units",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAllocationEligible",
                  "label": "Is Allocation Eligible",
                  "type": "boolean",
                  "required": false,
                  "description": "This field is used to identify if the charge segment is allocation eligible in revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
                  "section": "Additional Fields"
                },
                {
                  "name": "isUnbilled",
                  "label": "Is Unbilled",
                  "type": "boolean",
                  "required": false,
                  "description": "This field is used to dictate how to perform the accounting during revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "listPriceBase",
                  "label": "List Price Base",
                  "type": "string",
                  "required": false,
                  "description": "The list price base for the product rate plan charge. Values: * `Per_Billing_Period` * `Per_Month` * `Per_Week` * `Per_Year` * `Per_Specific_Months`",
                  "section": "Additional Fields"
                },
                {
                  "name": "number",
                  "label": "Number",
                  "type": "string",
                  "required": false,
                  "description": "Unique number that identifies the charge. Max 50 characters. System-generated if not provided.",
                  "section": "Account Settings"
                },
                {
                  "name": "numberOfPeriods",
                  "label": "Number Of Periods",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.",
                  "section": "Account Settings"
                },
                {
                  "name": "originalOrderDate",
                  "label": "Original Order Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the rate plan charge is created through an order or amendment. This field is not updatable. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.",
                  "section": "Additional Fields"
                },
                {
                  "name": "overagePrice",
                  "label": "Overage Price",
                  "type": "number",
                  "required": false,
                  "description": "Price for units over the allowed amount.",
                  "section": "Additional Fields"
                },
                {
                  "name": "overageUnusedUnitsCreditOption",
                  "label": "Overage Unused Units Credit Option",
                  "type": "string",
                  "required": false,
                  "description": "Determines whether to credit the customer with unused units of usage. Values: * `NoCredit` * `CreditBySpecificRate`",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "price",
                  "label": "Price",
                  "type": "number",
                  "required": false,
                  "description": "Price for units in the subscription rate plan.",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceChangeOption",
                  "label": "Price Change Option",
                  "type": "string",
                  "required": false,
                  "description": "Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field. Values: * `NoChange` (default) * `SpecificPercentageValue` * `UseLatestProductCatalogPricing`",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceIncreasePercentage",
                  "label": "Price Increase Percentage",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`. Value must be a decimal between `-100` and `100`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeId",
                  "label": "Product Rate Plan Charge Id",
                  "type": "string",
                  "required": true,
                  "description": "ID of a product rate-plan charge for this subscription.",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeNumber",
                  "label": "Product Rate Plan Charge Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate-plan charge for this subscription.",
                  "section": "Account Settings"
                },
                {
                  "name": "quantity",
                  "label": "Quantity",
                  "type": "number",
                  "required": false,
                  "description": "Number of units. Must be a decimal >=`0`. When using `chargeOverrides` for creating subscriptions with recurring charge types, the `quantity` field must be populated when the charge model is \"Tiered Pricing\" or \"Volume Pricing\". It is not required for \"Flat Fee Pricing\" charge model.",
                  "section": "Additional Fields"
                },
                {
                  "name": "ratingGroup",
                  "label": "Rating Group",
                  "type": "string",
                  "required": false,
                  "description": "Specifies a rating group based on which usage records are rated. Possible values: - `ByBillingPeriod` (default): The rating is based on all the usages in a billing period. - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date. - `ByUsageRecord`: The rating is based on each usage record. - `ByUsageUpload`: The rating is based on all the usages in a uploaded usage file (`.xls` or `.csv`). - `ByGroupId`: The rating is based on all the usages in a custom group. **Note:** - The `ByBillingPeriod` value can be applied for all charge models. - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models. - The `ByGroupId` value is only available if you have the Active Rating feature enabled. - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificBillingPeriod",
                  "label": "Specific Billing Period",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "specificEndDate",
                  "label": "Specific End Date",
                  "type": "date",
                  "required": false,
                  "description": "Defines when the charge ends after the charge trigger date. **Note**: * This field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`. * If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificListPriceBase",
                  "label": "Specific List Price Base",
                  "type": "number",
                  "required": false,
                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "tiers",
                  "label": "Tiers",
                  "type": "array",
                  "required": false,
                  "description": "Container for Volume, Tiered, or Tiered with Overage charge models. Supports the following charge types: * One-time * Recurring * Usage-based",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "endingUnit",
                      "label": "Ending Unit",
                      "type": "number",
                      "required": false,
                      "description": "End number of a range of units for the tier.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "price",
                      "label": "Price",
                      "type": "number",
                      "required": true,
                      "description": "Price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "priceFormat",
                      "label": "Price Format",
                      "type": "string",
                      "required": false,
                      "description": "Indicates if pricing is a flat fee or is per unit. Values: * `FlatFee` * `PerUnit`",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startingUnit",
                      "label": "Starting Unit",
                      "type": "number",
                      "required": false,
                      "description": "Starting number of a range of units for the tier.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "tier",
                      "label": "Tier",
                      "type": "number",
                      "required": true,
                      "description": "Unique number that identifies the tier that the price applies to.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
                  "required": false,
                  "description": "Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to `USD`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "triggerEvent",
                  "label": "Trigger Event",
                  "type": "string",
                  "required": false,
                  "description": "Specifies when to start billing the customer for the charge. Values: * `UCE` * `USA` * `UCA` * `USD`",
                  "section": "Additional Fields"
                },
                {
                  "name": "unusedUnitsCreditRates",
                  "label": "Unused Units Credit Rates",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "upToPeriods",
                  "label": "Up To Periods",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends. **Note:** You must use this field together with the `upToPeriodsType` field to specify the time period. * This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. * If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.",
                  "section": "Additional Fields"
                },
                {
                  "name": "upToPeriodsType",
                  "label": "Up To Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "The period type used to define when the charge ends. Values: * `Billing_Periods` * `Days` * `Weeks` * `Months` * `Years` You must use this field together with the `upToPeriods` field to specify the time period. This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "weeklyBillCycleDay",
                  "label": "Weekly Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "description": "Specifies which day of the week is the bill cycle day (BCD) for the charge. Values: * `Sunday` * `Monday` * `Tuesday` * `Wednesday` * `Thursday` * `Friday` * `Saturday`",
                  "section": "Invoice & Document Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "externalCatalogPlanId",
              "label": "External Catalog Plan Id",
              "type": "string",
              "required": false,
              "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. **Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
              "section": "Additional Fields"
            },
            {
              "name": "externalIdSourceSystem",
              "label": "External Id Source System",
              "type": "string",
              "required": false,
              "description": "The ID of the external source system. You can use this field and `externalCatalogPlanId` to specify a product rate plan that is imported from an external system. **Note:** If both `externalCatalogPlanId`, `externalIdSourceSystem` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
              "section": "Additional Fields"
            },
            {
              "name": "externallyManagedPlanId",
              "label": "Externally Managed Plan Id",
              "type": "string",
              "required": false,
              "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanId",
              "label": "Product Rate Plan Id",
              "type": "string",
              "required": false,
              "description": "ID of a product rate plan for this subscription.",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanNumber",
              "label": "Product Rate Plan Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate plan for this subscription.",
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "description": "Subscription Number. The value can be up to 1000 characters. If you do not specify a subscription number when creating a subscription for the new account, Zuora will generate a subscription number automatically. If the account is created successfully, the subscription number is returned in the `subscriptionNumber` response field.",
          "section": "Account Settings"
        },
        {
          "name": "termStartDate",
          "label": "Term Start Date",
          "type": "date",
          "required": false,
          "description": "The date on which the subscription term begins, as `yyyy-mm-dd`. If this is a renewal subscription, this date is different from the subscription start date.",
          "section": "Additional Fields"
        },
        {
          "name": "termType",
          "label": "Term Type",
          "type": "string",
          "required": true,
          "description": "Possible values are: `TERMED`, `EVERGREEN`.",
          "section": "Additional Fields"
        },
        {
          "name": "CpqBundleJsonId__QT",
          "label": "Cpq Bundle Json Id Q T",
          "type": "string",
          "required": false,
          "description": "The Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field.",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityCloseDate__QT",
          "label": "Opportunity Close Date Q T",
          "type": "date",
          "required": false,
          "description": "The closing date of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityName__QT",
          "label": "Opportunity Name Q T",
          "type": "string",
          "required": false,
          "description": "The unique identifier of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "QuoteBusinessType__QT",
          "label": "Quote Business Type Q T",
          "type": "string",
          "required": false,
          "description": "The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "QuoteNumber__QT",
          "label": "Quote Number Q T",
          "type": "string",
          "required": false,
          "description": "The unique identifier of the Quote. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
          "maxLength": 32,
          "section": "Account Settings"
        },
        {
          "name": "QuoteType__QT",
          "label": "Quote Type Q T",
          "type": "string",
          "required": false,
          "description": "The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationId__NS",
          "label": "Integration Id N S",
          "type": "string",
          "required": false,
          "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationStatus__NS",
          "label": "Integration Status N S",
          "type": "string",
          "required": false,
          "description": "Status of the subscription's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "Project__NS",
          "label": "Project N S",
          "type": "string",
          "required": false,
          "description": "The NetSuite project that the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SalesOrder__NS",
          "label": "Sales Order N S",
          "type": "string",
          "required": false,
          "description": "The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "description": "Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        }
      ],
      "section": "Subscription Settings"
    },
    {
      "name": "shipToContact",
      "label": "Ship To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "description": "First address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation.",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "100 characters or less. If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "Zip code, 20 characters or less.",
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "soldToContact",
      "label": "Sold To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "description": "First address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. If using Zuora Tax, be aware that Zuora Tax requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.",
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "description": "Zip code, 20 characters or less.",
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "taxInfo",
      "label": "Tax Info",
      "type": "object",
      "required": false,
      "description": "Container for tax exempt information, used to establish the tax exempt status of a customer account.",
      "fields": [
        {
          "name": "VATId",
          "label": "V A T Id",
          "type": "string",
          "required": false,
          "description": "EU Value Added Tax ID. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
          "section": "Tax Settings"
        },
        {
          "name": "companyCode",
          "label": "Company Code",
          "type": "string",
          "required": false,
          "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateId",
          "label": "Exempt Certificate Id",
          "type": "string",
          "required": false,
          "description": "ID of the customer tax exemption certificate. Requires Zuora Tax.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateType",
          "label": "Exempt Certificate Type",
          "type": "string",
          "required": false,
          "description": "Type of tax exemption certificate that the customer holds. Requires Zuora Tax.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptDescription",
          "label": "Exempt Description",
          "type": "string",
          "required": false,
          "description": "Description of the tax exemption certificate that the customer holds. Requires Zuora Tax.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptEffectiveDate",
          "label": "Exempt Effective Date",
          "type": "date",
          "required": false,
          "description": "Date when the customer tax exemption starts. Requires Zuora Tax. Format: `yyyy-mm-dd`. Defaults to the current date.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptEntityUseCode",
          "label": "Exempt Entity Use Code",
          "type": "string",
          "required": false,
          "description": "A unique entity use code to apply exemptions in Avalara AvaTax. This account-level field is required only when you choose Avalara as your tax engine. See [Exempt Transactions](https://developer.avalara.com/avatax/handling-tax-exempt-customers/)for more details.",
          "maxLength": 64,
          "section": "Additional Fields"
        },
        {
          "name": "exemptExpirationDate",
          "label": "Exempt Expiration Date",
          "type": "date",
          "required": false,
          "description": "Date when the customer tax exemption expires. Requires Zuora Tax. Format: `yyyy-mm-dd`. Defaults to the current date.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptIssuingJurisdiction",
          "label": "Exempt Issuing Jurisdiction",
          "type": "string",
          "required": false,
          "description": "Jurisdiction in which the customer tax exemption certificate was issued.",
          "section": "Additional Fields"
        },
        {
          "name": "exemptStatus",
          "label": "Exempt Status",
          "type": "string",
          "required": false,
          "description": "Status of the account tax exemption. Requires Zuora Tax. Required if you use Zuora Tax. This field is unavailable if Zuora Tax is not used. Values: `Yes`, `No`(default), `pendingVerification`. Note that the value will be set to `No` if no input.",
          "section": "Additional Fields"
        }
      ],
      "section": "Tax Settings"
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
