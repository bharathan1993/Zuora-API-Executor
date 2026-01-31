import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductchargedefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductchargedefinitions",
  "name": "List product charge definitions",
  "description": "Retrieves basic information about the product charge definitions. ",
  "method": "GET",
  "path": "/v1/product-charge-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
