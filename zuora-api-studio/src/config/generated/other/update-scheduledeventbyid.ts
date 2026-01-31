import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const update_scheduledeventbyidEndpoint: ApiEndpoint = {
  "id": "update-scheduledeventbyid",
  "name": "Update a scheduled event by ID",
  "description": "",
  "method": "PUT",
  "path": "/events/scheduled-events/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "description": "Indicate whether the scheduled event is active or inactive",
      "section": "Additional Fields"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "textarea",
      "required": false,
      "description": "The filter rule conditions, written in [JEXL](http://commons.apache.org/proper/commons-jexl/). The scheduled event is triggered only if the condition is evaluated as true.\nThe rule might contain event context merge fields and data source merge fields. Data source merge fields must be from [the base object of the event or from the joined objects of the base object](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL#Data_Sources_and_Objects).\nScheduled events with invalid merge fields will fail to evaluate, thus will not be triggered. For example, to trigger an invoice due date scheduled event to only invoices with an amount over 1000, you would define the following condition:\n\n```Invoice.Amount > 1000.0```\n\n`Invoice.Amount` refers to the `Amount` field of the Zuora object `Invoice`.\n",
      "maxLength": 65535,
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "required": false,
      "description": "The description of the scheduled event.",
      "maxLength": 1000,
      "section": "Additional Fields"
    },
    {
      "name": "hours",
      "label": "Hours",
      "type": "number",
      "required": false,
      "description": "The scheduled time (hour) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant.",
      "section": "Additional Fields"
    },
    {
      "name": "minutes",
      "label": "Minutes",
      "type": "number",
      "required": false,
      "description": "The scheduled time (minute) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant.",
      "section": "Additional Fields"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "object",
      "required": false,
      "description": "The parameters of the filter rule. The names of the parameters must match with the filter rule and can't be duplicated.",
      "section": "Additional Fields"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": false,
      "description": "The display name of the scheduled event.",
      "maxLength": 500,
      "minLength": 1,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
