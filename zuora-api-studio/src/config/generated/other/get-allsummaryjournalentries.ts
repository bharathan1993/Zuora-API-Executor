import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allsummaryjournalentriesEndpoint: ApiEndpoint = {
  "id": "get-allsummaryjournalentries",
  "name": "List all summary journal entries in a journal run",
  "description": "",
  "method": "GET",
  "path": "/v1/journal-entries/journal-runs/{jr-number}",
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
      "description": "Path parameter: jr-number",
      "placeholder": "Enter jr number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
