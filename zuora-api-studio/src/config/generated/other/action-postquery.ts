import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postqueryEndpoint: ApiEndpoint = {
  "id": "action-postquery",
  "name": "Query",
  "description": "The query call sends a query expression by specifying the object to query, the fields to retrieve from that object, and any filters to determine whether a given object should be queried.",
  "method": "POST",
  "path": "/v1/action/query",
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
      "name": "queryString",
      "label": "Query String",
      "type": "string",
      "required": true,
      "description": "[ZOQL](https://knowledgecenter.zuora.com/DC_Developers/K_Zuora_Object_Query_Language) expression that specifies the object to query, the fields to retrieve, and any filters.\n\n**Note:** When querying one time charges from ProductRatePlanCharge, you need to specify the `ChargeType` value as `One-Time` rather than `OneTime`.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
