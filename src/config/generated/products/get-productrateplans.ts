import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productrateplansEndpoint: ApiEndpoint = {
  "id": "get-productrateplans",
  "name": "List all product rate plans of a product",
  "description": "Retrieves information about all product rate plans of a specific product.",
  "method": "GET",
  "path": "/v1/products/{product-key}/product-rate-plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-key",
      "label": "Product Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or SKU of a product. For example, 2c92c0f96487e16a016487f663c71a61 or SKU-00000987."
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The index number of the page that you want to retrieve. This parameter is dependent on `pageSize`. You must set `pageSize` before specifying `page`. For example, if you set `pageSize` to `20` and `page` to `2`, the 21st to 40th records are returned in the response.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The number of records returned per page in the response.",
      "defaultValue": 20
    },
    {
      "name": "show-charge-definitions",
      "label": "Show Charge Definitions",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to include the product charge definitions of this rate plan in the response. **Note**: This parameter is applicable only if the Attribute Based Pricing feature is enabled. To access this feature, submit a request at Zuora Global Support."
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
