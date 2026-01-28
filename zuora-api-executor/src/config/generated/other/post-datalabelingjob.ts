import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_datalabelingjobEndpoint: ApiEndpoint = {
  "id": "post-datalabelingjob",
  "name": "Submit a data labeling job",
  "description": "Submits a data labeling job.",
  "method": "POST",
  "path": "/v1/multi-organizations/data-labeling-job",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "ids",
      "label": "Ids",
      "type": "array",
      "required": false,
      "description": "The IDs of the objects to be labeled, only required if the `queryType` is `ById`.\n\nThere is a 4MB limit of the JSON payload, so in case of a large number of IDs, please make sure the payload is less than 4MB.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "objectType",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "description": "The object type of the data labeling job.\n\nCurrently, the following objects are supported:\n  * `User`\n  * `Account` \n\n    All the associated transaction objects of the account being labeled will automatically inherit the org label of the account.\n  * `Product`\n\n    You have to label the Account object first, make sure all accounts have been labeled, then you can proceed with the Product object. \n\n    You can get all the unlabeled accounts by running a Data Source export job, with the following query:\n    ``` sql\n    SELECT Id, Name FROM Account WHERE Organization.Id IS NULL\n    ```              \n    \n    All the ProductRatePlanS of the product will be automatically labeled with the same `orgs`.\n    \n    When labeling products, you can omit the `orgs` parameter, i.e, leave it empty, the system will find all the subscriptions that include the product and get the org list of those subscriptions, then label the product with those `orgs`, aka, the `derived orgs`.\n    \n    You can also explicitly specify the orgs parameter, in that case, you will need to provide a super set of the `derived orgs`.  \n  * `BillRun`\n\n    You don't need to specify the `orgs` parameter, we will label the `BillRun` with all the orgs because existing runs could pick up all accounts. You can definitely create new bill run with certain `orgs` to operate separately by `orgs`.\n  * `PaymentRun`\n\n    Same as BillRun.\n  * `ForecastRun`\n",
      "section": "Additional Fields"
    },
    {
      "name": "orgIds",
      "label": "Org Ids",
      "type": "array",
      "required": false,
      "description": "The IDs of the organizations that the data labeling job will associate with the data to be labeled. Either the `orgIds` or `orgs` field is required.\n\nFor `Account` object, one and only one org Id is required.\n\nFor configuration objects, `null` and `[]` are treated differently, use `null` to unlabel the object, `[]` to label it with all orgs.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "orgs",
      "label": "Orgs",
      "type": "array",
      "required": false,
      "description": "The names of the organizations that the data labeling job will associate with the data to be labeled. Either the `orgIds` or `orgs` field is required.\n\nFor `Account` object, one and only one org name is required.\n\nFor configuration objects, `null` and `[]` are treated differently, use `null` to unlabel the object, `[]` to label it with all orgs.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": false,
      "description": "The query that the data labeling job will run to fetch the data to be labeled, only required if the `queryType` is `ByZoql`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "queryType",
      "label": "Query Type",
      "type": "string",
      "required": true,
      "description": "Specifies the type of query that the data labeling job will run to fetch the data to be labeled.\n\n* `ByZoql` - The data labeling job will run a ZOQL query which is specified in the `query` field to fetch the data to be labeled.\n* `ById` - The data labeling job will fetch the data to be labeled by the IDs specified in the `ids` field.\n",
      "enum": [
        "ByZoql",
        "ById"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
