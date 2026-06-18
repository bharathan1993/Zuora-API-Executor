import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postproductEndpoint: ApiEndpoint = {
  "id": "object-postproduct",
  "name": "CRUD: Create a product",
  "description": "",
  "method": "POST",
  "path": "/v1/object/product",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether the call fails if the request body contains unknown fields. With `rejectUnknownFields` set to `true`, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is: ```json { \"message\": \"Error - unrecognised fields\" } ``` By default, Zuora ignores unknown fields in the request body.",
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "AllowFeatureChanges",
      "label": "Allow Feature Changes",
      "type": "boolean",
      "required": false,
      "description": "Controls whether to allow your users to add or remove features while creating or amending a subscription. **Values**: true, false (default)",
      "section": "Additional Fields"
    },
    {
      "name": "Category",
      "label": "Category",
      "type": "string",
      "required": false,
      "description": "Category of the product. Used by Zuora Quotes Guided Product Selector. **Values**: - Base Products - Add On Services - Miscellaneous Products",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "A description of the product.",
      "maxLength": 500,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveEndDate",
      "label": "Effective End Date",
      "type": "date",
      "required": true,
      "description": "The date when the product expires and can't be subscribed to anymore, in `yyyy-mm-dd` format.",
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveStartDate",
      "label": "Effective Start Date",
      "type": "date",
      "required": true,
      "description": "The date when the product becomes available and can be subscribed to, in `yyyy-mm-dd` format.",
      "section": "Additional Fields"
    },
    {
      "name": "SKU",
      "label": "S K U",
      "type": "string",
      "required": false,
      "description": "The unique SKU for the product. **Values**: - leave null for automatically generated string - an alphanumeric string of 50 characters or fewer",
      "maxLength": 50,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the product's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "ItemType__NS",
      "label": "Item Type N S",
      "type": "string",
      "required": false,
      "description": "Type of item that is created in NetSuite for the product. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Inventory",
        "Non Inventory",
        "Service"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the product was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the product. This information is displayed in the product catalog pages in the web-based UI.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ProductNumber",
      "label": "Product Number",
      "type": "string",
      "required": false,
      "description": "The natural key of the product. **Values**: - leave null for automatically generated string - an alphanumeric string of 100 characters or fewer **Note**: This field is only available if you set the `X-Zuora-WSDL-Version` request header to `133` or later.",
      "maxLength": 100,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
