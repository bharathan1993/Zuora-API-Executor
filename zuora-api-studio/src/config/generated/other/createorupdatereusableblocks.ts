import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createorupdatereusableblocksEndpoint: ApiEndpoint = {
  "id": "createorupdatereusableblocks",
  "name": "Create or update reusable blocks",
  "description": "Creates reusable blocks if you do not specify block IDs, or updates existing reusable blocks if you specify valid block IDs. All fields must be provided for each reusable block you want to update.",
  "method": "POST",
  "path": "/notifications/reusable-blocks/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "allowPartialSuccess",
      "label": "Allow Partial Success",
      "type": "boolean",
      "required": false,
      "description": "When set to false, the call will fail if one or multiple instances fail to import, and a 200 response is returned if all reusable blocks have been successfully updated. \nWhen set to true, a success (200) response is returned if one or more instances have imported successfully. All failed instances are also returned in the response.\n",
      "section": "Additional Fields"
    },
    {
      "name": "reusableBlocks",
      "label": "Reusable Blocks",
      "type": "array",
      "required": false,
      "description": "A container for reusable blocks.\n",
      "itemType": "object",
      "itemFields": [
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
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "ID of an existing reusable block. Specify this field if you want to update an existing reusable block. You must provide all fields when updating an existing reusable block.\n",
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
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "description": "List of tags that help you quickly locate reusable blocks when editing email templates in the UI by using the tag filter.\n",
          "itemType": "string",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
