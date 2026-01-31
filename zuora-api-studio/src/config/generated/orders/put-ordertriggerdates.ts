import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_ordertriggerdatesEndpoint: ApiEndpoint = {
  "id": "put-ordertriggerdates",
  "name": "Update order action trigger dates",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend\" target=\"_blank\">Subscribe and Amend</a> customer, we recommend you enable <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization\" target=\"_blank\">Orders Harmonization</a> to access the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders\" target=\"_blank\">Orders</a> feature. With Orders, you can access both existing functions for subscription and billing management and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders\" target=\"_blank\">new features</a> on Zuora Billing.",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/triggerDates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: orderNumber",
      "placeholder": "Enter order number"
    }
  ],
  "bodyFields": [
    {
      "name": "subscriptions",
      "label": "Subscriptions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "orderActions",
          "label": "Order Actions",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "charges",
              "label": "Charges",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "chargeNumber",
                  "label": "Charge Number",
                  "type": "string",
                  "required": false,
                  "description": "Charge number of the charge which needs the triggering date to be provided. The charge's `triggerEvent` must have been set as `SpecificDate`.",
                  "section": "Account Settings"
                },
                {
                  "name": "specificTriggerDate",
                  "label": "Specific Trigger Date",
                  "type": "date",
                  "required": false,
                  "description": "Date in YYYY-MM-DD format. The specific trigger date you are to set for the charge.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "sequence",
              "label": "Sequence",
              "type": "number",
              "required": true,
              "description": "Identifies which order action will have its triggering dates updated. \n",
              "section": "Additional Fields"
            },
            {
              "name": "triggerDates",
              "label": "Trigger Dates",
              "type": "array",
              "required": false,
              "description": "Container for the service activation and customer acceptance dates of the order action.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": false,
                  "description": "Name of the trigger date of the order action.",
                  "enum": [
                    "ServiceActivation",
                    "CustomerAcceptance"
                  ],
                  "section": "Account Settings"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
                  "required": false,
                  "description": "Trigger date in YYYY-MM-DD format. The date you are to set as the service activation date or the customer acceptance date.\n",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": true,
          "description": "Subscription number of a subscription in the `Pending` order for which you are to update the triggering dates. For example, A-S00000001.\n",
          "maxLength": 100,
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
