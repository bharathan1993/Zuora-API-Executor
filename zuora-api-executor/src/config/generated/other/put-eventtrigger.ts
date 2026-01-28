import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_eventtriggerEndpoint: ApiEndpoint = {
  "id": "put-eventtrigger",
  "name": "Update an event trigger",
  "description": "",
  "method": "PUT",
  "path": "/events/event-triggers/{id}",
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
      "description": "The status of the trigger.",
      "section": "Additional Fields"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "textarea",
      "required": false,
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
      "description": "The description of the trigger.",
      "maxLength": 1000,
      "section": "Additional Fields"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "object",
      "required": false,
      "description": "The type of events to be triggered.",
      "fields": [
        {
          "name": "description",
          "label": "Description",
          "type": "textarea",
          "required": false,
          "description": "The description for the event type.",
          "maxLength": 1000,
          "section": "Additional Fields"
        },
        {
          "name": "displayName",
          "label": "Display Name",
          "type": "string",
          "required": false,
          "description": "The display name for the event type.",
          "maxLength": 500,
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
