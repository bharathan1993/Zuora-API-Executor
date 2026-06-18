import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlatestqueryjobofspecificeventstoreEndpoint: ApiEndpoint = {
  "id": "getlatestqueryjobofspecificeventstore",
  "name": "Retrieve the latest query job of a specific event store",
  "description": "Retrieves the most recent query job executed on a specific event store in Zuora Mediation. It returns metadata such as query type (for example, DELETE), status, record counts, and timestamps.",
  "method": "GET",
  "path": "/meters/events/stores/{eventStoreId}/jobs/latest",
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
      "description": "ID of the event store."
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
