import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentrunEndpoint: ApiEndpoint = {
  "id": "put-paymentrun",
  "name": "Update a payment run",
  "description": "Updates the information about an unexecuted payment run. Only pending payment runs can be updated.",
  "method": "PUT",
  "path": "/v1/payment-runs/{paymentRunKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentRunKey",
      "label": "Payment Run Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentRunKey",
      "placeholder": "Enter payment run key"
    }
  ],
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account associated with the payment run.\n\nThis field conflicts with each of the `batch`, `billCycleDay`, `currency`, `paymentGatewayId`, and `billingRunId` fields. If there are such conflicts, an error occurs and an error message is returned.\n",
      "section": "Account Settings"
    },
    {
      "name": "batch",
      "label": "Batch",
      "type": "string",
      "required": false,
      "description": "The alias name given to a batch. The batch name is a string of 50 characters or less.\n\nThis field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned. \n\n**Note**: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Performance_Booster_Elite\" target=\"_blank\">Performance Booster Elite</a> package.\n",
      "section": "Account Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "description": "**Note:** This field is only available if you have the Credit Balance feature enabled and the Invoice Settlement feature disabled.\n\nWhether to apply credit balances in the payment run. This field is only available when you have Invoice Settlement feature disabled.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoApplyCreditMemo",
      "label": "Auto Apply Credit Memo",
      "type": "boolean",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nWhether to automatically apply a posted credit memo to one or more receivables in the payment run.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoApplyUnappliedPayment",
      "label": "Auto Apply Unapplied Payment",
      "type": "boolean",
      "required": false,
      "description": "**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n\nWhether to automatically apply unapplied payments to  one or more receivables in the payment run.\n",
      "section": "Payment Settings"
    },
    {
      "name": "collectPayment",
      "label": "Collect Payment",
      "type": "boolean",
      "required": false,
      "description": "Whether to process electronic payments during the execution of payment runs. \n\nIf the Payment user permission \"Process Electronic Payment\" is disabled, this field will be ignored.\n",
      "section": "Payment Settings"
    },
    {
      "name": "consolidatedPayment",
      "label": "Consolidated Payment",
      "type": "boolean",
      "required": false,
      "description": "**Note:** The **Process Electronic Payment** permission also needs to be allowed for a Manage Payment Runs role to work. See [Payments Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/e_Payments_Roles) for more information. \n\nWhether to process a single payment for all receivables that are due on an account.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGatewayId",
      "label": "Payment Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the gateway instance that processes the payment.\n\nThis field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.\n",
      "section": "Payment Settings"
    },
    {
      "name": "processPaymentWithClosedPM",
      "label": "Process Payment With Closed P M",
      "type": "boolean",
      "required": false,
      "description": "**Note:** The **Process Electronic Payment** permission also needs to be allowed for a Manage Payment Runs role to work. See [Payments Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/e_Payments_Roles) for more information. \n\nWhether to process payments even if the default payment method is closed.\n",
      "section": "Payment Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "string",
      "required": false,
      "description": "The billing cycle day (BCD), the day of the month when a bill run generates invoices for the account. The value must be equal to or less then 31, and 31 is mean the EOM.\n\nThis field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingRunId",
      "label": "Billing Run Id",
      "type": "string",
      "required": false,
      "description": "The ID of a bill run.\n\nThis field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "A currency defined in the web-based UI administrative settings.\n\nThis field conflicts with the `accountId` field. If they are both specified in the request body, an error occurs and an error message is returned.\n",
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "description": "The organizations that the run is created for. \n\nFor each item in the array, either the `organizationId` or the `organizationName` field is required.\n\nThis field is only required when you have already turned on Multi-Org feature.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "The organization ID.\n",
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "description": "The organization name.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "runDate",
      "label": "Run Date",
      "type": "date",
      "required": false,
      "description": "The date and time when the scheduled payment run is to be executed, in `yyyy-mm-dd hh:mm:ss` format. The backend will ignore mintues and seconds in the field value. For example, if you specify `2017-03-01 11:30:37` for this value, this payment run will be run at 2017-03-01 11:00:00.\n",
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "The target date used to determine which receivables to be paid in the payment run. The payments are collected for all receivables with the due date no later than the target date.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
