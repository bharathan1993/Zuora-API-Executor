import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryusagebykeyEndpoint: ApiEndpoint = {
  "id": "queryusagebykey",
  "name": "Retrieve a usage record",
  "description": "Retrieve the details of a specific Usage Record object.",
  "method": "GET",
  "path": "/object-query/usages/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Object ID or Number."
    }
  ],
  "queryParams": [
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The maximum number of results to return in a single page. If the specified `pageSize` is less than 1 or greater than 99, Zuora will return a 400 error.",
      "defaultValue": 10
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false,
      "description": "A cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with `next_page=W3sib3JkZXJ=`, your subsequent call can include `cursor=W3sib3JkZXJ=` in order to fetch the next page of the list."
    },
    {
      "name": "sort[]",
      "label": "Sort[]",
      "type": "array",
      "required": false,
      "description": "A case-insensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. `accountnumber.ASC`) or descending (e.g. `accountnumber.DESC`). You cannot sort on properties in arrays. If the array-type properties are specified for the `sort[]` parameter, they are ignored.",
      "itemType": "string"
    },
    {
      "name": "expand[]",
      "label": "Expand[]",
      "type": "array",
      "required": false,
      "description": "Allows you to expand responses by including related object information in a single call.",
      "itemType": "string",
      "itemEnum": [
        "account"
      ]
    },
    {
      "name": "filter[]",
      "label": "Filter[]",
      "type": "array",
      "required": false,
      "description": "A case-insensitive filter on the list.",
      "itemType": "string"
    },
    {
      "name": "fields[]",
      "label": "Fields[]",
      "type": "array",
      "required": false,
      "description": "A case-insensitive query parameter that allows you to specify which fields are returned in the response.",
      "itemType": "string"
    },
    {
      "name": "includeNullFields",
      "label": "Include Null Fields",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to include fields with the `null` value in the response. - If set to `true`, all fields will be returned in the response, including those with the `null` value. - If set to `false`, only fields with non-null values will be returned.",
      "defaultValue": false
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
