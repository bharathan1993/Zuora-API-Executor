import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_expirestoredcredentialprofileEndpoint: ApiEndpoint = {
  "id": "post-expirestoredcredentialprofile",
  "name": "Expire a stored credential profile",
  "description": "Expires a stored credential profile within a payment method.",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire",
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
      "description": "ID of a payment method."
    },
    {
      "name": "profile-number",
      "label": "Profile Number",
      "type": "number",
      "required": true,
      "description": "Number that identifies a stored credential profile within the payment method."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
