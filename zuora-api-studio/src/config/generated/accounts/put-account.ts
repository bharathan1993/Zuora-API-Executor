import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_accountEndpoint: ApiEndpoint = {
  "id": "put-account",
  "name": "Update an account",
  "description": "Updates a customer account by specifying the account-key.",
  "method": "PUT",
  "path": "/v1/accounts/{account-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: account-key",
      "placeholder": "Enter account key"
    }
  ],
  "bodyFields": [
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
      "description": "The ID of the communication profile that this account is linked to.\n\nYou can provide either or both of the `communicationProfileId` and `profileNumber` fields.\n\nIf both are provided, the request will fail if they do not refer to the same communication profile.\n",
      "section": "Communication Settings"
    },
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "description": "Whether future payments are to be automatically billed when they are due. \n",
      "section": "Payment Settings"
    },
    {
      "name": "defaultPaymentMethodId",
      "label": "Default Payment Method Id",
      "type": "string",
      "required": false,
      "description": "ID of the default payment method for the account.\n\nValues: a valid ID for an existing payment method.\n",
      "maxLength": 64,
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
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "The name of the payment gateway instance. If null or left unassigned, the Account will use the Default Gateway.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "description": "Payment terms for this account. Possible values are `Due Upon Receipt`, `Net 30`, `Net 60`, `Net 90`.",
      "section": "Payment Settings"
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
      "description": "Name of the account’s customer service representative, if applicable.\n",
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
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
      "description": "Whether the customer account is a partner, distributor, or reseller. \n\n\nYou can set this field to `true` if you have business with distributors or resellers, or operating in B2B model to manage numerous subscriptions through concurrent API requests. After this field is set to `true`, the calculation of account metrics is performed asynchronously during operations such as subscription creation, order changes, invoice generation, and payments.\n\n\n**Note**: This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_customer_accounts/AAA_Overview_of_customer_accounts/Reseller_Account\" target=\"_blank\">Reseller Account</a> feature enabled.\n",
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "profileNumber",
      "label": "Profile Number",
      "type": "string",
      "required": false,
      "description": "The number of the communication profile that this account is linked to.\n\nYou can provide either or both of the `communicationProfileId` and `profileNumber` fields.\n\nIf both are provided, the request will fail if they do not refer to the same communication profile.\n",
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
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines\nwhich day of the month the customer is billed. Values: Any activated system-defined bill cycle day （`1`-`31`）\n",
      "maxLength": 2,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContact",
      "label": "Bill To Contact",
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
          "required": false,
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
          "required": false,
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
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContactId",
      "label": "Bill To Contact Id",
      "type": "string",
      "required": false,
      "description": "The ID of a contact that will be the bill-to contact of the current account. \n",
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
          "description": "Legal Business Name. The full formal name by which the Buyer is registered with the relevant legal authority. ",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "businessNumber",
          "label": "Business Number",
          "type": "string",
          "required": false,
          "description": "Buyer legal registration identifier. An identifier issued by an official registrar that identifies the Buyer as a legal entity or person. GSTIN of buyer for India. ",
          "section": "Account Settings"
        },
        {
          "name": "businessNumberSchemeId",
          "label": "Business Number Scheme Id",
          "type": "string",
          "required": false,
          "description": "Business Number Schema Id. The identification scheme identifier of the Buyer legal registration identifier. ",
          "section": "Account Settings"
        },
        {
          "name": "enabled",
          "label": "Enabled",
          "type": "boolean",
          "required": false,
          "description": "Enable e-invoice for the account. All invoices generated from this account can be submitted to generate e-invoices when invoices meet the conditions: A business region must be created for the billing country contact, and it must be linked to a service provider. The account must be enabled to generate e-invoices. The invoice must be in the \"Posted\" status. ",
          "section": "Additional Fields"
        },
        {
          "name": "endpointId",
          "label": "Endpoint Id",
          "type": "string",
          "required": false,
          "description": "Buyer electronic address.Identifies the Buyer's electronic address to which the invoice is delivered.\n",
          "section": "Additional Fields"
        },
        {
          "name": "endpointSchemeId",
          "label": "Endpoint Scheme Id",
          "type": "string",
          "required": false,
          "description": "Buyer electronic address identification scheme identifier. ",
          "section": "Additional Fields"
        },
        {
          "name": "taxRegisterNumber",
          "label": "Tax Register Number",
          "type": "string",
          "required": false,
          "description": "Buyer VAT identifier. The Buyer's VAT identifier (also known as Buyer VAT identification number).\n",
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
      "description": "Whether the customer wants to receive invoices through email. \n\nThe default value is `false`.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsPrint",
      "label": "Invoice Delivery Prefs Print",
      "type": "boolean",
      "required": false,
      "description": "Whether the customer wants to receive printed invoices, such as through postal mail.\n\nThe default value is `false`.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "description": "Invoice template ID, configured in Billing Settings in the Zuora UI.\n",
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
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "A string of up to 65,535 characters.\n",
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
      "description": "The ID of the billing document sequence set to assign to the customer account. \n\nThe billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.\n\nIf a customer account has no assigned billing document sequence set, billing documents generated for this account adopt the prefix and starting document number from the default sequence set.\n",
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
          "required": false,
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
          "required": false,
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
          "description": "State; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>.\n",
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
      "name": "shipToContactId",
      "label": "Ship To Contact Id",
      "type": "string",
      "required": false,
      "description": "The ID of a contact that will be the ship-to contact of the current account.\n",
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
          "description": "City, 100 characters or less.\n",
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
          "description": "County; 100 characters or less. May optionally be used by Zuora Tax to calculate county tax.\n",
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
          "required": false,
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
          "required": false,
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
          "description": "100 characters or less.\nState; must be a valid subregion (state or province) name or code. For more information, see <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\" target=\"_blank\">View subregions of a specific country or region</a>. If using Zuora Tax, be aware that Zuora Tax  requires a state (in the US) or province (in Canada) in this field for the sold-to contact to calculate tax, and that a bill-to contact may be used if no sold-to contact is provided.\n",
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "description": "100 characters or less.\nIf using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
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
      "name": "soldToContactId",
      "label": "Sold To Contact Id",
      "type": "string",
      "required": false,
      "description": "The ID of a contact that will be the sold-to contact of the current account. \n",
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
