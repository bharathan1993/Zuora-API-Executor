import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postbulkcreategroupsEndpoint: ApiEndpoint = {
  "id": "postbulkcreategroups",
  "name": "Bulk create groups",
  "description": "Creates multiple Groups within an organization.",
  "method": "POST",
  "path": "/scim/v2/Groups/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
