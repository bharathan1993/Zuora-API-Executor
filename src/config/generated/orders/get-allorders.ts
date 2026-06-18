import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allordersEndpoint: ApiEndpoint = {
  "id": "get-allorders",
  "name": "List orders",
  "description": "**Note:** This feature is only available if you have the [Order Metrics](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.",
  "method": "GET",
  "path": "/v1/orders",
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
      "name": "dateFilterOption",
      "label": "Date Filter Option",
      "type": "string",
      "required": false,
      "description": "The date type to filter on. This field value can be orderDate or updatedDate. Default is orderDate."
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "The result will only contain the orders with the date of dateFilterOption later than or equal to this date."
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "The result will only contains orders with the date of dateFilterOption earlier than or equal to this date."
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "description": "The status of orders.",
      "enum": [
        "all",
        "cancelled",
        "completed",
        "draft",
        "executing",
        "failed",
        "pending",
        "scheduled"
      ]
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
