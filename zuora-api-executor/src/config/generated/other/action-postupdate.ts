import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postupdateEndpoint: ApiEndpoint = {
  "id": "action-postupdate",
  "name": "Update",
  "description": "",
  "method": "POST",
  "path": "/v1/action/update",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "objects",
      "label": "Objects",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "Id",
          "label": "Id",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "fieldsToNull",
          "label": "Fields To Null",
          "type": "array",
          "required": false,
          "description": "Used to set a list of fields to null.\n",
          "itemType": "string",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
