import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_query_notification_definitionsEndpoint: ApiEndpoint = {
  "id": "get-query-notification-definitions",
  "name": "List notification definitions",
  "description": "Queries notification definitions with the specified filters.",
  "method": "GET",
  "path": "/notifications/notification-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
