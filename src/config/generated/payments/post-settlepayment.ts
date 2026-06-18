import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_settlepaymentEndpoint: ApiEndpoint = {
  "id": "post-settlepayment",
  "name": "Settle a payment",
  "description": "If the Asynchronous Payment Statuses feature is not enabled, this API operation sets the Gateway State field of the payment to `Settled` and returns the Payment object as response.",
  "method": "POST",
  "path": "/v1/gateway-settlement/payments/{payment-key}/settle",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-key",
      "label": "Payment Key",
      "type": "string",
      "required": true,
      "description": "The payment number starting with \"P-\" or the unique payment ID."
    }
  ],
  "bodyFields": [
    {
      "name": "gatewayReconciliationReason",
      "label": "Gateway Reconciliation Reason",
      "type": "string",
      "required": false,
      "description": "The reason of gateway reconciliation.",
      "section": "Payment Settings"
    },
    {
      "name": "gatewayReconciliationStatus",
      "label": "Gateway Reconciliation Status",
      "type": "string",
      "required": false,
      "description": "The status of gateway reconciliation.",
      "section": "Payment Settings"
    },
    {
      "name": "payoutId",
      "label": "Payout Id",
      "type": "string",
      "required": false,
      "description": "The payout ID from the gateway side.",
      "section": "Additional Fields"
    },
    {
      "name": "settledOn",
      "label": "Settled On",
      "type": "date",
      "required": false,
      "description": "The date and time of the transaction settlement. The format is `yyyy-mm-dd hh:mm:ss`.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
