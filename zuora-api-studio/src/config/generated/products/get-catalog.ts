import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_catalogEndpoint: ApiEndpoint = {
  "id": "get-catalog",
  "name": "List all products",
  "description": "Retrieves the entire product catalog, including all products, features, and their corresponding product rate plans, charges. Products are returned in reverse chronological order on the `UpdatedDate` field. ",
  "method": "GET",
  "path": "/v1/catalog/products",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
