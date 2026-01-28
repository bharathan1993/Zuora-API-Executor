import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatecataloggroupEndpoint: ApiEndpoint = {
  "id": "put-updatecataloggroup",
  "name": "Update a catalog group",
  "description": "**Note**: This operation is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).",
  "method": "PUT",
  "path": "/v1/catalog-groups/{catalog-group-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "catalog-group-key",
      "label": "Catalog Group Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: catalog-group-key",
      "placeholder": "Enter catalog group key"
    }
  ],
  "bodyFields": [
    {
      "name": "add",
      "label": "Add",
      "type": "array",
      "required": false,
      "description": "The list of product rate plans to be added to the catalog group.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "grade",
          "label": "Grade",
          "type": "number",
          "required": false,
          "description": "The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade.\n\nA product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan individually. \n",
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the product rate plan.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the catalog group.\n",
      "section": "Additional Fields"
    },
    {
      "name": "remove",
      "label": "Remove",
      "type": "array",
      "required": false,
      "description": "The list of product rate plans to be removed from the catalog group.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the product rate plan to be removed from the catalog group.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The unique name of the catalog group.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
