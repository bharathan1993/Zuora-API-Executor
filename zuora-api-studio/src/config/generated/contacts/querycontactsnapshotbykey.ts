import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycontactsnapshotbykeyEndpoint: ApiEndpoint = {
  "id": "querycontactsnapshotbykey",
  "name": "Retrieve a contact snapshot",
  "description": "Retrieves detailed information about a specific contact snapshot by its unique ID.",
  "method": "GET",
  "path": "/object-query/contact-snapshots/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
