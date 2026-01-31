import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectrecordsbatchupdateordeleteEndpoint: ApiEndpoint = {
  "id": "post-customobjectrecordsbatchupdateordelete",
  "name": "Update or delete custom object records",
  "description": "Makes a batch update or delete of custom object records.",
  "method": "POST",
  "path": "/objects/batch/default/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "Path parameter: object",
      "placeholder": "Enter object"
    }
  ],
  "bodyFields": [
    {
      "name": "action",
      "label": "Action",
      "type": "object",
      "required": true,
      "description": "The batch action on custom object records",
      "fields": [
        {
          "name": "allowPartialSuccess",
          "label": "Allow Partial Success",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the records that pass the schema validation should be updated when not all records in the request pass the schema validation.\n\nOnly applicable when `type` is `update`.\n",
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "ids",
          "label": "Ids",
          "type": "array",
          "required": false,
          "description": "Ids of the custom object records that you want to delete. Each ID must be a string of 36 characters. Only applicable when `type` is `delete`.",
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "records",
          "label": "Records",
          "type": "object",
          "required": false,
          "description": "Object records that you want to update. Only applicable when `type` is `update`.",
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "description": "The type of the batch action",
          "enum": [
            "delete",
            "update"
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
