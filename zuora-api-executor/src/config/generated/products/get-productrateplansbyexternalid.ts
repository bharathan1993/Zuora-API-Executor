import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productrateplansbyexternalidEndpoint: ApiEndpoint = {
  "id": "get-productrateplansbyexternalid",
  "name": "List product rate plans by external ID",
  "description": "Retrieves information about one or multiple product rate plans by external ID.",
  "method": "GET",
  "path": "/v1/product-rate-plans/external-id/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
