import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "post-createinvoiceschedule",
  "name": "Create an invoice schedule",
  "description": "Creates an invoice schedule.",
  "method": "POST",
  "path": "/v1/invoice-schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "description": "The ID or number of the account associated with the invoice schedule.",
      "section": "Account Settings"
    },
    {
      "name": "additionalSubscriptionsToBill",
      "label": "Additional Subscriptions To Bill",
      "type": "array",
      "required": false,
      "description": "A list of the numbers of the subscriptions that need to be billed together with the invoice schedule. One invoice schedule can have at most 600 additional subscriptions.",
      "itemType": "string",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceSeparately",
      "label": "Invoice Separately",
      "type": "boolean",
      "required": false,
      "description": "Whether the invoice items created from the invoice schedule appears on a separate invoice when Zuora generates invoices.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "Comments on the invoice schedule.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "orders",
      "label": "Orders",
      "type": "array",
      "required": false,
      "description": "A list of the IDs or numbers of the orders associated with the invoice schedule. One invoice schedule can be associated with at most 10 orders.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "scheduleItems",
      "label": "Schedule Items",
      "type": "array",
      "required": false,
      "description": "Container for invoice schedule items. One invoice schedule can have at most 50 invoice schedule items.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of the invoice to be generated during the processing of the invoice schedule item. You can only specify either the `amount` field or `percentage` field in one request. - If you choose to specify the `amount` field in the request, `null` is returned as the value of the `percentage` field in the corresponding response. - If you choose to specify the `percentage` field in the request, the value of the `amount` field returned in the corresponding response is calculated based on the percentage of the total amount.",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The name of the invoice schedule item.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "percentage",
          "label": "Percentage",
          "type": "number",
          "required": false,
          "description": "The percentage of the total amount to be billed during the processing of the invoice schedule item. You can only specify either the `amount` field or `percentage` field in one request. - If you choose to specify the `amount` field in the request, `null` is returned as the value of the `percentage` field in the corresponding response. - If you choose to specify the `percentage` field in the request, the value of the `amount` field returned in the corresponding response is calculated based on the percentage of the total amount.",
          "section": "Additional Fields"
        },
        {
          "name": "runDate",
          "label": "Run Date",
          "type": "date",
          "required": false,
          "description": "The date in the tenant’s time zone when the invoice schedule item is planned to be processed to generate an invoice. When specifying run dates for invoice schedule items, consider that: - An invoice schedule item with a blank run date will not be executed. - You can only update the run date for an invoice schedule item in Pending status. - If the run date of an invoice schedule item is left empty, the dates of all subsequent invoice schedule items must also be blank. - You must specify run dates in chronological order for invoice schedule items.",
          "section": "Additional Fields"
        },
        {
          "name": "targetDateForAdditionalSubscriptions",
          "label": "Target Date For Additional Subscriptions",
          "type": "date",
          "required": false,
          "description": "The date in the tenant's time zone used by the invoice schedule to determine which fixed-period regular charges to be billed together with the invoice schedule item. The regular charges must come from the subscriptions specified in the `additionalSubscriptionsToBill` field.",
          "section": "Subscription Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "specificSubscriptions",
      "label": "Specific Subscriptions",
      "type": "array",
      "required": false,
      "description": "A list of the numbers of specific subscriptions associated with the invoice schedule. - If the subscriptions specified in this field belong to the orders specified in the `orders` field, only the specific subscriptions instead of the orders are associated with the invoice schedule. - If only the `orders` field is specified, all the subscriptions from the order are associated with the invoice schedule. Example: ``` { \"orders\": [ \"O-00000001\", \"O-00000002\" ], \"specificSubscriptions\": [ { \"orderKey\": \"O-00000001\", \"subscriptionKey\": \"S-00000001\" } ] } ``` - For the order with number O-00000001, only subscription S-00000001 contained in the order is associated with the invoice schedule. - For the order with number O-00000002, all subscriptions contained in the order are associated with the invoice schedule.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeNumbers",
          "label": "Charge Numbers",
          "type": "string",
          "required": false,
          "description": "A list of charges in the subscription that are chosen to be included in the invoice schedule.",
          "section": "Account Settings"
        },
        {
          "name": "orderKey",
          "label": "Order Key",
          "type": "string",
          "required": false,
          "description": "The unique ID or number of the order associated with the invoice schedule.",
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionKey",
          "label": "Subscription Key",
          "type": "string",
          "required": false,
          "description": "The unique number of the subscription contained in the order associated with the invoice schedule.",
          "section": "Subscription Settings"
        }
      ],
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
