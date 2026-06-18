import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductrateplanEndpoint: ApiEndpoint = {
  "id": "updateproductrateplan",
  "name": "Update a product rate plan",
  "description": "Updates an existing Product Rate Plan (PRP) in the Product Catalog.",
  "method": "PUT",
  "path": "/commerce/plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Unique identifier of the Product Rate Plan to update.",
      "section": "Additional Fields"
    },
    {
      "name": "grade",
      "label": "Grade",
      "type": "number",
      "required": false,
      "description": "Plan grade or display rank used for ordering in catalogs or UIs.",
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "Rate plan effective start date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "Rate plan effective end date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "Rate plan name.",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
