import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatesubscriptioncustomfieldsEndpoint: ApiEndpoint = {
  "id": "put-updatesubscriptioncustomfields",
  "name": "Update subscription custom fields",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend\" target=\"_blank\">Subscribe and Amend</a> customer, we recommend you enable <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization\" target=\"_blank\">Orders Harmonization</a> to access the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders\" target=\"_blank\">Orders</a> feature. With Orders, you can access both existing functions for subscription and billing management and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders\" target=\"_blank\">new features</a> on Zuora Billing.",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscriptionNumber}/customFields",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscriptionNumber",
      "placeholder": "Enter subscription number"
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of a Subscription object.\n",
      "section": "Additional Fields"
    },
    {
      "name": "ratePlans",
      "label": "Rate Plans",
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
              "name": "chargeId",
              "label": "Charge Id",
              "type": "string",
              "required": false,
              "description": "Use either this field or the `chargeNumber` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify a specific charge segment of a charge. See <a href=\"https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges\" target=\"_blank\">Segmented rate plan charges</a> for more information about charge segments.\n",
              "section": "Additional Fields"
            },
            {
              "name": "chargeNumber",
              "label": "Charge Number",
              "type": "string",
              "required": false,
              "description": "Use either this field or the `chargeId` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify the last charge segment of a charge. See <a href=\"https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges\" target=\"_blank\">Segmented rate plan charges</a> for more information about charge segments.\n",
              "section": "Account Settings"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields of a Rate Plan Charge object.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.\n",
          "section": "Additional Fields"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "The rate plan id in any version of the subscription. This will be linked to the only one rate plan in the current version.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
