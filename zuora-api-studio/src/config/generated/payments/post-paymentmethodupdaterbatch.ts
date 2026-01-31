import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodupdaterbatchEndpoint: ApiEndpoint = {
  "id": "post-paymentmethodupdaterbatch",
  "name": "Create a Payment Method Updater batch asynchronously",
  "description": "Creates a Payment Method Updater (PMU) batch asynchronously. PMU for American Express (AMEX) is not supported.",
  "method": "POST",
  "path": "/v1/payment-method-updaters/batches",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "billingCycleDay",
      "label": "Billing Cycle Day",
      "type": "number",
      "required": true,
      "description": "The billing cycle day. The allowed value is an integer in the range of 1 - 31.\n\nThe payment methods from accounts where the billing cycle day is the specified value in this field will be included in the updates.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "updaterAccountId",
      "label": "Updater Account Id",
      "type": "string",
      "required": true,
      "description": "The ID (UUID) of the PMU account. This field must be a string of 32 characters consisting of digits and letters a - f.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
