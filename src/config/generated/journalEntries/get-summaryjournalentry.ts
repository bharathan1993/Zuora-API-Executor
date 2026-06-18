import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_summaryjournalentryEndpoint: ApiEndpoint = {
  "id": "get-summaryjournalentry",
  "name": "Retrieve a summary journal entry",
  "description": "This REST API reference describes how to get information about a summary journal entry by its journal entry number.",
  "method": "GET",
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
      "required": true
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
