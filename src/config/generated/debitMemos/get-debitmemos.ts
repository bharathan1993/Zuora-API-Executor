import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_debitmemosEndpoint: ApiEndpoint = {
  "id": "get-debitmemos",
  "name": "List debit memos",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "GET",
  "path": "/v1/debit-memos",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The index number of the page that you want to retrieve. This parameter is dependent on `pageSize`. You must set `pageSize` before specifying `page`. For example, if you set `pageSize` to `20` and `page` to `2`, the 21st to 40th records are returned in the response.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The number of records returned per page in the response.",
      "defaultValue": 20
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `accountId` field."
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `accountNumber` field."
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": false,
      "description": "This parameter filters the response based on the `amount` field."
    },
    {
      "name": "balance",
      "label": "Balance",
      "type": "number",
      "required": false,
      "description": "This parameter filters the response based on the `balance` field."
    },
    {
      "name": "beAppliedAmount",
      "label": "Be Applied Amount",
      "type": "number",
      "required": false,
      "description": "This parameter filters the response based on the `beAppliedAmount` field."
    },
    {
      "name": "createdById",
      "label": "Created By Id",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `createdById` field."
    },
    {
      "name": "createdDate",
      "label": "Created Date",
      "type": "date",
      "required": false,
      "description": "This parameter filters the response based on the `createdDate` field."
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `currency` field."
    },
    {
      "name": "debitMemoDate",
      "label": "Debit Memo Date",
      "type": "date",
      "required": false,
      "description": "This parameter filters the response based on the `debitMemoDate` field."
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "date",
      "required": false,
      "description": "This parameter filters the response based on the `dueDate` field."
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `number` field."
    },
    {
      "name": "referredInvoiceId",
      "label": "Referred Invoice Id",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `referredInvoiceId` field."
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `status` field.",
      "enum": [
        "Draft",
        "Posted",
        "Canceled",
        "Error",
        "PendingForTax",
        "Generating",
        "CancelInProgress"
      ]
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "This parameter filters the response based on the `targetDate` field."
    },
    {
      "name": "taxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": false,
      "description": "This parameter filters the response based on the `taxAmount` field."
    },
    {
      "name": "totalTaxExemptAmount",
      "label": "Total Tax Exempt Amount",
      "type": "number",
      "required": false,
      "description": "This parameter filters the response based on the `totalTaxExemptAmount` field."
    },
    {
      "name": "updatedById",
      "label": "Updated By Id",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `updatedById` field."
    },
    {
      "name": "updatedDate",
      "label": "Updated Date",
      "type": "date",
      "required": false,
      "description": "This parameter filters the response based on the `updatedDate` field."
    },
    {
      "name": "sort",
      "label": "Sort",
      "type": "string",
      "required": false,
      "description": "This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on. A sortable field uses the following form: *operator* *field_name* You can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: *operator* *field_name*, *operator* *field_name* *operator* is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field. - The `-` operator indicates an ascending order. - The `+` operator indicates a descending order. By default, the response data is displayed in descending order by debit memo number. *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below: - number - accountId - debitMemoDate - targetDate - dueDate - amount - taxAmount - totalTaxExemptAmount - balance - beAppliedAmount - referredInvoiceId - createdDate - createdById - updatedDate - updatedById Examples: - /v1/debit-memos?sort=+number - /v1/debit-memos?status=Processed&sort=-number,+amount"
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
