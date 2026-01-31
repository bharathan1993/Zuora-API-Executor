import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_journalrunEndpoint: ApiEndpoint = {
  "id": "put-journalrun",
  "name": "Cancel a journal run",
  "description": "This reference describes how to cancel a journal run using the REST API.",
  "method": "PUT",
  "path": "/v1/journal-runs/{jr-number}/cancel",
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
