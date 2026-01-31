import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postquerymoreEndpoint: ApiEndpoint = {
  "id": "action-postquerymore",
  "name": "QueryMore",
  "description": "Use queryMore to request additional results from a previous query call. If your initial query call returns more than 2000 results, you can use queryMore to query for the additional results.",
  "method": "POST",
  "path": "/v1/action/queryMore",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "conf",
      "label": "Conf",
      "type": "object",
      "required": false,
      "description": "Configuration of the query result.",
      "fields": [
        {
          "name": "batchSize",
          "label": "Batch Size",
          "type": "number",
          "required": false,
          "description": "Defines the batch size of the query result. The range is 1 - 2000 (inclusive). If a value higher than 2000 is submitted, only 2000 results are returned.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "queryLocator",
      "label": "Query Locator",
      "type": "string",
      "required": true,
      "description": "A marker passed to QueryMore to get the next set of results.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
