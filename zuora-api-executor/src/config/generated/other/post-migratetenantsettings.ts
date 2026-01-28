import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_migratetenantsettingsEndpoint: ApiEndpoint = {
  "id": "post-migratetenantsettings",
  "name": "Migrate settings from source tenant to target tenant",
  "description": "To migrate the selected configuration of a tenant in Deployment Manager migration while using template from the compare screen.",
  "method": "POST",
  "path": "/deployment-manager/deployment_artifacts/deploy",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "comments",
      "label": "Comments",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": true,
      "description": "Description of the migration.",
      "section": "Additional Fields"
    },
    {
      "name": "entityUuid",
      "label": "Entity Uuid",
      "type": "string",
      "required": true,
      "description": "Entity UUID",
      "section": "Additional Fields"
    },
    {
      "name": "metaData",
      "label": "Meta Data",
      "type": "object",
      "required": false,
      "description": "Json node object contains metadata.",
      "section": "Additional Fields"
    },
    {
      "name": "request",
      "label": "Request",
      "type": "array",
      "required": false,
      "description": "List of settings need to be migrated.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "attribute",
          "label": "Attribute",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "componentType",
          "label": "Component Type",
          "type": "string",
          "required": false,
          "description": "Type of selected components to be migrated.",
          "section": "Additional Fields"
        },
        {
          "name": "currentTargetResponse",
          "label": "Current Target Response",
          "type": "object",
          "required": false,
          "description": "Json node object contains metadata.",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "disabled",
          "label": "Disabled",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "errorMessage",
          "label": "Error Message",
          "type": "string",
          "required": false,
          "description": "Error information.",
          "section": "Additional Fields"
        },
        {
          "name": "httpMethods",
          "label": "Http Methods",
          "type": "string",
          "required": false,
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
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "migratedOn",
          "label": "Migrated On",
          "type": "date",
          "required": false,
          "description": "It is the time when migration is triggered.",
          "section": "Additional Fields"
        },
        {
          "name": "migrationId",
          "label": "Migration Id",
          "type": "string",
          "required": false,
          "description": "Migration ID. It is generated at the time of triggering deployment.",
          "section": "Additional Fields"
        },
        {
          "name": "pathPattern",
          "label": "Path Pattern",
          "type": "string",
          "required": false,
          "description": "PathPattern of component.",
          "section": "Additional Fields"
        },
        {
          "name": "previousTargetResponse",
          "label": "Previous Target Response",
          "type": "object",
          "required": false,
          "description": "Json node object contains metadata.",
          "section": "Additional Fields"
        },
        {
          "name": "result",
          "label": "Result",
          "type": "string",
          "required": false,
          "description": "Returns the result details of Components.",
          "section": "Additional Fields"
        },
        {
          "name": "segregationKey",
          "label": "Segregation Key",
          "type": "string",
          "required": false,
          "description": "Displays the differences between components.",
          "section": "Additional Fields"
        },
        {
          "name": "sourceResponse",
          "label": "Source Response",
          "type": "object",
          "required": false,
          "description": "Json node object contains metadata.",
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "description": "Returns the status of each component.",
          "section": "Additional Fields"
        },
        {
          "name": "updateStatus",
          "label": "Update Status",
          "type": "string",
          "required": false,
          "description": "Updated Status.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "emailIds",
      "label": "Email Ids",
      "type": "string",
      "required": false,
      "description": "List of Emails with comma separator.",
      "section": "Communication Settings"
    },
    {
      "name": "sendEmail",
      "label": "Send Email",
      "type": "boolean",
      "required": true,
      "description": "Flag determines whether or not to send an email.",
      "section": "Communication Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Name of the migration.",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
