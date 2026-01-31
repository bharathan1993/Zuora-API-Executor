import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createbulkjobEndpoint: ApiEndpoint = {
  "id": "createbulkjob",
  "name": "Create a bulk job",
  "description": "Creates a new bulk job. The job type can be one of Import, Delete, Update, or Cancel.",
  "method": "POST",
  "path": "/bulk-data/bulk-jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Name of the job. Max length is 255 characters",
      "section": "Account Settings"
    },
    {
      "name": "customObjectNamespace",
      "label": "Custom Object Namespace",
      "type": "string",
      "required": false,
      "description": "Namespace of the custom object. Applicable only when isCustomObject is true. Default namespace is 'default'.",
      "section": "Account Settings"
    },
    {
      "name": "objectType",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "description": "Type of the object. Supported object types:   \n- `account`\n- `accountingcode`\n- `accountingperiod`\n- `amendment`\n- `bill-run`\n- `bill-run-batches`\n- `bill-run-filters`\n- `contact`\n- `credit-memo`\n- `credit-memo-from-charge`\n- `credit-memo-from-invoice`\n- `debit-memo`\n- `debit-memo-from-charge`\n- `debit-memo-from-invoice`\n- `invoice`\n- `journal-entry`\n- `journal-run`\n- `offer`\n- `omni-channel-subscription`\n- `order`\n- `order-create-order-line-item`\n- `order-create-subscription-existing-account`\n- `order-create-subscription-existing-account-with-volume-charge`\n- `order-create-subscription-with-new-account`\n- `order-remove-product`\n- `order-update-subscription-add-product`\n- `order-update-subscription-change-plan`\n- `order-update-subscription-price-quantity-change`\n- `payment`\n- `payment-profile`\n- `payment-schedule`\n- `payment-schedule-item`\n- `payments-simple`\n- `payments-unapply`\n- `price-book-item`\n- `product`\n- `product-charge-definition`\n- `product-rate-plan`\n- `product-rate-plan-charge`\n- `product-rate-plan-charge-tier`\n- `product-rate-plan-definition`\n- `refund`\n- `revenue-accounting-code`\n- `subscription`\n- `subscription-add-rate-plan`\n- `subscription-change-rate-plan`\n- `subscription-remove-rate-plan`\n- `subscription-update-rate-plan`\n- `taxation-item`\n- `unitofmeasure`\n- `usage`",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "Short description of the job. Max length is 255 characters",
      "section": "Additional Fields"
    },
    {
      "name": "mappings",
      "label": "Mappings",
      "type": "array",
      "required": false,
      "description": "List of mappings. Each mapping maps a source field to a target field in the object. If the field is an array, the type and arrayType must be specified.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "source",
          "label": "Source",
          "type": "string",
          "required": true,
          "description": "Source field name",
          "section": "Additional Fields"
        },
        {
          "name": "target",
          "label": "Target",
          "type": "string",
          "required": true,
          "description": "Target field name. \n\n**Note**: The `target` field must not contain spaces, dots (`.`), underscores (`_`), or asterisks (`*`).\n",
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "description": "Field type",
          "enum": [
            "array",
            "string",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "arrayType",
          "label": "Array Type",
          "type": "string",
          "required": false,
          "description": "Type of objects in the array if the field is an array type",
          "enum": [
            "string",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "headers",
      "label": "Headers",
      "type": "array",
      "required": false,
      "description": "List of headers in the source file. Required if the source file does not have a header row.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "rowIdHeader",
      "label": "Row Id Header",
      "type": "string",
      "required": false,
      "description": "Header in the source file that contains the row id.",
      "section": "Additional Fields"
    },
    {
      "name": "delimiter",
      "label": "Delimiter",
      "type": "string",
      "required": false,
      "description": "Delimiter used in the source file. Default is comma.\n  Supported values: comma, tab, pipe, semicolon, colon, caret, tilde, dot/period",
      "section": "Additional Fields"
    },
    {
      "name": "hasHeaders",
      "label": "Has Headers",
      "type": "boolean",
      "required": false,
      "description": "Indicates if the source file has a header row. Default is false",
      "section": "Additional Fields"
    },
    {
      "name": "fileType",
      "label": "File Type",
      "type": "string",
      "required": false,
      "description": "Type of the source file. Supported values: csv, jsonl \nDefault is csv, which means delimited file where the delimiter can be comma but can also be one of the other supported delimiters",
      "enum": [
        "csv",
        "jsonl"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "jobType",
      "label": "Job Type",
      "type": "string",
      "required": false,
      "description": "Type of the bulk job being created. Default is IMPORT",
      "enum": [
        "Import",
        "Delete",
        "Update",
        "Cancel"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "isCustomObject",
      "label": "Is Custom Object",
      "type": "boolean",
      "required": false,
      "description": "Indicates if the object type is a custom object. Default is false",
      "section": "Additional Fields"
    },
    {
      "name": "dataSourceType",
      "label": "Data Source Type",
      "type": "string",
      "required": false,
      "description": "The data source type of the job",
      "enum": [
        "UserUpload",
        "Salesforce",
        "Chargebee",
        "Stripe"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "systemType",
      "label": "System Type",
      "type": "string",
      "required": false,
      "description": "The system type for the job",
      "enum": [
        "BILLING"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
