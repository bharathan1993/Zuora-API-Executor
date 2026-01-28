import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcallouttemplatesEndpoint: ApiEndpoint = {
  "id": "getcallouttemplates",
  "name": "List callout templates",
  "description": "Queries callout templates. This operation supports querying callout templates for all event types.",
  "method": "GET",
  "path": "/notifications/callout-templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
