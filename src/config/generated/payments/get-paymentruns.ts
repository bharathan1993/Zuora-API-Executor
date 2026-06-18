import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentrunsEndpoint: ApiEndpoint = {
  "id": "get-paymentruns",
  "name": "List payment runs",
  "description": "Retrieves the information about all payment runs. You can define filterable fields to restrict the data returned in the response.",
  "method": "GET",
  "path": "/v1/payment-runs",
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
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "description": "This parameter filters the response based on the `status` field.",
      "enum": [
        "Pending",
        "Processing",
        "Completed",
        "Error",
        "Canceled"
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
      "description": "This parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on. A sortable field uses the following form: *operator* *field_name* You can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: *operator* *field_name*, *operator* *field_name* *operator* is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field. - The `-` operator indicates an ascending order. - The `+` operator indicates a descending order. By default, the response data is displayed in descending order by payment run number. *field_name* indicates the name of a sortable field. The supported sortable fields of this operation are as below: - targetDate - status - createdDate - createdById - updatedDate - updatedById Examples: - /v1/payment-runs?sort=+createdDate - /v1/payment-runs?status=Processing&sort=-createdById,+targetDate"
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
