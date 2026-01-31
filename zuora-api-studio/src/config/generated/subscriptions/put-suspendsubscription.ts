import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_suspendsubscriptionEndpoint: ApiEndpoint = {
  "id": "put-suspendsubscription",
  "name": "Suspend a subscription",
  "description": "This REST API reference describes how to suspend an active subscription.",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscription-key}/suspend",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscription-key",
      "placeholder": "Enter subscription key"
    }
  ],
  "bodyFields": [
    {
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "description": "The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.\n\n**Note:**\n  - This field is valid only if the `applyCredit` field is set to `true`.\n  - If no value is specified for this field, the default priority order is used, [\"CreditMemo\", \"UnappliedPayment\"], to apply credit memos first and then apply unapplied payments.\n  - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `[\"CreditMemo\"]`, only credit memos are used to apply to invoices.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "bookingDate",
      "label": "Booking Date",
      "type": "date",
      "required": false,
      "description": "The booking date that you want to set for the amendment contract when you suspend the subscription. If `resume` is `true`, which means you also choose to resume the subscription at some point, then this field is also the booking date for the Resume amendment contract.\n\nThis field must be in the `yyyy-mm-dd` format. The default value of this field is the current date when you make the API call. \n",
      "section": "Additional Fields"
    },
    {
      "name": "contractEffectiveDate",
      "label": "Contract Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the customer notifies you that they want to amend their subscription.\n",
      "section": "Additional Fields"
    },
    {
      "name": "extendsTerm",
      "label": "Extends Term",
      "type": "boolean",
      "required": false,
      "description": "Whether to extend the subscription term by the length of time the suspension is in effect. Values: `true`, `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "orderDate",
      "label": "Order Date",
      "type": "date",
      "required": false,
      "description": "The date when the order is signed. If no additinal contractEffectiveDate is provided, this order will use this order date as the contract effective date.\nThis field must be in the `yyyy-mm-dd` format.\nThis field is required for Orders customers only, not applicable to Orders Harmonization customers.\n",
      "section": "Additional Fields"
    },
    {
      "name": "resume",
      "label": "Resume",
      "type": "boolean",
      "required": false,
      "description": "Whether to set when to resume a subscription when creating a suspend amendment. Values: `true`, `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "resumePeriods",
      "label": "Resume Periods",
      "type": "string",
      "required": false,
      "description": "The length of the period used to specify when the subscription is resumed. The subscription resumption takes effect after a specified period based on the suspend date or today's date. You must use this field together with the `resumePeriodsType` field to specify the period.\n\n**Note:** This field is only applicable when the `suspendPolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "resumePeriodsType",
      "label": "Resume Periods Type",
      "type": "string",
      "required": false,
      "description": "The period type used to define when the subscription resumption takes effect. The subscription resumption takes effect after a specified period based on the suspend date or today's date. You must use this field together with the resumePeriods field to specify the period.\n\nValues: `Day`, `Week`, `Month`, `Year`\n\n**Note:** This field is only applicable when the `suspendPolicy` field is set to `FixedPeriodsFromToday` or `FixedPeriodsFromSuspendDate`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "resumePolicy",
      "label": "Resume Policy",
      "type": "string",
      "required": false,
      "description": "Resume methods. Specify a way to resume a subscription. Values:\n\n* `Today`: The subscription resumption takes effect on today's date.\n\n* `FixedPeriodsFromSuspendDate`: The subscription resumption takes effect after a specified period based on the suspend date. You must specify the `resumePeriods` and `resumePeriodsType` fields to define the period.\n\n* `SpecificDate`: The subscription resumption takes effect on a specific date. You must define the specific date in the `resumeSpecificDate` field.\n\n* `FixedPeriodsFromToday`: The subscription resumption takes effect after a specified period based on the today's date. You must specify the `resumePeriods` and `resumePeriodsType` fields to define the period.\n* `suspendDate`: The subscription resumption takes effect on the date of suspension of the subscription.\n",
      "section": "Additional Fields"
    },
    {
      "name": "resumeSpecificDate",
      "label": "Resume Specific Date",
      "type": "date",
      "required": false,
      "description": "A specific date when the subscription resumption takes effect, in the format yyyy-mm-dd.\n\n**Note:** This field is only applicable only when the `resumePolicy` field is set to `SpecificDate`.\n\nThe value should not be earlier than the subscription suspension date.\n",
      "section": "Additional Fields"
    },
    {
      "name": "suspendPeriods",
      "label": "Suspend Periods",
      "type": "string",
      "required": false,
      "description": "The length of the period used to specify when the subscription suspension takes effect. The subscription suspension takes effect after a specified period based on today's date. You must use this field together with the `suspendPeriodsType` field to specify the period.\n\n**Note:** This field is only applicable only when the suspendPolicy field is set to FixedPeriodsFromToday.\n",
      "section": "Additional Fields"
    },
    {
      "name": "suspendPeriodsType",
      "label": "Suspend Periods Type",
      "type": "string",
      "required": false,
      "description": "The period type used to define when the subscription suspension takes effect. The subscription suspension takes effect after a specified period based on today's date. You must use this field together with the suspendPeriods field to specify the period.\n\nType: string (enum)\n\nValues: `Day`, `Week`, `Month`, `Year`\n\n**Note:** This field is only applicable only when the suspendPolicy field is set to FixedPeriodsFromToday.\n",
      "section": "Additional Fields"
    },
    {
      "name": "suspendPolicy",
      "label": "Suspend Policy",
      "type": "string",
      "required": true,
      "description": "Suspend methods. Specify a way to suspend a subscription. \n\nValue:\n\n* `Today`: The subscription suspension takes effect on today's date.\n* `EndOfLastInvoicePeriod`: The subscription suspension takes effect at the end of the last invoice period. The suspend date defaults to a date that is one day after the last invoiced period. You can choose this option to avoid any negative invoices (credits) issued back to the customer after the subscription suspension. \n* `SpecificDate`: The subscription suspension takes effect on a specific date. You must define the specific date in the `suspendSpecificDate` field.\n* `FixedPeriodsFromToday`: The subscription suspension takes effect after a specified period based on today's date. You must specify the `suspendPeriods` and `suspendPeriodsType` fields to define the period.\n",
      "section": "Additional Fields"
    },
    {
      "name": "suspendSpecificDate",
      "label": "Suspend Specific Date",
      "type": "date",
      "required": false,
      "description": "A specific date when the subscription suspension takes effect, in the format yyyy-mm-dd.\n\n**Note:** This field is only applicable only when the suspendPolicy field is set to SpecificDate.\n\nThe value should not be earlier than the subscription contract effective date, later than the subscription term end date, or within a period for which the customer has been invoiced.\n",
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "Date through which to calculate charges if an invoice or a credit memo is generated, as\nyyyy-mm-dd. Default is current date.\nThis field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `211.0` or a later available version.\n\n**Note:** The credit memo is only available if you have the Invoice Settlement feature enabled.\n",
      "section": "Additional Fields"
    },
    {
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "description": "If the value is true, the credit memo or unapplied payment on the order account will be automatically applied to the invoices generated by this order. The credit memo generated by this order will not be automatically applied to any invoices.\n\n\n**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically apply a credit balance to an invoice.\n\nIf the value is `true`, the credit balance is applied to the invoice. If the value is `false`, no action is taken.\n\n\nTo view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.\n\nPrerequisite: `invoice` must be `true`. \n\n**Note:** \n  - If you are using the field `invoiceCollect` rather than the field `invoice`, the `invoiceCollect` value must be `true`.\n  - This field is deprecated if you have the Invoice Settlement feature enabled.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "description": "Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.\n\nIf the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken.\n\nPrerequisite: The `invoice` or `runBilling` field must be `true`. \n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or a later available version.\n",
      "defaultValue": false,
      "section": "Subscription Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.\n\n- If this field is specified, the specified date is used as the billing document date. \n- If this field is not specified, the date specified in the `targetDate` is used as the billing document date.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "description": "Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos).  \n\n\nThe billing documents generated\nin this operation is only for this subscription, not for the entire\ncustomer account.\n\n\nPossible values:\n\n- `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.\n\n\n- `false`: No invoice is created.\n\n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `211.0` or a  later available version.\n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
