import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getdownloadlinksforjobEndpoint: ApiEndpoint = {
  "id": "getdownloadlinksforjob",
  "name": "List download links for a bulk job",
  "description": "Retrieves the download links for the files associated with a completed job.",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/{id}/downloads",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
