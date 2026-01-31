import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductEndpoint: ApiEndpoint = {
  "id": "updateproduct",
  "name": "Update a product",
  "description": "Updates an existing product in the Product Catalog. Use this API to update core product fields",
  "method": "PUT",
  "path": "/commerce/products",
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
      "description": "Unique identifier of the product to update.",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "Product description.",
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": false,
      "description": "Product category label, for example, base, add-on.",
      "section": "Additional Fields"
    },
    {
      "name": "custom_fields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Custom fields to set on the product. Keys must match configured custom field API names.\nValues may be strings, numbers, booleans, or arrays depending on field definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "Product effective start date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "Product effective end date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "Product name.",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
