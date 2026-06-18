import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentperiodsEndpoint: ApiEndpoint = {
  "id": "getcommitmentperiods",
  "name": "List periods for a commitment",
  "description": "Lists periods of the commitment. You can paginate the results using `page` and `pageSize` query parameters.",
  "method": "GET",
  "path": "/commitments/periods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "commitmentKey",
      "label": "Commitment Key",
      "type": "string",
      "required": false,
      "description": "The unique identifier or number of the commitment. Required if `startDate`, `endDate`, and `accountNumber` are not all provided. Either specify `commitmentKey`, or provide `startDate`, `endDate`, and `accountNumber` together."
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "Start date of the billing period in `YYYY-MM-DD` format. Date filters must be up to 5 years apart. Required if `commitmentKey` is not provided. Must be used together with `endDate` and `accountNumber`."
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "End date of the billing period in `YYYY-MM-DD` format. Date filters must be up to 5 years apart. Required if `commitmentKey` is not provided. Must be used together with `startDate` and `accountNumber`."
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "Account number to which the commitment belongs to. Required if `commitmentKey` is not provided. Must be used together with `startDate` and `endDate`."
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "Page number for pagination.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "Page size for pagination.",
      "defaultValue": 20
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
