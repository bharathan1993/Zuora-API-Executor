import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postcreateEndpoint: ApiEndpoint = {
  "id": "action-postcreate",
  "name": "Create",
  "description": "Use the create call to create one or more objects of a specific type. You can specify different types in different create calls, but each create call must apply to only one type of object.",
  "method": "POST",
  "path": "/v1/action/create",
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
