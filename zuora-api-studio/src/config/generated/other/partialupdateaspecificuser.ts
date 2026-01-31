import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const partialupdateaspecificuserEndpoint: ApiEndpoint = {
  "id": "partialupdateaspecificuser",
  "name": "Partially update a user",
  "description": "Updates an existing user resource, overwriting values for specified attributes.",
  "method": "PATCH",
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
      "required": true,
      "itemType": "string",
      "itemEnum": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
      ],
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
            "replace",
            "add",
            "remove",
            "copy",
            "move",
            "test"
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
          "type": "object",
          "required": false,
          "fields": [
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
                  "type": "email",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "display",
                  "label": "Display",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "work",
                    "home",
                    "other"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "primary",
                  "label": "Primary",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Communication Settings"
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
