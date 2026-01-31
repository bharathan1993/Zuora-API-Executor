import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_contactsnapshotEndpoint: ApiEndpoint = {
  "id": "get-contactsnapshot",
  "name": "Retrieve a contact snapshot",
  "description": "Retrieves detailed information about the snapshot of a contact, either a bill-to contact or sold-to contact.",
  "method": "GET",
  "path": "/v1/contact-snapshots/{contact-snapshot-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "contact-snapshot-id",
      "label": "Contact Snapshot Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: contact-snapshot-id",
      "placeholder": "Enter contact snapshot id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
