import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_massupdaterEndpoint: ApiEndpoint = {
  "id": "put-massupdater",
  "name": "Stop a mass action",
  "description": "Describes how to stop a mass action through the REST API. You can stop a mass action when its status is Pending or Processing. After you have stopped a mass action, you can get the mass action result to see details of the mass action.",
  "method": "PUT",
  "path": "/v1/bulk/{bulk-key}/stop",
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
      "description": "String of 32 characters that identifies a mass action. You get the bulk-key after performing a mass action through the REST API."
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
