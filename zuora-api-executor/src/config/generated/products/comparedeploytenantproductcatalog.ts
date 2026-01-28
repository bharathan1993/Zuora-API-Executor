import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const comparedeploytenantproductcatalogEndpoint: ApiEndpoint = {
  "id": "comparedeploytenantproductcatalog",
  "name": "Compare and deploy the product catalog of a tenant to a target tenant",
  "description": "Compare and deploy the product catalog of a tenant to a target tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployments/tenant/product_catalog",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
