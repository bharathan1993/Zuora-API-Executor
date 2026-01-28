import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_delete_notification_history_for_accountEndpoint: ApiEndpoint = {
  "id": "delete-delete-notification-history-for-account",
  "name": "Delete notification histories for an account",
  "description": "Delete all notification histories for the given account. All email and callout notifications for this account will be deleted upon successful operation.",
  "method": "DELETE",
  "path": "/notifications/history",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
