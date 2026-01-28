import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const patchbulkpatchgroupsEndpoint: ApiEndpoint = {
  "id": "patchbulkpatchgroups",
  "name": "Bulk update groups",
  "description": "Updates an existing group resource, allowing individual (or groups of) users to be added or removed from the group with a single operation.",
  "method": "PATCH",
  "path": "/scim/v2/Groups/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "schemas",
      "label": "Schemas",
      "type": "array",
      "required": true,
      "description": "List of schema identifiers that define the format of the request.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operations",
      "label": "Operations",
      "type": "array",
      "required": true,
      "description": "List of operations to be performed on the resource.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "op",
          "label": "Op",
          "type": "string",
          "required": true,
          "description": "Operation to be performed. Can be 'add' to add a new item or 'remove' to delete an item.",
          "enum": [
            "add",
            "remove"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "path",
          "label": "Path",
          "type": "string",
          "required": true,
          "description": "Path to the item or property to be modified.",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "array",
          "required": true,
          "description": "List of values associated with the operation.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value to be added or removed.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
