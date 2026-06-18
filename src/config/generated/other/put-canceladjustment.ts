import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_canceladjustmentEndpoint: ApiEndpoint = {
  "id": "put-canceladjustment",
  "name": "Cancel a delivery adjustment",
  "description": "Describes how to cancel an unbilled delivery adjustment.",
  "method": "PUT",
  "path": "/v1/adjustments/{adjustmentId}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "adjustmentId",
      "label": "Adjustment Id",
      "type": "string",
      "required": true,
      "description": "The ID of the delivery adjustment to cancel."
    }
  ],
  "bodyFields": [
    {
      "name": "debitMemoCustomFields",
      "label": "Debit Memo Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of the Debit Memo object. When cancelling a delivery adjustment, Zuora generates a debit memo automatically. You can use this field to specify the custom fields of the debit memo associated with the cancellation of adjustment.",
      "section": "Credit & Settlement Settings"
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
