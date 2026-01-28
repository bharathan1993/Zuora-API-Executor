import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbulkjobsummaryEndpoint: ApiEndpoint = {
  "id": "getbulkjobsummary",
  "name": "Retrieve the summary of a bulk job",
  "description": "Get the summary of a specific job by its ID.",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/{id}/summary",
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
