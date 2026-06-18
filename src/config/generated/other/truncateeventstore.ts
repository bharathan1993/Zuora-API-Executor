import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const truncateeventstoreEndpoint: ApiEndpoint = {
  "id": "truncateeventstore",
  "name": "Truncate all data from an event store",
  "description": "Truncates (deletes) all events from a specific event store in Zuora Mediation.",
  "method": "POST",
  "path": "/meters/events/stores/{eventStoreId}/truncate",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "eventStoreId",
      "label": "Event Store Id",
      "type": "number",
      "required": true,
      "description": "ID of the event store to truncate."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
