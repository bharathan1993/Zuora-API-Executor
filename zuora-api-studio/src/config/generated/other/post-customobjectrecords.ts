import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectrecordsEndpoint: ApiEndpoint = {
  "id": "post-customobjectrecords",
  "name": "Create custom object records",
  "description": "Creates custom object records with the given type.",
  "method": "POST",
  "path": "/objects/records/default/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "Path parameter: object",
      "placeholder": "Enter object"
    }
  ],
  "bodyFields": [
    {
      "name": "allowPartialSuccess",
      "label": "Allow Partial Success",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the records that pass the schema validation should be created when not all records in the request pass the schema validation.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "records",
      "label": "Records",
      "type": "array",
      "required": true,
      "description": "A list of custom object records to be created",
      "itemType": "object",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
