import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createanewgroupEndpoint: ApiEndpoint = {
  "id": "createanewgroup",
  "name": "Create a group",
  "description": "Creates a new group. Must include the displayName attribute. Users can be added to the group during creation by supplying the user ID values in the members array attribute.",
  "method": "POST",
  "path": "/scim/v2/Groups",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "schemas",
      "label": "Schemas",
      "type": "array",
      "required": false,
      "description": "List of schema URNs defining the structure of the group resource.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "urn:zuora:scim:schemas:1.0:GroupExtension",
      "label": "Urn:zuora:scim:schemas:1.0: Group Extension",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "schemas",
          "label": "Schemas",
          "type": "array",
          "required": false,
          "description": "List of URNs for the extension schemas.",
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Description of the group.",
          "section": "Additional Fields"
        },
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "Identifier for the associated organization.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": false,
      "description": "Name of the group.",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
