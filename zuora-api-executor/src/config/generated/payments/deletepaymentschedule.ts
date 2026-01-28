import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deletepaymentscheduleEndpoint: ApiEndpoint = {
  "id": "deletepaymentschedule",
  "name": "Delete a payment schedule",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. ",
  "method": "DELETE",
  "path": "/v1/payment-schedules/{paymentScheduleKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentScheduleKey",
      "placeholder": "Enter payment schedule key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
