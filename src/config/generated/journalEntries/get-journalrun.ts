import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_journalrunEndpoint: ApiEndpoint = {
  "id": "get-journalrun",
  "name": "Retrieve a journal run",
  "description": "This REST API reference describes how to get information about a journal run. Request and response field descriptions and sample code are provided.",
  "method": "GET",
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
