import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const gettheressourcetypeEndpoint: ApiEndpoint = {
  "id": "gettheressourcetype",
  "name": "List all resource types",
  "description": "Retrieves all Resource Types managed by OneId. Resource Types define the resource name, endpoint URL, schemas, and other metadata that indicate where a resource is managed and how it is composed, e.g., \"User\" or \"Group\".",
  "method": "GET",
  "path": "/scim/v2/ResourceTypes",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
