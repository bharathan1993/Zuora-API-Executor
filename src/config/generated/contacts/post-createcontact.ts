import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createcontactEndpoint: ApiEndpoint = {
  "id": "post-createcontact",
  "name": "Create a contact",
  "description": "Creates a contact for a specified account. Each account must have at least one contact before it can be saved. You can add a maximum of 2000 contacts to an account.",
  "method": "POST",
  "path": "/v1/contacts",
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
      "description": "The ID of the account associated with the contact. **Note**: When creating a contact, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account associated with the contact. **Note**: When creating a contact, you must specify `accountNumber`, `accountId`, or both in the request body. If both fields are specified, they must correspond to the same account.",
      "section": "Account Settings"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "string",
      "required": true,
      "description": "The contact's first name.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "string",
      "required": true,
      "description": "The contact's last name.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "nickname",
      "label": "Nickname",
      "type": "string",
      "required": false,
      "description": "A nickname for the contact.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "address1",
      "label": "Address1",
      "type": "string",
      "required": false,
      "description": "The first line of the contact's address, which is often a street address or business name.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "address2",
      "label": "Address2",
      "type": "string",
      "required": false,
      "description": "The second line of the contact's address.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "city",
      "label": "City",
      "type": "string",
      "required": false,
      "description": "The city of the contact's address.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": false,
      "description": "The country of the contact's address. Either a full name or an ISO code is supported.",
      "maxLength": 64,
      "section": "Additional Fields"
    },
    {
      "name": "county",
      "label": "County",
      "type": "string",
      "required": false,
      "description": "The county. May optionally be used by Zuora Tax to calculate county tax.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "fax",
      "label": "Fax",
      "type": "string",
      "required": false,
      "description": "The contact's fax number.",
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "homePhone",
      "label": "Home Phone",
      "type": "string",
      "required": false,
      "description": "The contact's home phone number.",
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "mobilePhone",
      "label": "Mobile Phone",
      "type": "string",
      "required": false,
      "description": "The mobile phone number of the contact.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "otherPhone",
      "label": "Other Phone",
      "type": "string",
      "required": false,
      "description": "An additional phone number for the contact.",
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "otherPhoneType",
      "label": "Other Phone Type",
      "type": "string",
      "required": false,
      "description": "The type of the additional phone number.",
      "enum": [
        "Work",
        "Mobile",
        "Home",
        "Other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "description": "The state or province of the contact's address. Either a full name or an abbreviation code is supported.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "workPhone",
      "label": "Work Phone",
      "type": "string",
      "required": false,
      "description": "The contact's business phone number.",
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "zipCode",
      "label": "Zip Code",
      "type": "string",
      "required": false,
      "description": "The zip code for the contact's address.",
      "maxLength": 20,
      "section": "Additional Fields"
    },
    {
      "name": "asBillTo",
      "label": "As Bill To",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the contact can be specified as a bill-to contact. This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "asShipTo",
      "label": "As Ship To",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the contact can be specified as a ship-to contact. This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management.",
      "section": "Contact Information"
    },
    {
      "name": "asSoldTo",
      "label": "As Sold To",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the contact can be specified as a sold-to contact. This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management.",
      "section": "Contact Information"
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
      "name": "personalEmail",
      "label": "Personal Email",
      "type": "email",
      "required": false,
      "description": "The contact's personal email address.",
      "maxLength": 80,
      "section": "Communication Settings"
    },
    {
      "name": "workEmail",
      "label": "Work Email",
      "type": "string",
      "required": false,
      "description": "The contact's business email address.",
      "maxLength": 80,
      "section": "Communication Settings"
    },
    {
      "name": "taxRegion",
      "label": "Tax Region",
      "type": "string",
      "required": false,
      "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.",
      "maxLength": 100,
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
