import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_eventtriggerEndpoint: ApiEndpoint = {
  "id": "post-eventtrigger",
  "name": "Create an event trigger",
  "description": "When you create an event trigger, you must specify the base object and define the trigger condition.",
  "method": "POST",
  "path": "/events/event-triggers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": true,
      "description": "The status of the event trigger.",
      "section": "Additional Fields"
    },
    {
      "name": "baseObject",
      "label": "Base Object",
      "type": "string",
      "required": true,
      "description": "The base object that the trigger rule is defined upon. The format of the value in this field depends on the base object type:\n- Standard object: object name, which should follow the pattern ^[A-Z][\\w\\-]*$. For example, `Invoice`.\n- Custom object: `default__<custom_object_api_name>`. For example, `default__vehicle`.\n",
      "maxLength": 100,
      "minLength": 1,
      "section": "Additional Fields"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "textarea",
      "required": true,
      "description": "The JEXL expression to be evaluated against object changes. See above for more information and an example.",
      "maxLength": 5000,
      "minLength": 1,
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "required": false,
      "description": "The description of the event trigger.",
      "maxLength": 1000,
      "section": "Additional Fields"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "description",
          "label": "Description",
          "type": "textarea",
          "required": false,
          "description": "The description of the event type.",
          "maxLength": 1000,
          "section": "Additional Fields"
        },
        {
          "name": "displayName",
          "label": "Display Name",
          "type": "string",
          "required": true,
          "description": "The display name for the event type.",
          "maxLength": 500,
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of the event. Should be unique, contain no space, and be in the pattern: ^[A-Za-z]{1,}[\\\\w\\\\-]*$",
          "maxLength": 200,
          "minLength": 1,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
