import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_cancelstoredcredentialprofileEndpoint: ApiEndpoint = {
  "id": "post-cancelstoredcredentialprofile",
  "name": "Cancel a stored credential profile",
  "description": "Cancels a stored credential profile within a payment method.",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: payment-method-id",
      "placeholder": "Enter payment method id"
    },
    {
      "name": "profile-number",
      "label": "Profile Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: profile-number",
      "placeholder": "Enter profile number"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
