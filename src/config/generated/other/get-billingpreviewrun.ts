import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billingpreviewrunEndpoint: ApiEndpoint = {
  "id": "get-billingpreviewrun",
  "name": "Retrieve a billing preview run",
  "description": "Retrieves a preview of future invoice items for multiple customer accounts through a billing preview run. If you have the Invoice Settlement feature enabled, you can also retrieve a preview of future credit memo items. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/billing-preview-runs/{billingPreviewRunId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billingPreviewRunId",
      "label": "Billing Preview Run Id",
      "type": "string",
      "required": true,
      "description": "Id of the billing preview run."
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
