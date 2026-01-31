import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_emailhistoryEndpoint: ApiEndpoint = {
  "id": "get-emailhistory",
  "name": "List email notification histories",
  "description": "Describes how to get a notification history for notification emails.",
  "method": "GET",
  "path": "/v1/notification-history/email",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
