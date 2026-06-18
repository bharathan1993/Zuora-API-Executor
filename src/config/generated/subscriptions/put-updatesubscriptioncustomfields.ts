import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatesubscriptioncustomfieldsEndpoint: ApiEndpoint = {
  "id": "put-updatesubscriptioncustomfields",
  "name": "Update subscription custom fields",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora Subscribe and Amend customer, we recommend you enable Orders Harmonization to access the Orders feature. With Orders, you can access both existing functions for subscription and billing management and the new features on Zuora Billing.",
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
      "description": "The subscription number to be updated."
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of a Subscription object.",
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
              "description": "Use either this field or the `chargeNumber` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify a specific charge segment of a charge. See Segmented rate plan charges for more information about charge segments.",
              "section": "Additional Fields"
            },
            {
              "name": "chargeNumber",
              "label": "Charge Number",
              "type": "string",
              "required": false,
              "description": "Use either this field or the `chargeId` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify the last charge segment of a charge. See Segmented rate plan charges for more information about charge segments.",
              "section": "Account Settings"
            },
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields of a Rate Plan Charge object.",
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
          "description": "Container for custom fields of the Rate Plan object. The custom fields of the Rate Plan object are used when rate plans are subscribed.",
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
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
