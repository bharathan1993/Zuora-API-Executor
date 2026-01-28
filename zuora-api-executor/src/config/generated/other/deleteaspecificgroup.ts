import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteaspecificgroupEndpoint: ApiEndpoint = {
  "id": "deleteaspecificgroup",
  "name": "Delete a group",
  "description": "Permanently removes a group (members are not deleted, only the group).",
  "method": "DELETE",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
