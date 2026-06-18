import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postproductrateplanEndpoint: ApiEndpoint = {
  "id": "object-postproductrateplan",
  "name": "CRUD: Create a product rate plan",
  "description": "Retrieves a product rate plan.",
  "method": "POST",
  "path": "/v1/object/product-rate-plan",
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
      "name": "ActiveCurrencies",
      "label": "Active Currencies",
      "type": "array",
      "required": false,
      "description": "A list of 3-letter currency codes representing active currencies for the product rate plan. Use a comma to separate each currency code. When creating a product rate plan, you can use this field to specify default currency and at most four other active currencies.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "A description of the product rate plan.",
      "maxLength": 500,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveEndDate",
      "label": "Effective End Date",
      "type": "date",
      "required": false,
      "description": "The date when the product rate plan expires and can't be subscribed to, in `yyyy-mm-dd` format.",
      "maxLength": 29,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveStartDate",
      "label": "Effective Start Date",
      "type": "date",
      "required": false,
      "description": "The date when the product rate plan becomes available and can be subscribed to, in `yyyy-mm-dd` format.",
      "maxLength": 29,
      "section": "Additional Fields"
    },
    {
      "name": "ExternalIdSourceSystem",
      "label": "External Id Source System",
      "type": "string",
      "required": false,
      "description": "The ID of the external source system. **Note:** To use this field, you must set the `X-Zuora-WSDL-Version` request header to `130` or later. Otherwise, an error occurs.",
      "section": "Additional Fields"
    },
    {
      "name": "ExternalRatePlanIds",
      "label": "External Rate Plan Ids",
      "type": "string",
      "required": false,
      "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. If you want to update to multiple values, use a comma separated string. **Note:** To use this field, you must set the `X-Zuora-WSDL-Version` request header to `130` or later. Otherwise, an error occurs.",
      "section": "Additional Fields"
    },
    {
      "name": "Grade",
      "label": "Grade",
      "type": "number",
      "required": false,
      "description": "The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade. A product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan individually. **Notes**: - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `116` or later. Otherwise, an error occurs. - This field is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).",
      "section": "Additional Fields"
    },
    {
      "name": "ProductId",
      "label": "Product Id",
      "type": "string",
      "required": true,
      "description": "The ID of the product that contains the product rate plan.",
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "description": "Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Department__NS",
      "label": "Department N S",
      "type": "string",
      "required": false,
      "description": "Department associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IncludeChildren__NS",
      "label": "Include Children N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Yes",
        "No"
      ],
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
      "description": "Status of the product rate plan's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "ItemType__NS",
      "label": "Item Type N S",
      "type": "string",
      "required": false,
      "description": "Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Inventory",
        "Non Inventory",
        "Service"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "description": "Location associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "MultiCurrencyPrice__NS",
      "label": "Multi Currency Price N S",
      "type": "string",
      "required": false,
      "description": "Multi-currency price associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Price__NS",
      "label": "Price N S",
      "type": "string",
      "required": false,
      "description": "Price associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
      "type": "string",
      "required": false,
      "description": "Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the product rate plan was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product.",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanNumber",
      "label": "Product Rate Plan Number",
      "type": "string",
      "required": false,
      "description": "The natural key of the product rate plan. **Possible values**: - leave null for automatically generated string - an alphanumeric string of 100 characters or fewer **Note**: This field is only available if you set the `X-Zuora-WSDL-Version` request header to `133` or later.",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "BillingPeriod__NS",
      "label": "Billing Period N S",
      "type": "string",
      "required": false,
      "description": "Billing period associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "enum": [
        "Monthly",
        "Quarterly",
        "Annual",
        "Semi-Annual"
      ],
      "section": "Invoice & Document Settings"
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
