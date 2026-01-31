import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_deploymenttemplateEndpoint: ApiEndpoint = {
  "id": "post-deploymenttemplate",
  "name": "Create a deployment template",
  "description": "Creates templates based on user preference.",
  "method": "POST",
  "path": "/deployment-manager/deployment_templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "content",
      "label": "Content",
      "type": "object",
      "required": false,
      "description": "Provides details about the different components that need to be compared and deployed.",
      "fields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "customObjects",
          "label": "Custom Objects",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dataAccessControl",
          "label": "Data Access Control",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dataQuery",
          "label": "Data Query",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "multiOrg",
          "label": "Multi Org",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "notifications",
          "label": "Notifications",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "organizationHierarchy",
          "label": "Organization Hierarchy",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "productCatalog",
          "label": "Product Catalog",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "settings",
          "label": "Settings",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "workflows",
          "label": "Workflows",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "description": "Json node object contains metadata.",
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "description": "Type of Component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "description": "Error Information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of Each component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "description": "Key value of fields inside component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "description": "Http method which is used to retrieve the particular component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
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
                  "description": "Contains the response of details fetched regarding selected component.",
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "description": "Gives the difference between components and sub components.",
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "description": "Id of the Template.",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "description": "Metadata is retrieved from this URL.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "boolean",
      "required": false,
      "description": "Selected custom fields component or not.",
      "section": "Additional Fields"
    },
    {
      "name": "customObjects",
      "label": "Custom Objects",
      "type": "boolean",
      "required": false,
      "description": "Selected custom objects component or not.",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": true,
      "description": "Creates template description.",
      "section": "Additional Fields"
    },
    {
      "name": "notifications",
      "label": "Notifications",
      "type": "boolean",
      "required": false,
      "description": "Selected Notification component or not.",
      "section": "Additional Fields"
    },
    {
      "name": "selectedComponents",
      "label": "Selected Components",
      "type": "array",
      "required": false,
      "description": "ConfigurationTemplateContent object contains the selected meta data information.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "componentType",
          "label": "Component Type",
          "type": "string",
          "required": false,
          "description": "Type of Component.",
          "section": "Additional Fields"
        },
        {
          "name": "error",
          "label": "Error",
          "type": "string",
          "required": false,
          "description": "Error Information.",
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "Id of Each component.",
          "section": "Additional Fields"
        },
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "description": "Key value of fields inside component.",
          "section": "Additional Fields"
        },
        {
          "name": "method",
          "label": "Method",
          "type": "string",
          "required": false,
          "description": "Http method which is used to retrieve the particular component.",
          "section": "Additional Fields"
        },
        {
          "name": "payload",
          "label": "Payload",
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
          "description": "Contains the response of details fetched regarding selected component.",
          "section": "Additional Fields"
        },
        {
          "name": "segregationKey",
          "label": "Segregation Key",
          "type": "string",
          "required": false,
          "description": "Gives the difference between components and sub components.",
          "section": "Additional Fields"
        },
        {
          "name": "templateId",
          "label": "Template Id",
          "type": "string",
          "required": false,
          "description": "Id of the Template.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "url",
          "label": "Url",
          "type": "string",
          "required": false,
          "description": "Metadata is retrieved from this URL.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "settings",
      "label": "Settings",
      "type": "boolean",
      "required": false,
      "description": "Selected Settings component or not.",
      "section": "Additional Fields"
    },
    {
      "name": "workflows",
      "label": "Workflows",
      "type": "boolean",
      "required": false,
      "description": "Selected Workflow component or not.",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Name of the Template.",
      "section": "Account Settings"
    },
    {
      "name": "templateTenant",
      "label": "Template Tenant",
      "type": "string",
      "required": true,
      "description": "ID of the template tenant.",
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
