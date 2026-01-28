import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allcustomobjectdefinitionsinnamespaceEndpoint: ApiEndpoint = {
  "id": "get-allcustomobjectdefinitionsinnamespace",
  "name": "List custom object definitions",
  "description": "Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://developer.zuora.com/api-references/api/operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.",
  "method": "GET",
  "path": "/objects/definitions/default",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
