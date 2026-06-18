import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const detachchargesfrominvoicescheduleEndpoint: ApiEndpoint = {
  "id": "detachchargesfrominvoiceschedule",
  "name": "Detach charges from an invoice schedule",
  "description": "Detaches charges from an invoice schedule. The invoice schedules you want to detach charges from must be in Fully Processed or Partially Processed status. Invoice schedules do not bill detached charges.",
  "method": "PUT",
  "path": "/v1/invoice-schedules/{scheduleKey}/detach",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "scheduleKey",
      "label": "Schedule Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of the invoice schedule to detach charges from. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001."
    }
  ],
  "bodyFields": [
    {
      "name": "specificSubscriptions",
      "label": "Specific Subscriptions",
      "type": "array",
      "required": false,
      "description": "A list of charge numbers to be detached from the invoice schedule. Each item in this array represents a specific subscription associated with the invoice schedule. Use the `chargeNumbers` field to specify all the charges you want to detach for each subscription.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeNumbers",
          "label": "Charge Numbers",
          "type": "string",
          "required": false,
          "description": "A list of charge numbers in the subscription to be detached from the invoice schedule. If you want to detach all charges, you must specify all of the charge numbers in this field.",
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
