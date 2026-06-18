import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_emailbillingdocumentsfrombillrunEndpoint: ApiEndpoint = {
  "id": "post-emailbillingdocumentsfrombillrun",
  "name": "Email billing documents generated from a bill run",
  "description": "Manually emails all the billing documents that are generated from a specified bill run to your customers.",
  "method": "POST",
  "path": "/v1/bill-runs/{billRunKey}/emails",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billRunKey",
      "label": "Bill Run Key",
      "type": "string",
      "required": true,
      "description": "The ID or number of the bill run. For example, 2c92c8f95d0c886e015d11287a8f0f8b or BR-00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "resend",
      "label": "Resend",
      "type": "boolean",
      "required": false,
      "description": "Whether to send out emails for all the billing documents that are associated with the bill run. - If the value is `false`, emails are sent out only for the billing documents that never have emails sent out. **Note**: Do not perform this API operation with the `resend` field set to `false` multiple times in a short period. Otherwise, you may receive the same email multiple times, which contradicts the purpose of this setting. - If the value is `true`, emails are sent out for all the billing documents.",
      "defaultValue": false,
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
