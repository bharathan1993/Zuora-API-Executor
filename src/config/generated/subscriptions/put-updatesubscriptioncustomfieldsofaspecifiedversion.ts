import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatesubscriptioncustomfieldsofaspecifiedversionEndpoint: ApiEndpoint = {
  "id": "put-updatesubscriptioncustomfieldsofaspecifiedversion",
  "name": "Update subscription custom fields of a subscription version",
  "description": "Updates the custom fields of a specified subscription version.",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields",
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
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "description": "The subscription version to be updated."
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
              "description": "Use either this field or the `chargeNumber` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify a specific charge segment of a charge. See [Segmented rate plan charges](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges) for more information about charge segments.",
              "section": "Additional Fields"
            },
            {
              "name": "chargeNumber",
              "label": "Charge Number",
              "type": "string",
              "required": false,
              "description": "Use either this field or the `chargeId` field to specify the charge for which you will be updating the custom fields. By using this field you actually specify the last charge segment of a charge. See [Segmented rate plan charges](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/RatePlanCharge#Segmented_rate_plan_charges) for more information about charge segments.",
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
          "description": "Container for custom fields of a Rate Plan object.",
          "section": "Additional Fields"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": true,
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
