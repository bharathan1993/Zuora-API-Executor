import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_massupdaterEndpoint: ApiEndpoint = {
  "id": "get-massupdater",
  "name": "List all results of a mass action",
  "description": "Describes how to get information about the result of a mass action through the REST API. ",
  "method": "GET",
  "path": "/v1/bulk/{bulk-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "bulk-key",
      "label": "Bulk Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: bulk-key",
      "placeholder": "Enter bulk key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
