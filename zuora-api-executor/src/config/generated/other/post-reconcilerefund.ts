import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_reconcilerefundEndpoint: ApiEndpoint = {
  "id": "post-reconcilerefund",
  "name": "Reconcile a refund",
  "description": "Reconciles a refund when receiving the gateway reconciliation request or event.",
  "method": "POST",
  "path": "/v1/refunds/{refund-key}/reconcile",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "refund-key",
      "label": "Refund Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: refund-key",
      "placeholder": "Enter refund key"
    }
  ],
  "bodyFields": [
    {
      "name": "action",
      "label": "Action",
      "type": "string",
      "required": false,
      "description": "The action of the refund reconciliation.\n  - `settle`: Sets Gateway State to \"Settled\" and returns the refund object as response.\n  - `reject`: Sets Gateway State to \"FailedToSettle\" and handle the event according to the settings configured in the Gateway Reconciliation Configuration in Payments Settings through Zuora UI. See [Configure how to handle refund rejected events](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/M_Payment_Gateways/Gateway_Reconciliation#Configure_how_to_handle_refund_rejected_events) for details.\n",
      "enum": [
        "settle",
        "reject"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "actionDate",
      "label": "Action Date",
      "type": "string",
      "required": false,
      "description": "The date and time of the refund reconciliation action, in `yyyy-mm-dd hh:mm:ss` format.\n",
      "section": "Additional Fields"
    },
    {
      "name": "payoutId",
      "label": "Payout Id",
      "type": "string",
      "required": false,
      "description": "The payout ID of the refund from the gateway side.\n",
      "section": "Additional Fields"
    },
    {
      "name": "gatewayReconciliationReason",
      "label": "Gateway Reconciliation Reason",
      "type": "string",
      "required": false,
      "description": "The reason of gateway reconciliation.\n",
      "section": "Payment Settings"
    },
    {
      "name": "gatewayReconciliationStatus",
      "label": "Gateway Reconciliation Status",
      "type": "string",
      "required": false,
      "description": "The status of gateway reconciliation.\n",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
