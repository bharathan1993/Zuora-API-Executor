import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_processsettingsbatchrequestEndpoint: ApiEndpoint = {
  "id": "post-processsettingsbatchrequest",
  "name": "Submit settings requests",
  "description": "Submit a batch of settings requests by this single API operation.",
  "method": "POST",
  "path": "/settings/batch-requests",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "requests",
      "label": "Requests",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "body",
          "label": "Body",
          "type": "object",
          "required": false,
          "description": "Request payload if any",
          "section": "Additional Fields"
        },
        {
          "name": "children",
          "label": "Children",
          "type": "array",
          "required": false,
          "description": "An array of requests that can only be executed after its parent request has been executed successfully.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "body",
              "label": "Body",
              "type": "object",
              "required": false,
              "description": "Request payload if any",
              "section": "Additional Fields"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "The id of the request. You can set it to any string. It must be unique within the whole batch.\n",
              "section": "Additional Fields"
            },
            {
              "name": "method",
              "label": "Method",
              "type": "string",
              "required": false,
              "description": "One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.\n",
              "enum": [
                "GET",
                "HEAD",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "OPTIONS",
                "TRACE"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "url",
              "label": "Url",
              "type": "string",
              "required": false,
              "description": "The relative URL of the setting. It is the same as in the `pathPattern` field in the response body of [Listing all settings](https://developer.zuora.com/api-references/api/operation/GET_ListAllSettings). For example, `/billing-rules`.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The id of the request. You can set it to any string. It must be unique within the whole batch.\n",
          "section": "Additional Fields"
        },
        {
          "name": "method",
          "label": "Method",
          "type": "string",
          "required": false,
          "description": "One of the HTTP methods supported by the setting endpoint, for example, GET,PUT,POST or DELETE.\n",
          "enum": [
            "GET",
            "HEAD",
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
            "OPTIONS",
            "TRACE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "url",
          "label": "Url",
          "type": "string",
          "required": false,
          "description": "The relative URL of the setting. It is the same as in the `pathPattern` field in the response body of [Listing all Settings](https://developer.zuora.com/api-references/api/operation/GET_ListAllSettings). For example, `/billing-rules`.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
