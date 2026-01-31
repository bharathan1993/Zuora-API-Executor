import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_query_email_templatesEndpoint: ApiEndpoint = {
  "id": "get-query-email-templates",
  "name": "List email templates",
  "description": "Queries email templates. This operation supports querying email templates for all event types.",
  "method": "GET",
  "path": "/notifications/email-templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
