import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_contactEndpoint: ApiEndpoint = {
  "id": "delete-contact",
  "name": "Delete a contact",
  "description": "Deletes a contact.",
  "method": "DELETE",
  "path": "/v1/contacts/{contactId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "string",
      "required": true,
      "description": "The ID of the contact that you want to delete."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
