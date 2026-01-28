import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_callouthistoryEndpoint: ApiEndpoint = {
  "id": "get-callouthistory",
  "name": "List callout notification histories",
  "description": "Describes how to get a notification history for callouts.",
  "method": "GET",
  "path": "/v1/notification-history/callout",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
