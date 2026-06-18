import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_signupEndpoint: ApiEndpoint = {
  "id": "post-signup",
  "name": "Sign up",
  "description": "This call performs many actions. You can use this operation to implement",
  "method": "POST",
  "path": "/v1/sign-up",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountData",
      "label": "Account Data",
      "type": "object",
      "required": false,
      "description": "The information of the account that you are to create through the \"Sign up\" operation.",
      "fields": [
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "maxLength": 70,
          "section": "Account Settings"
        },
        {
          "name": "autoPay",
          "label": "Auto Pay",
          "type": "boolean",
          "required": false,
          "description": "Specifies whether future payments are to be automatically billed when they are due. Possible values are `true`, `false`.",
          "section": "Payment Settings"
        },
        {
          "name": "batch",
          "label": "Batch",
          "type": "string",
          "required": false,
          "description": "**Note**: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package.",
          "section": "Account Settings"
        },
        {
          "name": "billCycleDay",
          "label": "Bill Cycle Day",
          "type": "number",
          "required": true,
          "description": "Day of the month that the account prefers billing periods to begin on. If set to 0, the bill cycle day will be set as \"AutoSet\".",
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
              "description": "First line of the contact's address. This is often a street address or a business name.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "description": "A description for the contact.",
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using [Zuora Tax](https://knowledgecenter.zuora.com/Zuora_Billing/Taxes/A_Zuora_Tax), you must specify a country in the bill-to contact to calculate tax.",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.",
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Specifies the type of phone number in the `otherPhone` field.",
              "enum": [
                "Work",
                "Mobile",
                "Home",
                "Other"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "description": "ZIP code or other postal code of the contact's address.",
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State or province of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.",
              "maxLength": 100,
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "email",
              "required": false,
              "description": "Business email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Business phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "communicationProfileId",
          "label": "Communication Profile Id",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
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
          "name": "crmId",
          "label": "Crm Id",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "3 uppercase character currency code. **Note**: Specify this field only for a new account to be created; do not specify this field to update an existing account. For payment method authorization, if the `paymentMethod` > `currencyCode` field is specified, `currencyCode` is used. Otherwise, this `currency` field is used for payment method authorization. If no currency is specified for the account, the default currency of the account is then used.",
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields.",
          "section": "Additional Fields"
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
          "name": "invoiceTemplateId",
          "label": "Invoice Template Id",
          "type": "string",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "maxLength": 65535,
          "section": "Additional Fields"
        },
        {
          "name": "organizationLabel",
          "label": "Organization Label",
          "type": "string",
          "required": false,
          "description": "The organization that this object belongs to. Note: This field is available only when the Multi-Org feature is enabled.",
          "section": "Additional Fields"
        },
        {
          "name": "paymentMethod",
          "label": "Payment Method",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "description": "Type of payment method. The following types of the payment method are supported:",
              "enum": [
                "PayPalEC",
                "PayPalNativeEC",
                "PayPalAdaptive",
                "CreditCard",
                "CreditCardReferenceTransaction"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "secondTokenId",
              "label": "Second Token Id",
              "type": "string",
              "required": false,
              "description": "The second token id of CreditCardReferenceTransaction.",
              "section": "Additional Fields"
            },
            {
              "name": "tokenId",
              "label": "Token Id",
              "type": "string",
              "required": false,
              "description": "The token id of payment method, required field of CreditCardReferenceTransaction type.",
              "section": "Additional Fields"
            },
            {
              "name": "BAID",
              "label": "B A I D",
              "type": "string",
              "required": false,
              "description": "ID of a PayPal billing agreement, for example, I-1TJ3GAGG82Y9.",
              "section": "Additional Fields"
            },
            {
              "name": "email",
              "label": "Email",
              "type": "string",
              "required": false,
              "description": "Email address associated with the payment method. This field is only supported for PayPal payment methods and is required if you want to create any of the following PayPal payment methods: - PayPal Express Checkout payment method - PayPal Adaptive payment method - PayPal Commerce Platform payment method",
              "section": "Communication Settings"
            },
            {
              "name": "preapprovalKey",
              "label": "Preapproval Key",
              "type": "string",
              "required": false,
              "description": "The PayPal preapproval key.",
              "section": "Additional Fields"
            },
            {
              "name": "cardHolderInfo",
              "label": "Card Holder Info",
              "type": "object",
              "required": false,
              "description": "Container for cardholder information. If provided, Zuora will only use this information for this card. Otherwise, Zuora will use the account''s existing bill-to contact information for this card.",
              "fields": [
                {
                  "name": "addressLine1",
                  "label": "Address Line1",
                  "type": "string",
                  "required": false,
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
                  "required": false,
                  "description": "City, 40 characters or less.",
                  "section": "Additional Fields"
                },
                {
                  "name": "country",
                  "label": "Country",
                  "type": "string",
                  "required": false,
                  "description": "Country, must be a valid country name or abbreviation.",
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
                  "required": false,
                  "description": "State; must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region.",
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
              "section": "Additional Fields"
            },
            {
              "name": "cardNumber",
              "label": "Card Number",
              "type": "string",
              "required": false,
              "description": "Credit card number.",
              "section": "Account Settings"
            },
            {
              "name": "cardType",
              "label": "Card Type",
              "type": "string",
              "required": false,
              "description": "The type of the credit card. Possible values include `Visa`, `MasterCard`, `AmericanExpress`, `Discover`, `JCB`, and `Diners`. For more information about credit card types supported by different payment gateways, see [Supported Payment Gateways](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways).",
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
              "type": "string",
              "required": false,
              "description": "One or two digit expiration month (1-12) of the credit card.",
              "section": "Additional Fields"
            },
            {
              "name": "expirationYear",
              "label": "Expiration Year",
              "type": "string",
              "required": false,
              "description": "Four-digit expiration year of the credit card.",
              "section": "Additional Fields"
            },
            {
              "name": "mitConsentAgreementRef",
              "label": "Mit Consent Agreement Ref",
              "type": "string",
              "required": false,
              "description": "Specifies your reference for the stored credential consent agreement that you have established with the customer. Only applicable if you set the `mitProfileAction` field.",
              "maxLength": 128,
              "section": "Additional Fields"
            },
            {
              "name": "mitConsentAgreementSrc",
              "label": "Mit Consent Agreement Src",
              "type": "string",
              "required": false,
              "description": "Required if you set the `mitProfileAction` field. Specifies how the consent agreement has been established with the customer. The allowed value is `External`. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `External` set to this field.",
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
              "description": "Specifies the ID of a network transaction. Only applicable if you set the `mitProfileAction` field to `Persist`.",
              "maxLength": 128,
              "section": "Additional Fields"
            },
            {
              "name": "mitProfileAction",
              "label": "Mit Profile Action",
              "type": "string",
              "required": false,
              "description": "Specifies how Zuora creates and activates the stored credential profile. If you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Activate` set to this field.",
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
              "description": "The date on which the profile is agreed. The date format is `yyyy-mm-dd`.",
              "section": "Communication Settings"
            },
            {
              "name": "mitProfileType",
              "label": "Mit Profile Type",
              "type": "string",
              "required": false,
              "description": "Required if you set the `mitProfileAction` field. If you do not specify the `mitProfileAction` field, Zuora will automatically create a stored credential profile for the payment method, with the default value `Recurring` set to this field.",
              "enum": [
                "Recurring"
              ],
              "section": "Communication Settings"
            },
            {
              "name": "securityCode",
              "label": "Security Code",
              "type": "string",
              "required": false,
              "description": "CVV or CVV2 security code of the credit card. To ensure PCI compliance, this value is not stored and cannot be queried.",
              "section": "Additional Fields"
            },
            {
              "name": "accountKey",
              "label": "Account Key",
              "type": "string",
              "required": false,
              "description": "Internal ID of the customer account that will own the payment method.",
              "section": "Account Settings"
            },
            {
              "name": "authGateway",
              "label": "Auth Gateway",
              "type": "string",
              "required": false,
              "description": "Internal ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method. If you do not set this field, Zuora will use one of the following payment gateways instead: * The default payment gateway of the customer account that owns the payment method, if the `accountKey` field is set. * The default payment gateway of your Zuora tenant, if the `accountKey` field is not set.",
              "section": "Payment Settings"
            },
            {
              "name": "ipAddress",
              "label": "Ip Address",
              "type": "string",
              "required": false,
              "description": "The IPv4 or IPv6 information of the user when the payment method is created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, Zuora directly passes it to gateways. If the IP address length is beyond 45 characters, a validation error occurs.",
              "section": "Additional Fields"
            },
            {
              "name": "makeDefault",
              "label": "Make Default",
              "type": "boolean",
              "required": false,
              "description": "Specifies whether the payment method will be the default payment method of the customer account that owns the payment method. Only applicable if the `accountKey` field is set.",
              "defaultValue": false,
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
          "section": "Payment Settings"
        },
        {
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "description": "The number of the purchase order associated with this account. Purchase order information generally comes from customers.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "sequenceSetId",
          "label": "Sequence Set Id",
          "type": "string",
          "required": false,
          "description": "The ID of the billing document sequence set to assign to the customer account. The billing documents to generate for this account will adopt the prefix and starting document number configured in the sequence set.",
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
              "description": "First line of the contact's address. This is often a street address or a business name.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "description": "A description for the contact.",
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using [Zuora Tax](https://knowledgecenter.zuora.com/Zuora_Billing/Taxes/A_Zuora_Tax), you must specify a country in the bill-to contact to calculate tax.",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.",
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Specifies the type of phone number in the `otherPhone` field.",
              "enum": [
                "Work",
                "Mobile",
                "Home",
                "Other"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "description": "ZIP code or other postal code of the contact's address.",
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State or province of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.",
              "maxLength": 100,
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "email",
              "required": false,
              "description": "Business email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Business phone number of the contact.",
              "maxLength": 40,
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
              "description": "First line of the contact's address. This is often a street address or a business name.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "description": "A description for the contact.",
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using [Zuora Tax](https://knowledgecenter.zuora.com/Zuora_Billing/Taxes/A_Zuora_Tax), you must specify a country in the bill-to contact to calculate tax.",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.",
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number of the contact.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname of the contact.",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Specifies the type of phone number in the `otherPhone` field.",
              "enum": [
                "Work",
                "Mobile",
                "Home",
                "Other"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "description": "ZIP code or other postal code of the contact's address.",
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State or province of the contact's address.",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.",
              "maxLength": 100,
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "email",
              "required": false,
              "description": "Business email address of the contact.",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Business phone number of the contact.",
              "maxLength": 40,
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
          "description": "Information about the tax exempt status of a customer account.",
          "fields": [
            {
              "name": "VATId",
              "label": "V A T Id",
              "type": "string",
              "required": false,
              "description": "EU Value Added Tax ID. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
              "maxLength": 25,
              "section": "Tax Settings"
            },
            {
              "name": "companyCode",
              "label": "Company Code",
              "type": "string",
              "required": false,
              "description": "Unique code that identifies a company account in Avalara. Use this field to calculate taxes based on origin and sold-to addresses in Avalara. **Note:** This feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](https://support.zuora.com).",
              "maxLength": 50,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateId",
              "label": "Exempt Certificate Id",
              "type": "string",
              "required": false,
              "description": "ID of the customer tax exemption certificate. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateType",
              "label": "Exempt Certificate Type",
              "type": "string",
              "required": false,
              "description": "Type of tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptDescription",
              "label": "Exempt Description",
              "type": "string",
              "required": false,
              "description": "Description of the tax exemption certificate that the customer holds. Applicable if you use Zuora Tax or Connect tax engines.",
              "maxLength": 500,
              "section": "Additional Fields"
            },
            {
              "name": "exemptEffectiveDate",
              "label": "Exempt Effective Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption starts, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
              "section": "Additional Fields"
            },
            {
              "name": "exemptExpirationDate",
              "label": "Exempt Expiration Date",
              "type": "date",
              "required": false,
              "description": "Date when the customer tax exemption expires, in YYYY-MM-DD format. Applicable if you use Zuora Tax or Connect tax engines.",
              "section": "Additional Fields"
            },
            {
              "name": "exemptIssuingJurisdiction",
              "label": "Exempt Issuing Jurisdiction",
              "type": "string",
              "required": false,
              "description": "Jurisdiction in which the customer tax exemption certificate was issued.",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptStatus",
              "label": "Exempt Status",
              "type": "string",
              "required": false,
              "description": "Status of the account tax exemption. Applicable if you use Zuora Tax or Connect tax engines. Required if you use Zuora Tax.",
              "defaultValue": "No",
              "enum": [
                "No",
                "Yes",
                "PendingVerification"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Tax Settings"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "accountIdentifierField",
      "label": "Account Identifier Field",
      "type": "string",
      "required": false,
      "description": "Specify the name of the field that holds external account id",
      "section": "Account Settings"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields.",
      "section": "Additional Fields"
    },
    {
      "name": "options",
      "label": "Options",
      "type": "object",
      "required": false,
      "description": "Invoice or Payment.",
      "fields": [
        {
          "name": "billingTargetDate",
          "label": "Billing Target Date",
          "type": "date",
          "required": false,
          "description": "Date through which to calculate charges if an invoice is generated. See [What is a Target Date?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/G_Bill_Runs/Creating_Bill_Runs#What_is_a_Target_Date.3F).",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "collectPayment",
          "label": "Collect Payment",
          "type": "boolean",
          "required": false,
          "description": "Indicates if the current request needs to collect payments. This value can not be 'true' when 'runBilling' flag is 'false'.",
          "section": "Payment Settings"
        },
        {
          "name": "maxSubscriptionsPerAccount",
          "label": "Max Subscriptions Per Account",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "runBilling",
          "label": "Run Billing",
          "type": "boolean",
          "required": false,
          "description": "Indicates if the current request needs to generate an invoice. The invoice will be generated against all subscriptions included in this order.",
          "section": "Invoice & Document Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "paymentData",
      "label": "Payment Data",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "authTransactionId",
          "label": "Auth Transaction Id",
          "type": "string",
          "required": false,
          "description": "The authorization transaction ID from the payment gateway.",
          "section": "Additional Fields"
        },
        {
          "name": "authorizedAmount",
          "label": "Authorized Amount",
          "type": "number",
          "required": false,
          "description": "The amount that is authorized before this API call. Only used for the Delay Capture function.",
          "section": "Additional Fields"
        },
        {
          "name": "authorizedCurrency",
          "label": "Authorized Currency",
          "type": "string",
          "required": false,
          "description": "The authorization of currency code that occurs before this API call. We will verify whether it is same as the account's currency.",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "subscriptionData",
      "label": "Subscription Data",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceSeparately",
          "label": "Invoice Separately",
          "type": "boolean",
          "required": false,
          "description": "Specifies whether the subscription appears on a separate invoice when Zuora generates invoices.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "string",
          "required": false,
          "description": "Notes about the subscription. These notes are only visible to Zuora users.",
          "maxLength": 500,
          "section": "Additional Fields"
        },
        {
          "name": "ratePlans",
          "label": "Rate Plans",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanId",
              "label": "Product Rate Plan Id",
              "type": "string",
              "required": false,
              "description": "Internal identifier of the product rate plan that the rate plan is based on.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "description": "Subscription number of the subscription to create, for example, A-S00000001. If you do not set this field, Zuora will generate a subscription number.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "terms",
          "label": "Terms",
          "type": "object",
          "required": false,
          "description": "Container for the terms and renewal settings of the subscription.",
          "fields": [
            {
              "name": "autoRenew",
              "label": "Auto Renew",
              "type": "boolean",
              "required": false,
              "description": "Specifies whether the subscription automatically renews at the end of the each term. Only applicable if the type of the first term is `TERMED`.",
              "section": "Additional Fields"
            },
            {
              "name": "initialTerm",
              "label": "Initial Term",
              "type": "object",
              "required": true,
              "description": "Information about the first term of the subscription.",
              "fields": [
                {
                  "name": "period",
                  "label": "Period",
                  "type": "number",
                  "required": false,
                  "description": "Duration of the first term in months, years, days, or weeks, depending on the value of the `periodType` field. Only applicable if the value of the `termType` field is `TERMED`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "periodType",
                  "label": "Period Type",
                  "type": "string",
                  "required": false,
                  "description": "Unit of time that the first term is measured in. Only applicable if the value of the `termType` field is `TERMED`.",
                  "enum": [
                    "Month",
                    "Year",
                    "Day",
                    "Week"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "startDate",
                  "label": "Start Date",
                  "type": "date",
                  "required": false,
                  "description": "Start date of the first term, in YYYY-MM-DD format.",
                  "section": "Additional Fields"
                },
                {
                  "name": "termType",
                  "label": "Term Type",
                  "type": "string",
                  "required": true,
                  "description": "Type of the first term. If the value of this field is `TERMED`, the first term has a predefined duration based on the value of the `period` field. If the value of this field is `EVERGREEN`, the first term does not have a predefined duration.",
                  "enum": [
                    "TERMED",
                    "EVERGREEN"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewalSetting",
              "label": "Renewal Setting",
              "type": "string",
              "required": false,
              "description": "Specifies the type of the terms that follow the first term if the subscription is renewed. Only applicable if the type of the first term is `TERMED`. * `RENEW_WITH_SPECIFIC_TERM` - Each renewal term has a predefined duration. The first entry in `renewalTerms` specifies the duration of the second term of the subscription, the second entry in `renewalTerms` specifies the duration of the third term of the subscription, and so on. The last entry in `renewalTerms` specifies the ultimate duration of each renewal term. * `RENEW_TO_EVERGREEN` - The second term of the subscription does not have a predefined duration.",
              "enum": [
                "RENEW_WITH_SPECIFIC_TERM",
                "RENEW_TO_EVERGREEN"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewalTerms",
              "label": "Renewal Terms",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "period",
                  "label": "Period",
                  "type": "number",
                  "required": false,
                  "description": "Duration of the renewal term in months, years, days, or weeks, depending on the value of the `periodType` field.",
                  "section": "Additional Fields"
                },
                {
                  "name": "periodType",
                  "label": "Period Type",
                  "type": "string",
                  "required": false,
                  "description": "Unit of time that the renewal term is measured in.",
                  "enum": [
                    "Month",
                    "Year",
                    "Day",
                    "Week"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Subscription Settings"
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
