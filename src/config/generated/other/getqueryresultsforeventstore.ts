import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getqueryresultsforeventstoreEndpoint: ApiEndpoint = {
  "id": "getqueryresultsforeventstore",
  "name": "Retrieve the results for an event store query",
  "description": "Retrieves paginated result rows and column metadata for a previously submitted Event Store query using its `queryId`, including total row count, row-level field values, and readiness status. Query execution is asynchronous.",
  "method": "GET",
  "path": "/meters/event-store-queries/{queryId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "queryId",
      "label": "Query Id",
      "type": "string",
      "required": true,
      "description": "ID of the query."
    }
  ],
  "queryParams": [
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "Page size for page-based pagination of query results. Must be used together with the `page` parameter. Maximum 50.",
      "defaultValue": 20
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "1-based page index for page-based pagination of query results. Combine with `pageSize` and the `data` > `totalCount` field in the response to iterate through all matching rows.",
      "defaultValue": 1
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
