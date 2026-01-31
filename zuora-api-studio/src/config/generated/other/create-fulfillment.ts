import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_fulfillmentEndpoint: ApiEndpoint = {
  "id": "create-fulfillment",
  "name": "Create fulfillments",
  "description": "",
  "method": "POST",
  "path": "/v1/fulfillments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "fulfillments",
      "label": "Fulfillments",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "orderLineItemId",
          "label": "Order Line Item Id",
          "type": "string",
          "required": false,
          "description": "The reference id of the related Order Line Item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "billTargetDate",
          "label": "Bill Target Date",
          "type": "date",
          "required": false,
          "description": "The target date for the Fulfillment to be picked up by bill run for billing.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "carrier",
          "label": "Carrier",
          "type": "string",
          "required": false,
          "description": "The carrier of the Fulfillment. The available values can be configured in **Billing Settings** > **Fulfillment Settings** through Zuora UI.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of a Fulfillment object.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the Fulfillment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Fulfillment related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBookingFromRevenueAccounting",
          "label": "Exclude Item Booking From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude Fulfillment from revenue accounting.\n\n**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue\" target=\"_blank\">Order to Revenue</a> or [Zuora Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "externalId",
          "label": "External Id",
          "type": "string",
          "required": false,
          "description": "The external id of the Fulfillment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "fulfillmentDate",
          "label": "Fulfillment Date",
          "type": "date",
          "required": false,
          "description": "The date of the Fulfillment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "fulfillmentLocation",
          "label": "Fulfillment Location",
          "type": "string",
          "required": false,
          "description": "The fulfillment location of the Fulfillment. The available values can be configured in **Billing Settings** > **Fulfillment Settings** through Zuora UI.\n",
          "section": "Additional Fields"
        },
        {
          "name": "fulfillmentSystem",
          "label": "Fulfillment System",
          "type": "string",
          "required": false,
          "description": "The fulfillment system of the Fulfillment. The available values can be configured in **Billing Settings** > **Fulfillment Settings** through Zuora UI.\n",
          "section": "Additional Fields"
        },
        {
          "name": "fulfillmentType",
          "label": "Fulfillment Type",
          "type": "string",
          "required": false,
          "description": "The type of the Fulfillment. \n",
          "enum": [
            "Delivery",
            "Return"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The quantity of the Fulfillment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "description": "The state of the Fulfillment. See [State transitions for an order, order line item, and fulfillment](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.\n",
          "enum": [
            "Executing",
            "Booked",
            "SentToBilling",
            "Complete",
            "Cancelled"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "trackingNumber",
          "label": "Tracking Number",
          "type": "string",
          "required": false,
          "description": "The tracking number of the Fulfillment.\n",
          "section": "Account Settings"
        },
        {
          "name": "fulfillmentItems",
          "label": "Fulfillment Items",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields of a Fulfillment Item object.\n",
              "section": "Additional Fields"
            },
            {
              "name": "description",
              "label": "Description",
              "type": "string",
              "required": false,
              "description": "The description of the Fulfillment Item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "itemIdentifier",
              "label": "Item Identifier",
              "type": "string",
              "required": false,
              "description": "The external identifier of the Fulfillment Item.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "processingOptions",
      "label": "Processing Options",
      "type": "object",
      "required": false,
      "description": "Processing options for generating billing documents.",
      "fields": [
        {
          "name": "billingOptions",
          "label": "Billing Options",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "documentDate",
              "label": "Document Date",
              "type": "date",
              "required": false,
              "description": "The invoice date displayed on the billing document.",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "targetDate",
              "label": "Target Date",
              "type": "date",
              "required": false,
              "description": "Date through which to calculate charges for order line items if a billing document is generated. See [What is a Target Date?](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/G_Bill_Runs/Creating_Bill_Runs#What_is_a_Target_Date.3F).",
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "runBilling",
          "label": "Run Billing",
          "type": "boolean",
          "required": false,
          "description": "Indicates if the current request needs to generate a billing document. The billing document will be generated against all Order Line Items included in this order.",
          "section": "Invoice & Document Settings"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
