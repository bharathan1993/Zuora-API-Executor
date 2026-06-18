import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_scrubcontactEndpoint: ApiEndpoint = {
  "id": "put-scrubcontact",
  "name": "Scrub a contact",
  "description": "",
  "method": "PUT",
  "path": "/v1/contacts/{contactId}/scrub",
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
      "description": "The ID of the contact that you want to scrub sensitive data from."
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
