import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const ingestusageeventsEndpoint: ApiEndpoint = {
  "id": "ingestusageevents",
  "name": "Ingest usage events for a meter",
  "description": "Ingests usage events directly into Zuora Mediation in real time. You can send a single event or batch multiple events in a JSON array to optimize throughput. Each event must conform to the meter's event schema.",
  "method": "POST",
  "path": "/usage/bulk/{meterGlobalId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterGlobalId",
      "label": "Meter Global Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: meterGlobalId",
      "placeholder": "Enter meter global id"
    }
  ],
  "bodyFields": [
    {
      "name": "CustomerId",
      "label": "Customer Id",
      "type": "string",
      "required": true,
      "description": "Unique identifier for the customer.",
      "section": "Additional Fields"
    },
    {
      "name": "UsageIdentifier",
      "label": "Usage Identifier",
      "type": "string",
      "required": true,
      "description": "Identifier for the usage type.",
      "section": "Additional Fields"
    },
    {
      "name": "UsageDate",
      "label": "Usage Date",
      "type": "date",
      "required": true,
      "description": "Date and time when the usage occurred.",
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": true,
      "description": "Quantity of usage.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
