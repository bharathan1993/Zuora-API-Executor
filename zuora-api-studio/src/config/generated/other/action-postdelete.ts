import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postdeleteEndpoint: ApiEndpoint = {
  "id": "action-postdelete",
  "name": "Delete",
  "description": "Deletes one or more objects of the same type. You can specify different types in different delete calls, but each delete call must apply only to one type of object.",
  "method": "POST",
  "path": "/v1/action/delete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "ids",
      "label": "Ids",
      "type": "array",
      "required": true,
      "description": "A list of one or more IDs for the objects you want to delete.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "The type of object that you are deleting.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
