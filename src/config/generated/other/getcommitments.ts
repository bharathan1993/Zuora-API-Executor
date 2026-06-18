import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentsEndpoint: ApiEndpoint = {
  "id": "getcommitments",
  "name": "List commitments for an account",
  "description": "Retrieves a paginated list of commitments for a commitment owner account.",
  "method": "GET",
  "path": "/commitments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": true,
      "description": "Account number to fetch commitments for."
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "description": "Filter commitments by type.",
      "enum": [
        "MinCommitment",
        "MaxCommitment"
      ]
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
