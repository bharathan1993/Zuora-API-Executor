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
      "description": "Path parameter: contactId",
      "placeholder": "Enter contact id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
