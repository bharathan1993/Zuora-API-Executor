import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_deleteusageEndpoint: ApiEndpoint = {
  "id": "object-deleteusage",
  "name": "CRUD: Delete a usage record",
  "description": "Deletes a usage record. Usage records that are associated with a dynamic pricing usage charge cannot be deleted with this legacy Billing endpoint. When a delete request targets such a record, the operation fails and the usage record is not removed. Operations on dynamic pricing usage are supported only via Mediation-driven flows.",
  "method": "DELETE",
  "path": "/v1/object/usage/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
