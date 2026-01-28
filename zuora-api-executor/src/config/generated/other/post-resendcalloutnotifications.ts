import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_resendcalloutnotificationsEndpoint: ApiEndpoint = {
  "id": "post-resendcalloutnotifications",
  "name": "Resend callout notifications",
  "description": "Resends callout notifications if your customers did not receive previous callout notifications.",
  "method": "POST",
  "path": "/notifications/callout-histories/resend",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
