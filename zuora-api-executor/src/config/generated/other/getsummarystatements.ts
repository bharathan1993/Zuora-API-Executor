import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsummarystatementsEndpoint: ApiEndpoint = {
  "id": "getsummarystatements",
  "name": "List summary statements",
  "description": "Lists summary statements. ",
  "method": "GET",
  "path": "/object-query/summarystatements",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
