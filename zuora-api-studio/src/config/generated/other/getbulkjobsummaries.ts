import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbulkjobsummariesEndpoint: ApiEndpoint = {
  "id": "getbulkjobsummaries",
  "name": "List job summaries for bulk jobs",
  "description": "Lists summaries for bulk jobs. You can filter the results using query parameters.",
  "method": "GET",
  "path": "/bulk-data/bulk-jobs/summaries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
