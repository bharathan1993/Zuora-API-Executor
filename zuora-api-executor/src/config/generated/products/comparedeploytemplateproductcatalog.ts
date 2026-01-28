import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const comparedeploytemplateproductcatalogEndpoint: ApiEndpoint = {
  "id": "comparedeploytemplateproductcatalog",
  "name": "Compare and deploy a template for product catalog to a tenant",
  "description": "Compare and deploy a template for product catalog to a tenant.",
  "method": "POST",
  "path": "/deployment-manager/deployments/template/product_catalog",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
