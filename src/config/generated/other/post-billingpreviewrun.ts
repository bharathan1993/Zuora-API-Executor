import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingpreviewrunEndpoint: ApiEndpoint = {
  "id": "post-billingpreviewrun",
  "name": "Create a billing preview run",
  "description": "Creates a billing preview run for single and multiple customer accounts.",
  "method": "POST",
  "path": "/v1/billing-preview-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "assumeRenewal",
      "label": "Assume Renewal",
      "type": "string",
      "required": false,
      "description": "Indicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed. Set one of the following values in this field to decide how the assumption is applied in the billing preview. * **All:** The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. * **None:** (Default) The assumption is not applied to the subscriptions. Zuora generates preview invoice item data and credit memo item data based on the current term end date and the target date. * If the target date is later than the current term end date, Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the current term end date. * If the target date is earlier than the current term end date, Zuora generates preview invoice item data and credit memeo item data from the first day of the customer's next billing period to the target date. * **Autorenew:** The assumption is applied to the subscriptions that have auto-renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. **Note:** - This field can only be used if the subscription renewal term is not set to 0. - The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "string",
      "required": false,
      "description": "The charge types to exclude from the forecast run. **Possible values:** OneTime, Recurring, Usage, and any comma-separated combination of these values.",
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
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "description": "The organization(s) that this billing preview run is created for. For each item in the array, either the `organizationId` or the `organizationName` field is required. This field is only required when you have already turned on Multi-Org feature.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "The organization ID.",
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "description": "The organization name.",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "storageOption",
      "label": "Storage Option",
      "type": "string",
      "required": false,
      "description": "The saving options. The default value is `Csv`. To compare the current billing preview run result with a specified billing preview run result and store the difference in the database, you must set the `storageOption` field to `Database`. For more information, see [Billing Preview Run Result data source](https://knowledgecenter.zuora.com/Zuora_Central_Platform/Reporting/D_Data_Sources_and_Exports/C_Data_Source_Reference/Billing_Preview_Run_Result_data_source).",
      "enum": [
        "Csv",
        "Database"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "storeDifference",
      "label": "Store Difference",
      "type": "boolean",
      "required": false,
      "description": "Specify this field to `yes` to compare the current billing preview run result with a specified billing preview run result and store the difference in the database. You can view the difference in the Billing Preview Run Result Difference data source. **Note**: This feature is in the **Early Adopter** phase. If you want to use the feature, submit a request at Zuora Global Support. The default value is `false`.",
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": true,
      "description": "The target date for the billing preview run. The billing preview run generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. The value for the `targetDate` field must be in _`YYYY-MM-DD`_ format. If the target date is later than the subscription current term end date, the preview invoice item data and credit memo item data is generated from the first day of the customer's next billing period to the current term end date. If you want to generate preview invoice item data and credit memo item data past the end of the subscription current term, specify the AssumeRenewal field in the request. **Note:** The credit memo item data is only available if you have Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": false,
      "description": "A list of filters to apply to the billing preview run. You can specify only one filter.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "filterType",
          "label": "Filter Type",
          "type": "string",
          "required": true,
          "description": "The type of filter to apply.",
          "enum": [
            "Account"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": true,
          "description": "The target account ID.",
          "pattern": "^[0-9a-fA-F]{32}$",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "batches",
      "label": "Batches",
      "type": "textarea",
      "required": false,
      "description": "The customer batches to include in the billing preview run. You can specify multiple batches separated by comma. If not specified, all customer batches are included. **Note**: - By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. - This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `314.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "maxLength": 1000,
      "section": "Account Settings"
    },
    {
      "name": "includingEvergreenSubscription",
      "label": "Including Evergreen Subscription",
      "type": "boolean",
      "required": false,
      "description": "Whether evergreen subscriptions are included in the billing preview run. By default, evergreen subscriptions are not included.",
      "section": "Subscription Settings"
    },
    {
      "name": "comparedBillingPreviewRunId",
      "label": "Compared Billing Preview Run Id",
      "type": "string",
      "required": false,
      "description": "Specify an existing billing preview run result to compare the current billing preview result with. You can view the difference in the Billing Preview Run Result Difference data source. **Note**: This feature is in the **Early Adopter** phase. If you want to use the feature, submit a request at Zuora Global Support.",
      "section": "Invoice & Document Settings"
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
