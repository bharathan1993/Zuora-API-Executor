import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateaspecificgroupEndpoint: ApiEndpoint = {
  "id": "updateaspecificgroup",
  "name": "Update a group",
  "description": "Updates an existing group resource, overwriting all values for a group even if an attribute is empty or not provided.",
  "method": "PUT",
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
      "required": false,
      "description": "List of schema URNs defining the structure of the request.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operations",
      "label": "Operations",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "op",
          "label": "Op",
          "type": "string",
          "required": true,
          "description": "The operation to perform (e.g., add, remove, replace).",
          "section": "Additional Fields"
        },
        {
          "name": "path",
          "label": "Path",
          "type": "string",
          "required": true,
          "description": "The path to the attribute that is being modified.",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "array",
          "required": true,
          "itemType": "object",
          "itemFields": [
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": true,
              "description": "The value to be added.",
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
