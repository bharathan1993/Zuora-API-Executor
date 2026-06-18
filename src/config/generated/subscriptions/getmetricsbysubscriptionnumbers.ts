import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getmetricsbysubscriptionnumbersEndpoint: ApiEndpoint = {
  "id": "getmetricsbysubscriptionnumbers",
  "name": "List subscription metrics by subscription numbers",
  "description": "Lists subscription metrics for the subscriptions that you specify by subscription numbers.",
  "method": "GET",
  "path": "/v1/subscriptions/subscription-metrics",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "asOfDay",
      "label": "As Of Day",
      "type": "string",
      "required": false,
      "description": "The date for the metrics. The date should be in the format `YYYY-MM-DD`. The default value is the current date."
    },
    {
      "name": "subscriptionNumbers[]",
      "label": "Subscription Numbers[]",
      "type": "array",
      "required": true,
      "description": "The subscription numbers of existing subscriptions.",
      "itemType": "string"
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
