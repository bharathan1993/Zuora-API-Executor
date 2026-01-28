import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postbulkdeletegroupsEndpoint: ApiEndpoint = {
  "id": "postbulkdeletegroups",
  "name": "Bulk delete groups",
  "description": "Permanently removes groups from an organization (members are not deleted, only the group).",
  "method": "POST",
  "path": "/scim/v2/Groups/delete",
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
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operations",
      "label": "Operations",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "op",
          "label": "Op",
          "type": "string",
          "required": false,
          "enum": [
            "add",
            "remove",
            "replace"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "path",
          "label": "Path",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
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
