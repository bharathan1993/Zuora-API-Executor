import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const transfercontentEndpoint: ApiEndpoint = {
  "id": "transfercontent",
  "name": "Transfer a contact",
  "description": "This operation transfers contacts of the accounts within the Customer Hierarchy when removing the account.",
  "method": "PUT",
  "path": "/v1/contacts/{contactId}/transfer",
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
  "bodyFields": [
    {
      "name": "destinationAccountKey",
      "label": "Destination Account Key",
      "type": "string",
      "required": false,
      "description": "The ID or number of the destination account.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
