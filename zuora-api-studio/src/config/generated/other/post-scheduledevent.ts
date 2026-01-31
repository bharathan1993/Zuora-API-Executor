import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_scheduledeventEndpoint: ApiEndpoint = {
  "id": "post-scheduledevent",
  "name": "Create a scheduled event",
  "description": "To create a custom scheduled event, you must specify the base object, the base field and the scheduled time.",
  "method": "POST",
  "path": "/events/scheduled-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "description": "Indicate whether the scheduled event is active or inactive.",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "apiField",
      "label": "Api Field",
      "type": "string",
      "required": true,
      "description": "The base field of the base object in the `apiObject` field, should be in date or timestamp format. The scheduled event notifications are triggered based on this date and the event parameters (before or after a specified number of days) from notification definitions. Should be specified in the pattern: ^[A-Z][\\\\w\\\\-]*$\n \nSee [Custom Scheduled Events](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications/A_Z_Custom_Scheduled_Events) for all available base fields.\n",
      "section": "Additional Fields"
    },
    {
      "name": "apiObject",
      "label": "Api Object",
      "type": "string",
      "required": true,
      "description": "The base object that the scheduled event is defined upon. The base object should contain a date or timestamp format field. Should be specified in the pattern: ^[A-Z][\\\\w\\\\-]*$\n           \nSee [Custom Scheduled Events](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications/A_Z_Custom_Scheduled_Events) for all available base objects.\n",
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
      "required": true,
      "description": "The scheduled time (hour) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant.",
      "section": "Additional Fields"
    },
    {
      "name": "minutes",
      "label": "Minutes",
      "type": "number",
      "required": true,
      "description": "The scheduled time (minute) that the scheduled event notifications are sent. This time is based on the localized timezone of your tenant.",
      "section": "Additional Fields"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "object",
      "required": false,
      "description": "The parameter definitions of the filter rule. The names of the parameters must match with the filter rule and can't be duplicated. You should specify all the parameters when creating scheduled event notifications.",
      "section": "Additional Fields"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": true,
      "description": "The display name of the scheduled event.",
      "maxLength": 500,
      "minLength": 1,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the scheduled event. Should be unique, contain no space, and be in the pattern: ^[A-Za-z]{1,}[\\\\w\\\\-]*$",
      "maxLength": 200,
      "minLength": 1,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
