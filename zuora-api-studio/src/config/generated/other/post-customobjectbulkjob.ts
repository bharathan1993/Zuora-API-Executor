import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectbulkjobEndpoint: ApiEndpoint = {
  "id": "post-customobjectbulkjob",
  "name": "Submit a custom object bulk job",
  "description": "Submits a bulk job request for a bulk operation on the specified custom object records. A succcessful call returns a newly created bulk job. The job ID can be used to poll the job status or upload the CSV file if it is a `create` or `update` job.",
  "method": "POST",
  "path": "/objects/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "filter",
      "label": "Filter",
      "type": "object",
      "required": false,
      "description": "Filters to determine which records to be deleted in the bulk delete operation.",
      "fields": [
        {
          "name": "conditions",
          "label": "Conditions",
          "type": "array",
          "required": true,
          "description": "Group of field filter conditions that are evaluated in conjunction with each other using the AND operator. The minimum number of conditions is 1 and the maximum is 2.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": true,
              "description": "The object field that is evaluated. Only filterable fields can be evaluated in the filter.",
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": true,
              "enum": [
                "EQ",
                "GT",
                "LT",
                "GE",
                "LE"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": true,
              "description": "The value that the filterable `field` is evaluated against in the filter. The data type of `value` is consistent with that of the `field`.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "The object that the bulk operation performs on.",
      "section": "Additional Fields"
    },
    {
      "name": "operation",
      "label": "Operation",
      "type": "string",
      "required": true,
      "description": "The operation that the bulk job performs. Only the users that have the \"Delete Custom Objects\" permission can submit a `delete` bulk job request. Only the users that have the \"Edit Custom Objects\" permission can submit a `create` or `update` bulk job request. See [Platform Permissions](https://knowledgecenter.zuora.com/Billing/Tenant_Management/A_Administrator_Settings/User_Roles/h_Platform_Roles#Platform_Permissions) for more information.",
      "enum": [
        "delete",
        "create",
        "update"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "namespace",
      "label": "Namespace",
      "type": "string",
      "required": true,
      "description": "The namespace of the object. Custom objects belong to the `default` namespace. Zuora standard objects belong to the `com_zuora` namespace. Bulk job operations on the following Zuora standard objects are supported:\n* SavedQuery\n",
      "enum": [
        "default",
        "com_zuora"
      ],
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
