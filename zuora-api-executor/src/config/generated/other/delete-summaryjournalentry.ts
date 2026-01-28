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
      "description": "Path parameter: je-number",
      "placeholder": "Enter je number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
