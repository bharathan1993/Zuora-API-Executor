import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlistgroupsEndpoint: ApiEndpoint = {
  "id": "getlistgroups",
  "name": "List groups",
  "description": "Returns a paginated list of groups, ten groups per page by default. Use the startIndex and count (max 100) query parameters to paginate long lists of groups. It's possible to return a list of specific types of groups using the filter parameter.",
  "method": "GET",
  "path": "/scim/v2/Groups",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
