import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_resendemailnotificationsEndpoint: ApiEndpoint = {
  "id": "post-resendemailnotifications",
  "name": "Resend email notifications",
  "description": "Resends email notifications if your customers did not receive previous email notifications.",
  "method": "POST",
  "path": "/notifications/email-histories/resend",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
