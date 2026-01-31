import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectdefinitionsEndpoint: ApiEndpoint = {
  "id": "post-customobjectdefinitions",
  "name": "Create custom object definitions",
  "description": "You can post custom object definitions with the request body schema described below. ",
  "method": "POST",
  "path": "/objects/definitions/default",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "definitions",
      "label": "Definitions",
      "type": "object",
      "required": false,
      "description": "The custom object definitions. This object maps types to custom object definitions.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
