import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_contactEndpoint: ApiEndpoint = {
  "id": "get-contact",
  "name": "Retrieve a contact",
  "description": "Retrieves detailed information about a specific contact.",
  "method": "GET",
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
      "description": "The ID of the contact that you want to retrieve."
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
