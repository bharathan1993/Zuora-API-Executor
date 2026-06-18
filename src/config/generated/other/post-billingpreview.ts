import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingpreviewEndpoint: ApiEndpoint = {
  "id": "post-billingpreview",
  "name": "Generate a billing preview",
  "description": "",
  "method": "POST",
  "path": "/v1/operations/billing-preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account to which the billing preview applies. **Note**: When posting billing preview, you must specify either `accountId` or `accountNumber` in the request body.",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account to which the billing preview applies. **Note**: When posting billing preview, you must specify either `accountId` or `accountNumber` in the request body.",
      "section": "Account Settings"
    },
    {
      "name": "assumeRenewal",
      "label": "Assume Renewal",
      "type": "string",
      "required": false,
      "description": "Indicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed. Set one of the following values in this field to decide how the assumption is applied in the billing preview. * **All:** The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. * **None:** (Default) The assumption is not applied to the subscriptions. Zuora generates preview invoice item data and credit memo item data based on the current term end date and the target date. * If the target date is later than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the current term end date. * If the target date is earlier than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. * **Autorenew:** The assumption is applied to the subscriptions that have auto-renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. **Note:** - This field can only be used if the subscription renewal term is not set to 0. - The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "string",
      "required": false,
      "description": "The charge types to exclude from the billing preview. **Possible values:** OneTime, Recurring, Usage, and any combination of these values.",
      "section": "Additional Fields"
    },
    {
      "name": "includingDraftItems",
      "label": "Including Draft Items",
      "type": "boolean",
      "required": false,
      "description": "Whether draft document items are included in the billing preview run. By default, draft document items are not included. This field loads draft invoice items and credit memo items. The `chargeTypeToExclude`, `targetDate`, `includingEvergreenSubscription`, and `assumeRenewal` fields do not affect the behavior of the `includingDraftItems` field.",
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": true,
      "description": "The target date for the billingPreview call. The billingPreview call generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the TargetDate. If the TargetDate is later than the subscription current term end date, the preview invoice item data and credit memo item data is generated from the first day of the customer's next billing period to the current term end date. If you want to generate preview invoice item data and credit memo item data past the end of the subscription current term, specify the `AssumeRenewal` field in the request. **Note:** The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "includingEvergreenSubscription",
      "label": "Including Evergreen Subscription",
      "type": "boolean",
      "required": false,
      "description": "Indicates if evergreen subscriptions are included in the billingPreview call.",
      "section": "Subscription Settings"
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
