import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getschemaofscimEndpoint: ApiEndpoint = {
  "id": "getschemaofscim",
  "name": "List all schemas of resources",
  "description": "Lists all schemas for all supported resources. A schema is a collection of attribute definitions that describe the contents of an entire or partial resource, e.g., \"urn:ietf:params:scim:schemas:core:2.0:User\".  ",
  "method": "GET",
  "path": "/scim/v2/Schemas",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
