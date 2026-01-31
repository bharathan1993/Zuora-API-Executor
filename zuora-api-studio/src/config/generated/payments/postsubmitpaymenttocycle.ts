import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postsubmitpaymenttocycleEndpoint: ApiEndpoint = {
  "id": "postsubmitpaymenttocycle",
  "name": "Submit a payment to retry cycle",
  "description": "This API request submits a failed payment to the Configurable Payment Retry retry cycle. The request adds the failed payment to the existing CPR retry cycle. If no CPR retry cycle exists, this request creates a new one and adds the failed payment.",
  "method": "POST",
  "path": "/api/v1/payments/submit_failed_payment",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "payment_id",
      "label": "Payment Id",
      "type": "string",
      "required": false,
      "description": "ID of a failed payment.",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
