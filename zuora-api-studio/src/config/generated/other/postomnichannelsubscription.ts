import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postomnichannelsubscriptionEndpoint: ApiEndpoint = {
  "id": "postomnichannelsubscription",
  "name": "Create an omnichannel subscription",
  "description": "Creates or updates an omnichannel subscription for a customer account.",
  "method": "POST",
  "path": "/v1/omni-channel-subscriptions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the account associated with this subscription.\n",
      "section": "Account Settings"
    },
    {
      "name": "accountIdentifierField",
      "label": "Account Identifier Field",
      "type": "string",
      "required": false,
      "description": "The account field used to identify the account in acountData. It could be a custom field.",
      "section": "Account Settings"
    },
    {
      "name": "accountData",
      "label": "Account Data",
      "type": "object",
      "required": false,
      "description": "The information of the account that you want to create while creating an omnichannel subscription.\n",
      "fields": [
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "description": "The number of the account.",
          "maxLength": 70,
          "section": "Account Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of the account.",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "Three uppercase character currency code.\n",
          "section": "Additional Fields"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "description": "The note for the account.",
          "maxLength": 65535,
          "section": "Additional Fields"
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
              "description": "First line of the contact's address. This is often a street address or a business name.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "description": "A description for the contact.\n",
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using [Zuora Tax](https://knowledgecenter.zuora.com/Zuora_Billing/Taxes/A_Zuora_Tax), you must specify a country in the bill-to contact to calculate tax.\n",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name of the contact.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number of the contact.\n",
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
              "description": "Mobile phone number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname of the contact.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Specifies the type of phone number in the `otherPhone` field.\n",
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
              "description": "Personal email address of the contact.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "description": "ZIP code or other postal code of the contact's address.\n",
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State or province of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.\n",
              "maxLength": 100,
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "email",
              "required": false,
              "description": "Business email address of the contact.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Business phone number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
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
              "description": "First line of the contact's address. This is often a street address or a business name.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second line of the contact's address.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "description": "A description for the contact.\n",
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using [Zuora Tax](https://knowledgecenter.zuora.com/Zuora_Billing/Taxes/A_Zuora_Tax), you must specify a country in the bill-to contact to calculate tax.\n",
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name of the contact.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number of the contact.\n",
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
              "description": "Mobile phone number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname of the contact.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Additional phone number of the contact. Use the `otherPhoneType` field to specify the type of phone number.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Specifies the type of phone number in the `otherPhone` field.\n",
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
              "description": "Personal email address of the contact.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "description": "ZIP code or other postal code of the contact's address.\n",
              "maxLength": 20,
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State or province of the contact's address.\n",
              "maxLength": 100,
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "Region defined in your taxation rules. Only applicable if you use Zuora Tax.\n",
              "maxLength": 100,
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "email",
              "required": false,
              "description": "Business email address of the contact.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Business phone number of the contact.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "externalSubscriptionId",
      "label": "External Subscription Id",
      "type": "string",
      "required": true,
      "description": "The original transaction ID of the notification. This must be unique in the tenant.\n",
      "section": "Subscription Settings"
    },
    {
      "name": "externalTransactionReason",
      "label": "External Transaction Reason",
      "type": "string",
      "required": false,
      "description": "The latest transaction reason.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalSourceSystem",
      "label": "External Source System",
      "type": "string",
      "required": false,
      "description": "The source app store from which the channel subscription originated. For example, Apple, Google, Roku, Amazon.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalState",
      "label": "External State",
      "type": "string",
      "required": false,
      "description": "The original status from client, such as active, canceled, expired, pastDue.\n",
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "description": "The common external subscription state.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalProductId",
      "label": "External Product Id",
      "type": "string",
      "required": false,
      "description": "The product ID in the external system.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalReplaceByProductId",
      "label": "External Replace By Product Id",
      "type": "string",
      "required": false,
      "description": "The product ID is going to replace the existing product ID in the `externalProductId` field during the subscription renewal.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalInAppOwnershipType",
      "label": "External In App Ownership Type",
      "type": "string",
      "required": false,
      "description": "Such as purchased, family_shared.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalQuantity",
      "label": "External Quantity",
      "type": "number",
      "required": false,
      "description": "The quantity of the product, must be greather than 0. \n",
      "defaultValue": 1,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "The currency code of the transaction. If not specified, get value from the Account.\n",
      "section": "Additional Fields"
    },
    {
      "name": "autoRenew",
      "label": "Auto Renew",
      "type": "boolean",
      "required": false,
      "description": "If `true`, the subscription automatically renews at the end of the\nterm.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalPurchaseDate",
      "label": "External Purchase Date",
      "type": "string",
      "required": false,
      "description": "When the App Store charged the user’s account for a purchase, restored product, subscription, \nor subscription renewal after a lapse. UTC time, `yyyy-mm-dd hh:mm:ss`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalExpirationDate",
      "label": "External Expiration Date",
      "type": "string",
      "required": false,
      "description": "This expiration date is a static value that applies for each transaction.\nUTC time, `yyyy-mm-dd hh:mm:ss`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalApplicationId",
      "label": "External Application Id",
      "type": "string",
      "required": false,
      "description": "The external application ID.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalBundleId",
      "label": "External Bundle Id",
      "type": "string",
      "required": false,
      "description": "The external bundler ID.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalSubscriberId",
      "label": "External Subscriber Id",
      "type": "string",
      "required": false,
      "description": "The external subscriber ID.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalPrice",
      "label": "External Price",
      "type": "number",
      "required": false,
      "description": "The price in external system.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalPurchaseType",
      "label": "External Purchase Type",
      "type": "string",
      "required": false,
      "description": "The external purchase type.",
      "section": "Additional Fields"
    },
    {
      "name": "externalLastRenewalDate",
      "label": "External Last Renewal Date",
      "type": "string",
      "required": false,
      "description": "This last renewal date is a static value that applies for each transaction.\nUTC time, `yyyy-mm-dd hh:mm:ss`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalNextRenewalDate",
      "label": "External Next Renewal Date",
      "type": "string",
      "required": false,
      "description": "This next renewal date is a static value that applies for each transaction. \nUTC time, `yyyy-mm-dd hh:mm:ss`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externalActivationDate",
      "label": "External Activation Date",
      "type": "string",
      "required": false,
      "description": "When the external subscription was activated on the external platform. \nUTC time, `yyyy-mm-dd hh:mm:ss`.\n",
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
