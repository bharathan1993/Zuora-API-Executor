import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateaspecificuserEndpoint: ApiEndpoint = {
  "id": "updateaspecificuser",
  "name": "Update a user",
  "description": "Updates an existing user resource, overwriting all values for a user even if an attribute is empty or not provided.",
  "method": "PUT",
  "path": "/scim/v2/Users/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [
    {
      "name": "schemas",
      "label": "Schemas",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalId",
      "label": "External Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "meta",
      "label": "Meta",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "created",
          "label": "Created",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "resourceType",
          "label": "Resource Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "location",
          "label": "Location",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "preferredLanguage",
      "label": "Preferred Language",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "locale",
      "label": "Locale",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "groups",
      "label": "Groups",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "display",
          "label": "Display",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "roles",
      "label": "Roles",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "display",
          "label": "Display",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "urn:zuora:scim:schemas:1.0:UserExtension",
      "label": "Urn:zuora:scim:schemas:1.0: User Extension",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "schemas",
          "label": "Schemas",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "ssoEnabled",
          "label": "Sso Enabled",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "region",
          "label": "Region",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "userName",
      "label": "User Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "formatted",
          "label": "Formatted",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "familyName",
          "label": "Family Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "givenName",
          "label": "Given Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "emails",
      "label": "Emails",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Communication Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
