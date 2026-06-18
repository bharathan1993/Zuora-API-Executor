import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const ingestusageeventsEndpoint: ApiEndpoint = {
  "id": "ingestusageevents",
  "name": "Ingest usage events for a meter",
  "description": "Ingests usage events directly into Zuora Mediation in real time. You can send a single event or batch multiple events in a JSON array to optimize throughput. Each event must conform to the meter's event schema. This operation is supported only for meters that use the Streaming API as their source in Zuora Mediation. You can use this API to bulk-ingest events into a meter only when the meter's source is configured as a Streaming API operator. For meters that use other sources, use the appropriate ingestion mechanism for that source instead.",
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
      "description": "The global ID of the meter."
    }
  ],
  "bodyFields": [
    {
      "name": "CustomerId",
      "label": "Customer Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UsageIdentifier",
      "label": "Usage Identifier",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UsageDate",
      "label": "Usage Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": true,
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
