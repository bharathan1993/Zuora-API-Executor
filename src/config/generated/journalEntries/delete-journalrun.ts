import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_journalrunEndpoint: ApiEndpoint = {
  "id": "delete-journalrun",
  "name": "Delete a journal run",
  "description": "This reference describes how to delete a journal run using the REST API.",
  "method": "DELETE",
  "path": "/v1/journal-runs/{jr-number}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jr-number",
      "label": "Jr Number",
      "type": "string",
      "required": true,
      "description": "Journal run number. Must be a valid journal run number in the format `JR-00000001`."
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
