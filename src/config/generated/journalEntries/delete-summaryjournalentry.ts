import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_summaryjournalentryEndpoint: ApiEndpoint = {
  "id": "delete-summaryjournalentry",
  "name": "Delete a summary journal entry",
  "description": "This reference describes how to delete a summary journal entry using the REST API.",
  "method": "DELETE",
  "path": "/v1/journal-entries/{je-number}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "je-number",
      "label": "Je Number",
      "type": "string",
      "required": true,
      "description": "Journal entry number in the format JE-00000001."
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
