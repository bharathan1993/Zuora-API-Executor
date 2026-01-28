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
      "description": "A unique account number, up to 50 characters that do not begin with the default account number prefix.  If no account number is specified, one is generated.\n",
      "section": "Account Settings"
    },
    {
      "name": "batch",
      "label": "Batch",
      "type": "string",
      "required": false,
      "description": "The alias name given to a batch. A string of 50 characters or\nless.\n\n**Note**: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Performance_Booster_Elite\" target=\"_blank\">Performance Booster Elite</a> package.\n",
      "section": "Account Settings"
    },
    {
      "name": "crmId",
      "label": "Crm Id",
      "type": "string",
      "required": false,
      "description": "CRM account ID for the account, up to 100 characters.\n",
      "section": "Account Settings"
    },
    {
      "name": "customerServiceRepName",
      "label": "Customer Service Rep Name",
      "type": "string",
      "required": false,
      "description": "Name of the account's customer service representative, if applicable.\n",
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Account name, up to 255 characters.\n",
      "section": "Account Settings"
    },
    {
      "name": "parentId",
      "label": "Parent Id",
      "type": "string",
      "required": false,
      "description": "Identifier of the parent customer account for this Account object. The length is 32 characters. Use this field if you have <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_Customer_Account_Introduction#Customer_Hierarchy\" target=\"_blank\">Customer Hierarchy</a> enabled.",
      "section": "Account Settings"
    },
    {
      "name": "partnerAccount",
      "label": "Partner Account",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer account is a partner, distributor, or reseller. \n\n\nYou can set this field to `true` if you have business with distributors or resellers, or operating in B2B model to manage numerous subscriptions through concurrent API requests. After this field is set to `true`, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments.\n\n \n**Note**: This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_customer_accounts/AAA_Overview_of_customer_accounts/Reseller_Account\" target=\"_blank\">Reseller Account</a> feature enabled.\n",
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "profileNumber",
      "label": "Profile Number",
      "type": "string",
      "required": false,
      "description": "The number of the communication profile that this account is linked to.\n\nYou can provide either or both of the `communicationProfileId` and `profileNumber` fields.\n\nIf both are provided, the request will fail if they do not refer to the same communication profile.\n\nIf none is provided, the default communication profile will be used for this account.\n",
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
      "description": "A list of additional email addresses to receive email notifications. Use commas to separate email addresses.\n",
      "itemType": "string",
      "section": "Communication Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "description": "The ID of the communication profile that this account is linked to.\n\nYou can provide either or both of the `communicationProfileId` and `profileNumber` fields.\n\nIf both are provided, the request will fail if they do not refer to the same communication profile.\n\nIf none is provided, the default communication profile will be used for this account.\n",
      "section": "Communication Settings"
    },
    {
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "description": "The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.\n\n**Note:**\n  - This field is valid only if the `applyCredit` field is set to `true`.\n  - If no value is specified for this field, the default priority order is used, [\"CreditMemo\", \"UnappliedPayment\"], to apply credit memos first and then apply unapplied payments.\n  - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `[\"CreditMemo\"]`, only credit memos are used to apply to invoices.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "A currency as defined in Billing Settings in the Zuora UI.\n\nFor payment method authorization, if the `paymentMethod` > `currencyCode` field is specified, `currencyCode` is used. Otherwise, this `currency` field is used for payment method authorization. If no currency is specified for the account, the default currency of the account is then used.\n",
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
      "description": "Name of the organization that the account belongs to.  \n\nThis field is only required when you have already turned on Multi-Org feature.    \n",
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
      "description": "The ID or number of the billing document sequence set to assign to the customer account. \n\nThe billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.\n\nIf a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set.\n",
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
      "description": "Date through which to calculate charges if an invoice or a credit memo is generated, as yyyy-mm-dd. Default is current date.\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `211.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n\n**Note:** The credit memo is only available only if you have the Invoice Settlement feature enabled.\n",
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "description": "Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "CustomerType__NS",
      "label": "Customer Type N S",
      "type": "string",
      "required": false,
      "description": "Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
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
      "description": "Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the account's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "description": "Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
      "type": "string",
      "required": false,
      "description": "Value of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the account was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
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
      "description": "Whether to automatically apply credit memos or unapplied payments, or both to an invoice.\n\nIf the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken.\n\n**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "description": "Applies a credit balance to an invoice.\n\nIf the value is `true`, the credit balance is applied to the invoice. If the value is `false`, no action is taken.\n\nPrerequisite: `invoice` must be `true`.\n\nTo view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.\n\n\n**Note:** \n  - If you are using the field `invoiceCollect` rather than the field `invoice`, the `invoiceCollect` value must be `true`.\n  - This field is deprecated if you have the Invoice Settlement feature enabled. \n",
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
      "description": "Whether future payments are to be automatically billed when they are due. \n\n- If this field is set to `true`, you must specify either the `creditCard` field or the `hpmCreditCardPaymentMethodId` field, but not both.\n- If this field is set to `false`, you can specify neither the `creditCard` field nor the `hpmCreditCardPaymentMethodId` field.\n",
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
          "description": "Container for cardholder information.\n",
          "fields": [
            {
              "name": "addressLine1",
              "label": "Address Line1",
              "type": "string",
              "required": true,
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
              "required": true,
              "description": "City, 40 characters or less.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": true,
              "description": "Country; must be a valid country name or abbreviation.\nIt is recommended to provide the city and country information when creating a payment method. The information will be used to process payments. If the information is not provided during payment method creation, the city and country data will be missing during payment processing.\n",
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
              "required": true,
              "description": "State; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>.\n",
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": true,
              "description": "Zip code, 20 characters or less.\n",
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
          "description": "Card number, up to 16 characters. Once created, this field can't be updated or queried, and is only available in masked format (e.g., XXXX-XXXX-XXXX-1234).\n",
          "section": "Account Settings"
        },
        {
          "name": "cardType",
          "label": "Card Type",
          "type": "string",
          "required": true,
          "description": "The type of the credit card.\n\nPossible values  include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).\n",
          "section": "Additional Fields"
        },
        {
          "name": "expirationMonth",
          "label": "Expiration Month",
          "type": "string",
          "required": true,
          "description": "Two-digit expiration month (01-12).\n",
          "section": "Additional Fields"
        },
        {
          "name": "expirationYear",
          "label": "Expiration Year",
          "type": "string",
          "required": true,
          "description": "Four-digit expiration year.\n",
          "section": "Additional Fields"
        },
        {
          "name": "securityCode",
          "label": "Security Code",
          "type": "string",
          "required": false,
          "description": "The CVV or CVV2 security code of the card. To ensure PCI compliance, this value is not stored and cannot be queried.\n",
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
      "description": "Indicates whether to include the applicable billing accounts to gateway routing for controlled adoption. \n",
      "defaultValue": false,
      "section": "Payment Settings"
    },
    {
      "name": "hpmCreditCardPaymentMethodId",
      "label": "Hpm Credit Card Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment method associated with this account. You can use this field to set the default payment method for the account. The payment method ID specified in this field will be set as the default payment method for this account. You can pass the ID of any valid payment method, including a  system-generated payment method ID, into this field.\n\nIf the `autoPay` field is set to `true`, you must provide the credit card payment method ID for either this field or the `creditCard` field, but not both.\n\nFor the Credit Card Reference Transaction payment method, you can specify the payment method ID in this field or use the `paymentMethod` field to create a CC Reference Transaction payment method for an account.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway.\n",
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
          "name": "identityNumber",
          "label": "Identity Number",
          "type": "string",
          "required": false,
          "description": "The identity number used for Bank Transfer.\n",
          "section": "Account Settings"
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
          "name": "accountKey",
          "label": "Account Key",
          "type": "string",
          "required": false,
          "description": "The customer account ID such as `2x92c0f859b0480f0159d3a4a6ee5bb6` or the customer account number such as `A02855638`. \n\nTo create an orphan payment method that is not associated with any customer account, you can skip this field.  As soon as the account information is available, associate the payment method with an account through the [Update a payment method](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentMethod/)  operation.\n",
          "section": "Account Settings"
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
          "name": "currencyCode",
          "label": "Currency Code",
          "type": "string",
          "required": false,
          "description": "The currency used for payment method authorization.\n",
          "section": "Additional Fields"
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
          "name": "creditCardMaskNumber",
          "label": "Credit Card Mask Number",
          "type": "string",
          "required": false,
          "description": "The masked credit card number, such as `*********1112`.\nThis field is specific for the CC Reference Transaction payment method. It is an optional field that you can use to distinguish different CC Reference Transaction payment methods.\nThough there are no special restrictions on the input string, it is highly recommended to specify a card number that is masked.\n",
          "maxLength": 19,
          "section": "Account Settings"
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
          "name": "businessIdentificationCode",
          "label": "Business Identification Code",
          "type": "string",
          "required": false,
          "description": "The BIC code used for SEPA.\n",
          "section": "Additional Fields"
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
          "name": "email",
          "label": "Email",
          "type": "email",
          "required": false,
          "description": "Email address associated with the payment method. This field is specific for setting up Apple Pay on Adyen v2.0. This field will be passed to Adyen as `shopperEmail`.\n",
          "section": "Communication Settings"
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
        },
        {
          "name": "amazonPayToken",
          "label": "Amazon Pay Token",
          "type": "string",
          "required": false,
          "description": "This field is specific for setting up Amazon Pay gateway integrations to specify the stringified Amazon Pay token.\n",
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
      "description": "Payment terms for this account. Possible values are: `Due Upon Receipt`, `Net 30`, `Net 60`, `Net 90`.\n\n**Note**: If you want to specify a payment term when creating a new account, you must set a value in this field. If you do not set a value in this field, Zuora will use the default value set in **Billing Settings** > **Payment Terms** from Zuora UI.\n",
      "section": "Payment Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "description": "The account's bill cycle day (BCD), when bill runs generate invoices for the account.  Specify any day of the month (1-31, where 31 = end-of-month), or 0 for auto-set.\n\nRequired if no subscription will be created. \n\nOptional if a subscription is created and defaults to the day-of-the-month of the subscription's `contractEffectiveDate`.\n",
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
          "description": "First address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.\n",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact\n",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.\n",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>. If using Zuora Tax, be aware that Zuora tax requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.\n",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.\n",
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
      "section": "Invoice & Document Settings"
    },
    {
      "name": "creditMemoTemplateId",
      "label": "Credit Memo Template Id",
      "type": "string",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nThe unique ID of the credit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08a6246fdf101626b1b3fe0144b.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "debitMemoTemplateId",
      "label": "Debit Memo Template Id",
      "type": "string",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nThe unique ID of the debit memo template, configured in **Billing Settings** > **Manage Billing Document Configuration** through the Zuora UI. For example, 2c92c08d62470a8501626b19d24f19e2.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.\n\n- If this field is specified, the specified date is used as the billing document date. \n- If this field is not specified, the date specified in the `targetDate` is used as the billing document date.\n",
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
          "description": "The high-level category of the business.\n",
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
          "description": "The full official name that the Buyer is registered with the relevant legal authority.\n",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "businessNumber",
          "label": "Business Number",
          "type": "string",
          "required": false,
          "description": "The unique identifier number of the legal entity or person that you do business with.\n\nFor example, you must use a GSTIN for India.\n",
          "section": "Account Settings"
        },
        {
          "name": "businessNumberSchemeId",
          "label": "Business Number Scheme Id",
          "type": "string",
          "required": false,
          "description": "The identification scheme identifier that an official registrar issues to identify the Buyer as a legal entity or person.\n",
          "section": "Account Settings"
        },
        {
          "name": "enabled",
          "label": "Enabled",
          "type": "boolean",
          "required": false,
          "description": "Whether to enable the e-invoicing profile for the customer account.\n\nIf the following conditions are met, all billing documents for one account can be submitted to an e-invoicing service provider to be generated in electronic format:\n- The account must be configured to generate e-invoice files for billing documents.\n- The billing document must be in Posted status.\n- A business region must be created for the billing country contact, and be linked to an e-invoicing service provider.\n",
          "section": "Additional Fields"
        },
        {
          "name": "endpointId",
          "label": "Endpoint Id",
          "type": "string",
          "required": false,
          "description": "The Buyer's electronic address, to which the application-level response to the billing document might be delivered.\n",
          "section": "Additional Fields"
        },
        {
          "name": "endpointSchemeId",
          "label": "Endpoint Scheme Id",
          "type": "string",
          "required": false,
          "description": "The identification scheme identifier of the Buyer’s electronic address.\n",
          "section": "Additional Fields"
        },
        {
          "name": "taxRegisterNumber",
          "label": "Tax Register Number",
          "type": "string",
          "required": false,
          "description": "The Buyer's VAT identifier (also known as the Buyer's VAT identification number) or the local identification (defined by the Buyer’s address) of the Buyer for tax purposes, or a reference that enables the Buyer to state the registered tax status.\n",
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
      "description": "Whether the customer wants to receive invoices through email. \n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsPrint",
      "label": "Invoice Delivery Prefs Print",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer wants to receive printed invoices, such as through postal mail.\n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "description": "Invoice template ID or template number, configured in Billing Settings in the Zuora UI.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "description": "Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/B_Credit_and_Debit_Memos/Rules_for_generating_invoices_and_credit_memos). \n\n\nThe billing documents generated\nin this operation is only for this subscription, not for the entire\ncustomer account.\n\n\nPossible values:\n\n- `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.\n\n\n- `false`: No invoice is created.\n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
      "defaultValue": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "shipToSameAsBillTo",
      "label": "Ship To Same As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Whether the ship-to contact and bill-to contact are the same entity.\n\nThe created account has the same bill-to contact and ship-to contact entity only when all the following conditions are met in the request body:\n\n- This field is set to `true`. \n\n- A bill-to contact is specified.\n\n- No ship-to contact is specified.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToSameAsBillTo",
      "label": "Sold To Same As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Whether the sold-to contact and bill-to contact are the same entity. \n\nThe created account has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body:\n\n- This field is set to `true`. \n- A bill-to contact is specified.\n- No sold-to contact is specified.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "summaryStatementTemplateId",
      "label": "Summary Statement Template Id",
      "type": "string",
      "required": false,
      "description": "The summary statement template ID or number. When a user attempts to generate a summary statement from the \"Account Summary Statement\" screen, the system utilizes this template to produce the PDF.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "description": "Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.\n\nIf the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken.\n\nPrerequisite: The `invoice` or `runBilling` field must be `true`. \n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
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
          "description": "If `true`, auto-renew is enabled. Default is `false`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "description": "Effective contract date for this subscription, as `yyyy-mm-dd`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date on which the services or products within a subscription have been accepted by the customer, as `yyyy-mm-dd`.\n\nDefault value is dependent on the value of other fields. See Notes section for more details.\n",
          "section": "Additional Fields"
        },
        {
          "name": "initialTerm",
          "label": "Initial Term",
          "type": "number",
          "required": false,
          "description": "Duration of the initial subscription term in whole months.  Default is 0. \n",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceOwnerAccountKey",
          "label": "Invoice Owner Account Key",
          "type": "string",
          "required": false,
          "description": "Invoice owner account number or ID.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com). \n",
          "section": "Account Settings"
        },
        {
          "name": "invoiceSeparately",
          "label": "Invoice Separately",
          "type": "boolean",
          "required": false,
          "description": "Separates a single subscription from other subscriptions and invoices the charge independently. \n\nIf the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.\nThe default value is `false`.\n\nPrerequisite: The default subscription setting `Enable Subscriptions to be Invoiced Separately` must be set to `Yes`.\n",
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
          "description": "Duration of the renewal term in whole months. Default is 0.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date on which the services or products within a subscription have been activated and access has been provided to the customer, as `yyyy-mm-dd`.\n\nDefault value is dependent on the value of other fields. See Notes section for more details.\n",
          "section": "Tax Settings"
        },
        {
          "name": "subscribeToRatePlans",
          "label": "Subscribe To Rate Plans",
          "type": "array",
          "required": false,
          "description": "Container for one or more rate plans for this subscription.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "chargeOverrides",
              "label": "Charge Overrides",
              "type": "array",
              "required": false,
              "description": "This optional container is used to override the quantity of one or more product rate plan charges for this subscription.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "amendedByOrderOn",
                  "label": "Amended By Order On",
                  "type": "string",
                  "required": false,
                  "description": "The date when the rate plan charge is amended through an order or amendment. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "applyDiscountTo",
                  "label": "Apply Discount To",
                  "type": "string",
                  "required": false,
                  "description": "Specifies the type of charges that you want a specific discount to apply to.\n\nValues:\n\n* `ONETIME`\n* `RECURRING`\n* `USAGE`\n* `ONETIMERECURRING`\n* `ONETIMEUSAGE`\n* `RECURRINGUSAGE`\n* `ONETIMERECURRINGUSAGE`\n",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "billCycleDay",
                  "label": "Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed.\n\nValues: `1`-`31`\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billCycleType",
                  "label": "Bill Cycle Type",
                  "type": "string",
                  "required": false,
                  "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field.\n\nValues:\n\n* `DefaultFromCustomer`\n* `SpecificDayofMonth`\n* `SubscriptionStartDay`\n* `ChargeTriggerDay`\n* `SpecificDayofWeek`\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriod",
                  "label": "Billing Period",
                  "type": "string",
                  "required": false,
                  "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).\nValues:\n\n* `Month`\n* `Quarter`\n* `Semi_Annual`\n* `Annual`\n* `Eighteen_Months`\n* `Two_Years`\n* `Three_Years`\n* `Five_Years`\n* `Specific_Months`\n* `Subscription_Term`\n* `Week`\n* `Specific_Weeks`\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriodAlignment",
                  "label": "Billing Period Alignment",
                  "type": "string",
                  "required": false,
                  "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\nValues:\n\n* `AlignToCharge`\n* `AlignToSubscriptionStart`\n* `AlignToTermStart`\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingTiming",
                  "label": "Billing Timing",
                  "type": "string",
                  "required": false,
                  "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage, and discount charges.\n\nValues:\n\n* `IN_ADVANCE` (default)\n* `IN_ARREARS`\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "chargeModelConfiguration",
                  "label": "Charge Model Configuration",
                  "type": "object",
                  "required": false,
                  "description": "Container for charge model configuration data.\n\n**Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                  "fields": [
                    {
                      "name": "customFieldPerUnitRate",
                      "label": "Custom Field Per Unit Rate",
                      "type": "string",
                      "required": false,
                      "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n    \nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFieldTotalAmount",
                      "label": "Custom Field Total Amount",
                      "type": "string",
                      "required": false,
                      "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n    \nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "formula",
                      "label": "Formula",
                      "type": "string",
                      "required": false,
                      "description": "The pricing formula to calculate actual rating amount for each usage record.\n\nThis field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "description",
                  "label": "Description",
                  "type": "string",
                  "required": false,
                  "description": "Description of the charge.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "discountAmount",
                  "label": "Discount Amount",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the amount of fixed-amount discount.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "discountLevel",
                  "label": "Discount Level",
                  "type": "string",
                  "required": false,
                  "description": "Specifies if the discount applies to the product rate plan only, the entire subscription, or to any activity in the account.\n\nValues:\n\n* `rateplan`\n* `subscription`\n* `account`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "discountPercentage",
                  "label": "Discount Percentage",
                  "type": "number",
                  "required": false,
                  "description": "Percentage of discount for a percentage discount. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "endDateCondition",
                  "label": "End Date Condition",
                  "type": "string",
                  "required": false,
                  "description": "Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.\n\nValues:\n\n* `Subscription_End`\n* `Fixed_Period`\n* `Specific_End_Date`\n* `One_Time`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "excludeItemBillingFromRevenueAccounting",
                  "label": "Exclude Item Billing From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.\n",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "excludeItemBookingFromRevenueAccounting",
                  "label": "Exclude Item Booking From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "description": "The flag to exclude rate plan charges from revenue accounting.\n\n**Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.\n",
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "includedUnits",
                  "label": "Included Units",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "isAllocationEligible",
                  "label": "Is Allocation Eligible",
                  "type": "boolean",
                  "required": false,
                  "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "isUnbilled",
                  "label": "Is Unbilled",
                  "type": "boolean",
                  "required": false,
                  "description": "This field is used to dictate how to perform the accounting during\nrevenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "listPriceBase",
                  "label": "List Price Base",
                  "type": "string",
                  "required": false,
                  "description": "The list price base for the product rate plan charge.\n\nValues:\n\n* `Per_Billing_Period`\n* `Per_Month`\n* `Per_Week`\n* `Per_Year`\n* `Per_Specific_Months`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "number",
                  "label": "Number",
                  "type": "string",
                  "required": false,
                  "description": "Unique number that identifies the charge. Max 50 characters. System-generated if not provided.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "numberOfPeriods",
                  "label": "Number Of Periods",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "originalOrderDate",
                  "label": "Original Order Date",
                  "type": "date",
                  "required": false,
                  "description": "The date when the rate plan charge is created through an order or amendment. This field is not updatable.\n\nThis field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "overagePrice",
                  "label": "Overage Price",
                  "type": "number",
                  "required": false,
                  "description": "Price for units over the allowed amount.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "overageUnusedUnitsCreditOption",
                  "label": "Overage Unused Units Credit Option",
                  "type": "string",
                  "required": false,
                  "description": "Determines whether to credit the customer with unused units of usage.\n\nValues:\n\n* `NoCredit`\n* `CreditBySpecificRate`\n",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "price",
                  "label": "Price",
                  "type": "number",
                  "required": false,
                  "description": "Price for units in the subscription rate plan.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceChangeOption",
                  "label": "Price Change Option",
                  "type": "string",
                  "required": false,
                  "description": "Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field.\nValues:\n\n* `NoChange` (default)\n* `SpecificPercentageValue`\n* `UseLatestProductCatalogPricing`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceIncreasePercentage",
                  "label": "Price Increase Percentage",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`. \n\nValue must be a decimal between `-100` and `100`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeId",
                  "label": "Product Rate Plan Charge Id",
                  "type": "string",
                  "required": true,
                  "description": "ID of a product rate-plan charge for this subscription.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeNumber",
                  "label": "Product Rate Plan Charge Number",
                  "type": "string",
                  "required": false,
                  "description": "Number of a product rate-plan charge for this subscription.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "quantity",
                  "label": "Quantity",
                  "type": "number",
                  "required": false,
                  "description": "Number of units. Must be a decimal >=`0`. \n\nWhen using `chargeOverrides` for creating subscriptions with recurring charge types, the `quantity` field must be populated when the charge model is \"Tiered Pricing\" or \"Volume Pricing\". It is not required for \"Flat Fee Pricing\" charge model.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "ratingGroup",
                  "label": "Rating Group",
                  "type": "string",
                  "required": false,
                  "description": "Specifies a rating group based on which usage records are rated.\n\nPossible values:\n\n- `ByBillingPeriod` (default): The rating is based on all the usages in a billing period.\n- `ByUsageStartDate`: The rating is based on all the usages on the same usage start date. \n- `ByUsageRecord`: The rating is based on each usage record.\n- `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).\n- `ByGroupId`: The rating is based on all the usages in a custom group.\n\n**Note:** \n- The `ByBillingPeriod` value can be applied for all charge models. \n- The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models. \n- The `ByGroupId` value is only available if you have the Active Rating feature enabled.\n- Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificBillingPeriod",
                  "label": "Specific Billing Period",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "specificEndDate",
                  "label": "Specific End Date",
                  "type": "date",
                  "required": false,
                  "description": "Defines when the charge ends after the charge trigger date.\n\n**Note**:\n\n* This field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`.\n\n* If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "specificListPriceBase",
                  "label": "Specific List Price Base",
                  "type": "number",
                  "required": false,
                  "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "tiers",
                  "label": "Tiers",
                  "type": "array",
                  "required": false,
                  "description": "Container for Volume, Tiered, or Tiered with Overage charge models. Supports the following charge types:\n\n* One-time\n* Recurring\n* Usage-based\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "endingUnit",
                      "label": "Ending Unit",
                      "type": "number",
                      "required": false,
                      "description": "End number of a range of units for the tier.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "price",
                      "label": "Price",
                      "type": "number",
                      "required": true,
                      "description": "Price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "priceFormat",
                      "label": "Price Format",
                      "type": "string",
                      "required": false,
                      "description": "Indicates if pricing is a flat fee or is per unit.\n\nValues:\n\n* `FlatFee`\n* `PerUnit`\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startingUnit",
                      "label": "Starting Unit",
                      "type": "number",
                      "required": false,
                      "description": "Starting number of a range of units for the tier.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "tier",
                      "label": "Tier",
                      "type": "number",
                      "required": true,
                      "description": "Unique number that identifies the tier that the price applies to.\n",
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
                  "description": "Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to `USD`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "triggerEvent",
                  "label": "Trigger Event",
                  "type": "string",
                  "required": false,
                  "description": "Specifies when to start billing the customer for the charge.\n\nValues:\n\n* `UCE`\n* `USA`\n* `UCA`\n* `USD`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "unusedUnitsCreditRates",
                  "label": "Unused Units Credit Rates",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.\n",
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "upToPeriods",
                  "label": "Up To Periods",
                  "type": "number",
                  "required": false,
                  "description": "Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.\n\n**Note:** You must use this field together with the `upToPeriodsType` field to specify the time period.\n\n* This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n* If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "upToPeriodsType",
                  "label": "Up To Periods Type",
                  "type": "string",
                  "required": false,
                  "description": "\nThe period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
                  "section": "Additional Fields"
                },
                {
                  "name": "weeklyBillCycleDay",
                  "label": "Weekly Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "description": "Specifies which day of the week is the bill cycle day (BCD) for the charge. \n\nValues:\n\n* `Sunday`\n* `Monday`\n* `Tuesday`\n* `Wednesday`\n* `Thursday`\n* `Friday`\n* `Saturday`\n",
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
              "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan.\n\n**Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
              "section": "Additional Fields"
            },
            {
              "name": "externalIdSourceSystem",
              "label": "External Id Source System",
              "type": "string",
              "required": false,
              "description": "The ID of the external source system. You can use this field and `externalCatalogPlanId` to specify a product rate plan that is imported from an external system.\n\n**Note:** If both `externalCatalogPlanId`, `externalIdSourceSystem` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
              "section": "Additional Fields"
            },
            {
              "name": "externallyManagedPlanId",
              "label": "Externally Managed Plan Id",
              "type": "string",
              "required": false,
              "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanId",
              "label": "Product Rate Plan Id",
              "type": "string",
              "required": false,
              "description": "ID of a product rate plan for this subscription.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanNumber",
              "label": "Product Rate Plan Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate plan for this subscription.\n",
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
          "description": "Subscription Number. The value can be up to 1000 characters.\n\nIf you do not specify a subscription number when creating a subscription for the new account, Zuora will generate a subscription number automatically.\n\nIf the account is created successfully, the subscription number is returned in the `subscriptionNumber` response field.\n",
          "section": "Account Settings"
        },
        {
          "name": "termStartDate",
          "label": "Term Start Date",
          "type": "date",
          "required": false,
          "description": "The date on which the subscription term begins, as `yyyy-mm-dd`. If this is a renewal subscription, this date is different from the subscription start date.\n",
          "section": "Additional Fields"
        },
        {
          "name": "termType",
          "label": "Term Type",
          "type": "string",
          "required": true,
          "description": "Possible values are: `TERMED`, `EVERGREEN`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "CpqBundleJsonId__QT",
          "label": "Cpq Bundle Json Id Q T",
          "type": "string",
          "required": false,
          "description": "The Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field.\n",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityCloseDate__QT",
          "label": "Opportunity Close Date Q T",
          "type": "date",
          "required": false,
          "description": "The closing date of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityName__QT",
          "label": "Opportunity Name Q T",
          "type": "string",
          "required": false,
          "description": "The unique identifier of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "QuoteBusinessType__QT",
          "label": "Quote Business Type Q T",
          "type": "string",
          "required": false,
          "description": "The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "QuoteNumber__QT",
          "label": "Quote Number Q T",
          "type": "string",
          "required": false,
          "description": "The unique identifier of the Quote. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
          "maxLength": 32,
          "section": "Account Settings"
        },
        {
          "name": "QuoteType__QT",
          "label": "Quote Type Q T",
          "type": "string",
          "required": false,
          "description": "The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationId__NS",
          "label": "Integration Id N S",
          "type": "string",
          "required": false,
          "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "IntegrationStatus__NS",
          "label": "Integration Status N S",
          "type": "string",
          "required": false,
          "description": "Status of the subscription's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "Project__NS",
          "label": "Project N S",
          "type": "string",
          "required": false,
          "description": "The NetSuite project that the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SalesOrder__NS",
          "label": "Sales Order N S",
          "type": "string",
          "required": false,
          "description": "The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "description": "Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
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
          "description": "First address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation.\n",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact\n",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.\n",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "100 characters or less.\nIf using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.\n",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.\n",
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
          "description": "First address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "description": "Second address line, 255 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "description": "City\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the sold-to contact to calculate tax. A bill-to contact may be used if no sold-to contact is provided.\n",
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "description": "May optionally be used by Zuora Tax to calculate county tax.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "description": "Fax phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": true,
          "description": "First name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "description": "Home phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": true,
          "description": "Last name, 100 characters or less.\n",
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "description": "Mobile phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "description": "Nickname for this contact\n",
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "description": "Other phone number, 40 characters or less.\n",
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "description": "Personal email address.\n",
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "State; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>. If using Zuora Tax, be aware that Zuora Tax requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.\n",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "description": "Work email address, 80 characters or less.\n",
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "description": "Work phone number, 40 characters or less.\n",
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
      "section": "Contact Information"
    },
    {
      "name": "taxInfo",
      "label": "Tax Info",
      "type": "object",
      "required": false,
      "description": "Container for tax exempt information, used to establish the tax exempt status of a customer account.\n",
      "fields": [
        {
          "name": "VATId",
          "label": "V A T Id",
          "type": "string",
          "required": false,
          "description": "EU Value Added Tax ID. \n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).\n",
          "section": "Tax Settings"
        },
        {
          "name": "companyCode",
          "label": "Company Code",
          "type": "string",
          "required": false,
          "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara.\n\n**Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com). \n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateId",
          "label": "Exempt Certificate Id",
          "type": "string",
          "required": false,
          "description": "ID of the customer tax exemption certificate. Requires Zuora Tax.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateType",
          "label": "Exempt Certificate Type",
          "type": "string",
          "required": false,
          "description": "Type of tax exemption certificate that the customer holds. Requires Zuora Tax.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptDescription",
          "label": "Exempt Description",
          "type": "string",
          "required": false,
          "description": "Description of the tax exemption certificate that the customer holds. Requires Zuora Tax.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptEffectiveDate",
          "label": "Exempt Effective Date",
          "type": "date",
          "required": false,
          "description": "Date when the customer tax exemption starts. Requires Zuora Tax.\n\nFormat: `yyyy-mm-dd`. Defaults to the current date.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptEntityUseCode",
          "label": "Exempt Entity Use Code",
          "type": "string",
          "required": false,
          "description": "A unique entity use code to apply exemptions in Avalara AvaTax.\n\nThis account-level field is required only when you choose Avalara as your tax engine. See [Exempt Transactions](https://developer.avalara.com/avatax/handling-tax-exempt-customers/)for more details.\n",
          "maxLength": 64,
          "section": "Additional Fields"
        },
        {
          "name": "exemptExpirationDate",
          "label": "Exempt Expiration Date",
          "type": "date",
          "required": false,
          "description": "Date when the customer tax exemption expires. Requires Zuora Tax.\n\nFormat: `yyyy-mm-dd`. Defaults to the current date.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptIssuingJurisdiction",
          "label": "Exempt Issuing Jurisdiction",
          "type": "string",
          "required": false,
          "description": "Jurisdiction in which the customer tax exemption certificate was issued.\n",
          "section": "Additional Fields"
        },
        {
          "name": "exemptStatus",
          "label": "Exempt Status",
          "type": "string",
          "required": false,
          "description": "Status of the account tax exemption. Requires Zuora Tax.\n\nRequired if you use Zuora Tax. This field is unavailable if Zuora Tax is not used.\n\nValues: `Yes`, `No`(default), `pendingVerification`. Note that the value will be set to `No` if no input.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
