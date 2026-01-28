import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const partiallyupdateaspecificgroupEndpoint: ApiEndpoint = {
  "id": "partiallyupdateaspecificgroup",
  "name": "Partially update a group",
  "description": "Updates an existing group resource, allowing individual (or groups of) users to be added or removed from the group with a single operation.",
  "method": "PATCH",
  "path": "/scim/v2/Groups/{id}",
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
      "required": true,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "Operations",
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
