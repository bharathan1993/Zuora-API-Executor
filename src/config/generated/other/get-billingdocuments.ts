import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_billingdocumentsEndpoint: ApiEndpoint = {
  "id": "get-billingdocuments",
  "name": "List billing documents for an account",
  "description": "Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos.",
  "method": "GET",
  "path": "/v1/billing-documents",
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
      "description": "The ID of the customer account that the billing documents are associated with. **Note**: When retrieving information about all billing documents associated with an account, you must specify either `accountId` or `accountNumber` in the query parameters."
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account that the billing documents are associated with. **Note**: When retrieving information about all billing documents associated with an account, you must specify either `accountId` or `accountNumber` in the query parameters."
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos."
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "description": "The status of the billing document.",
      "enum": [
        "Draft",
        "Posted",
        "Canceled",
        "Error"
      ]
    },
    {
      "name": "sort",
      "label": "Sort",
      "type": "string",
      "required": false,
      "description": "This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on. If you do not specify any sortable field, the response data is sorted by the `documentDate` field in descending order. A sortable field uses the following form: *operator* *field_name* You can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: *operator* *field_name*, *operator* *field_name* *operator* is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field. - The `-` operator indicates an ascending order. - The `+` operator indicates a descending order. *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below: - documentDate - documentType Examples: - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1 &sort=+documentDate,-documentType - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1 &status=Posted&sort=+documentDate&page=2&pageSize=15"
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
