import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postimportEndpoint: ApiEndpoint = {
  "id": "object-postimport",
  "name": "CRUD: Create an import",
  "description": "Creates a data import.",
  "method": "POST",
  "path": "/v1/object/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
