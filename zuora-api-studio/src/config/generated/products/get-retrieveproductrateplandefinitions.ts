import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductrateplandefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductrateplandefinitions",
  "name": "List product rate plan definitions",
  "description": "Retrieves basic information about the product rate plan definitions for a product rate plan. ",
  "method": "GET",
  "path": "/v1/product-rateplan-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
