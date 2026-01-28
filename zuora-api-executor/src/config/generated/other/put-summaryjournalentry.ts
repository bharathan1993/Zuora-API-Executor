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
      "description": "Path parameter: je-number",
      "placeholder": "Enter je number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
