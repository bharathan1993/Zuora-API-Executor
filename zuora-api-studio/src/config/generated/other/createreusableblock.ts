import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createreusableblockEndpoint: ApiEndpoint = {
  "id": "createreusableblock",
  "name": "Create a reusable block",
  "description": "Creates a reusable block for email templates, such as email headers or footers.",
  "method": "POST",
  "path": "/notifications/reusable-blocks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "description": "The status of the reusable block. Only active blocks can be embedded into email templates.\n",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": true,
      "description": "The category of the reusable block. You can filter blocks by category when editing email templates in the UI.\n",
      "enum": [
        "Headers",
        "Footers",
        "Other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": true,
      "description": "The content of the reusable block, which is automatically inserted into email templates when sending email notifications.\n",
      "section": "Additional Fields"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "array",
      "required": false,
      "description": "List of tags that help you quickly locate reusable blocks when editing email templates in the UI by using the tag filter.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the reusable block. The value must be unique across all blocks.\n",
      "section": "Account Settings"
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false,
      "description": "The number of the reusable block. The value must be unique across all blocks.\n\nIf not specified, a unique value will be provided by default.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
