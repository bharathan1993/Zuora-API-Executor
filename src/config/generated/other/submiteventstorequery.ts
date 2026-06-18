import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const submiteventstorequeryEndpoint: ApiEndpoint = {
  "id": "submiteventstorequery",
  "name": "Submit an event store query",
  "description": "Submits a SQL-style asynchronous query to the Event Store to retrieve and inspect metering events for validation, troubleshooting, and reconciliation. The API returns a `queryId` that can be used to poll and fetch paginated results.",
  "method": "POST",
  "path": "/meters/event-store-queries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": true,
      "description": "The query clause.",
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
