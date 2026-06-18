import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updaterefundEndpoint: ApiEndpoint = {
  "id": "put-updaterefund",
  "name": "Update a refund",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "PUT",
  "path": "/v1/refunds/{refundKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "refundKey",
      "label": "Refund Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of a refund. For example, `4028905f5a87c0ff015a889e590e00c9` or `R-00000001`."
    }
  ],
  "bodyFields": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the refund.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "financeInformation",
      "label": "Finance Information",
      "type": "object",
      "required": false,
      "description": "Container for the finance information related to the refund.",
      "fields": [
        {
          "name": "bankAccountAccountingCode",
          "label": "Bank Account Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code that maps to a bank account in your accounting system.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "description": "Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.",
          "enum": [
            "Processing",
            "Yes",
            "No",
            "Error",
            "Ignore"
          ],
          "section": "Account Settings"
        },
        {
          "name": "unappliedPaymentAccountingCode",
          "label": "Unapplied Payment Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the unapplied payment.",
          "maxLength": 100,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.",
      "section": "Additional Fields"
    },
    {
      "name": "referenceId",
      "label": "Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway. Use this field to reconcile refunds between your gateway and Zuora Payments. You can only update the reference ID for external refunds.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "description": "Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
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
