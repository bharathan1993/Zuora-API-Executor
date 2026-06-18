import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_summaryjournalentryEndpoint: ApiEndpoint = {
  "id": "put-summaryjournalentry",
  "name": "Cancel a summary journal entry",
  "description": "",
  "method": "PUT",
  "path": "/v1/journal-entries/{je-number}/cancel",
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
