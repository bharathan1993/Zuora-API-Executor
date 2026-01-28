import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getmappingsforjobEndpoint: ApiEndpoint = {
  "id": "getmappingsforjob",
  "name": "List mappings for a bulk job",
  "description": "Retrieves the mappings for an existing bulk job. The mappings define how columns in the source file correspond to fields in the object type template.",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/{id}/mappings",
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
