import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createdraftopenpaymentmethodtypeEndpoint: ApiEndpoint = {
  "id": "post-createdraftopenpaymentmethodtype",
  "name": "Create a draft custom payment method type",
  "description": "Creates a draft version of a custom payment method type. Revision number 1 is assigned to this version. You can update your draft version through the [Update a custom payment method type](https://developer.zuora.com/api-references/api/operation/PUT_UpdateOpenPaymentMethodType/) operation. You must publish your draft version through the [Publish a custom payment method type](https://developer.zuora.com/api-references/api/operation/PUT_PublishOpenPaymentMethodType/) operation before your custom payment method type goes live.",
  "method": "POST",
  "path": "/open-payment-method-types",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "entityId",
      "label": "Entity Id",
      "type": "string",
      "required": false,
      "description": "If this custom payment method type is specific to one entity only, provide the entity ID in this field in UUID format, such as `123e4567-e89b-12d3-a456-426614174000`. If no entity UUID is provided, the custom payment method type is available to the global entity and all the sub entities in the tenant.\n\nYou can get the entity ID through the [Multi-entity: List entities](https://developer.zuora.com/api-references/older-api/operation/GET_Entities/) API operation or the **Manage Entity Profile** administration setting in the UI. To convert the format of the entity ID to UUID, separate the entity ID string in five groups with hyphens, in the form `<8-characters>-<4-characters>-<4-characters>-<4-characters>-<12-characters>` for a total of 36 characters.\n\nNote: After the custom payment method type is created, you can only update this field to be empty.\n",
      "section": "Additional Fields"
    },
    {
      "name": "fields",
      "label": "Fields",
      "type": "array",
      "required": true,
      "description": "An array containing field metadata of the custom payment method type.\n\nNotes:\n  - All the following nested metadata must be provided in the request to define a field. \n  - At least one field must be defined in the fields array for a custom payment method type. \n  - Up to 20 fields can be defined in the fields array for a custom payment method type.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "checksum",
          "label": "Checksum",
          "type": "boolean",
          "required": false,
          "description": "The checksum value of a payment method is used to identify if this payment method is the same as another one, or if this payment method is altered to another new payment method.\n\nSet this flag to `true` for the following scenarios:\n  - The field should be part of checksum calculation.\n  - The field is a critical differentiator for this type. \n\n    \nFor example, if you select the credit card number and expiration date as the checksum fields for the CreditCard payment method type, when you modified the expiration date, Zuora considers this payment method as a different payment method compared to the original one.\n\nThis field cannot be `null` or empty.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "section": "Additional Fields"
        },
        {
          "name": "defaultValue",
          "label": "Default Value",
          "type": "string",
          "required": false,
          "description": "The default value of the field. `null` is supported.\n\nIf a required field is added after the custom payment method type is published, `defaultValue` is required.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "An explanation of this field. It can be an empty string.\n",
          "maxLength": 70,
          "section": "Additional Fields"
        },
        {
          "name": "editable",
          "label": "Editable",
          "type": "boolean",
          "required": false,
          "description": "Specify `true` if this field can be updated through PUT API or UI.\n\nThis field cannot be `null` or empty.\n\nNote: If `editable` is set to `false`, you can specify the value of this field in the UI and POST API when creating a payment method. However, after you created the payment method, you cannot edit this field through PUT API or UI.\n",
          "section": "Additional Fields"
        },
        {
          "name": "index",
          "label": "Index",
          "type": "number",
          "required": false,
          "description": "The order of the field in this type, starting from 1. It must be unique.\n\nThis field cannot be `null` or empty.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "section": "Additional Fields"
        },
        {
          "name": "label",
          "label": "Label",
          "type": "string",
          "required": false,
          "description": "The label that is used to refer to this field in the Zuora UI.\n\nAn alphanumeric string, excluding JSON preserved characters e.g.  * \\ ’ ”\n\nThis field cannot be `null` or empty or any reserved field name.\n",
          "maxLength": 30,
          "section": "Additional Fields"
        },
        {
          "name": "maxLength",
          "label": "Max Length",
          "type": "number",
          "required": false,
          "description": "A maximum length limitation of the field value. The specified value must be in the range of [1,8000]. `maxLength` must be greater than or equal to `minLength`.\n\nAfter the custom payment method type is created, you can only increase the value of `maxLength`. Decreasing the value is not supported.\n",
          "section": "Additional Fields"
        },
        {
          "name": "minLength",
          "label": "Min Length",
          "type": "number",
          "required": false,
          "description": "A minimal length limitation of the field value.\n    \n0 <= `minLength` <= `maxLength`\n\nThe value of this metadata does not determine whether the field is a required field. It only defines the minimal length of the field value.\n\nAfter the custom payment method type is created, you can only decrease the value of `minLength`. Increasing the value is not supported.\n",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The API name of this field. It must be uinique.\n\nAn alphanumeric string starting with a capital letter, excluding JSON preserved characters e.g.  * \\ ’ ”\n\nThough this field must be defined with a string starting with a capital letter, use this string with the first letter in lowercase when you specify it in other API operations. For example, `AmazonPayToken` is the defined value for `name`. In the request of the \"Create a payment method\" API operation, use `amazonPayToken`.\n\nThis field cannot be `null` or empty or any reserved field name.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "maxLength": 30,
          "section": "Account Settings"
        },
        {
          "name": "representer",
          "label": "Representer",
          "type": "boolean",
          "required": false,
          "description": "This flag determines whether this field will be used for identifying this payment method in the Zuora UI. The field will be shown in the Payment Method field in the UI.\n\nThis field cannot be `null` or empty.\n\nNotes:\n  - In one custom payment method type, set `representer` to `true` for at least one field .\n  - In one custom payment method type, you can set `representer` to `true` for multiple fields.\n",
          "section": "Additional Fields"
        },
        {
          "name": "required",
          "label": "Required",
          "type": "boolean",
          "required": false,
          "description": "Specify whether this field is required.\n\nThis field cannot be `null` or empty.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "description": "The type of this field.\n\nFor the `date` type, ISO_LOCAL_DATE format is supported, such as `2011-12-03`. The timezone is not expected for the `date` type. For example, `2011-12-03+01:00` will be rejected.\n\nFor the `datetime` type, only ISO_OFFSET_DATE_TIME format is supported, such as `2011-12-03T10:15:30+01:00`. Timezone must be included. A string like `2011-12-03T10:15:30` or `2011-12-03T10:15:30+01:00[Europe/Paris]` will be rejected.\n\nIf you need to define a `date` type with timezone or a `datetime` type without timezone, use the `string` type for now.\n\nThis field cannot be `null` or empty.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
          "enum": [
            "string",
            "date",
            "datetime",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "visible",
          "label": "Visible",
          "type": "boolean",
          "required": false,
          "description": "Specify `true` if this field can be retrieved through GET API or UI for displaying payment method details.\n\nThis field cannot be `null` or empty.\n\nNotes: \n  - If `visible` is set to `false`, you can still specify the value of this field in the UI and POST API when creating the payment method.\n  - If `visible` is set to `false` and `editable` is set to `true`, this field is not accessible through GET API or UI for displaying details, but you can still see it and edit the value in the UI and PUT API when updating this payment method.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "label",
      "label": "Label",
      "type": "string",
      "required": true,
      "description": "The label that is used to refer to this type in the Zuora UI.\n\nThis value must be alphanumeric, excluding JSON preserved characters such as  * \\ ’ ” \n",
      "maxLength": 40,
      "section": "Additional Fields"
    },
    {
      "name": "methodReferenceIdField",
      "label": "Method Reference Id Field",
      "type": "string",
      "required": true,
      "description": "The identification reference of the custom payment method.\n\nThis field should be mapped to a field name defined in the `fields` array for the purpose of being used as a filter in reporting tools such as Payment Method Data Source Exports and Data Query.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
      "section": "Additional Fields"
    },
    {
      "name": "subTypeField",
      "label": "Sub Type Field",
      "type": "string",
      "required": false,
      "description": "The identification reference indicating the subtype of the custom payment method.\n\nThis field should be mapped to a field name defined in the `fields` array for the purpose of being used as a filter in reporting tools such as Data Source Exports and Data Query.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
      "section": "Additional Fields"
    },
    {
      "name": "tenantId",
      "label": "Tenant Id",
      "type": "string",
      "required": true,
      "description": "Zuora tenant ID. If multi-entity is enabled in your tenant, this is the ID of the parent tenant of all the sub entities.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
      "section": "Additional Fields"
    },
    {
      "name": "userReferenceIdField",
      "label": "User Reference Id Field",
      "type": "string",
      "required": false,
      "description": "The identification reference of the user or customer account.\n\nThis field should be mapped to a field name defined in the `fields` array for the purpose of being used as a filter in reporting tools such as Data Source Exports and Data Query.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
      "section": "Additional Fields"
    },
    {
      "name": "internalName",
      "label": "Internal Name",
      "type": "string",
      "required": true,
      "description": "A string to identify the custom payment method type in the API name of the payment method type.\n\nThis field must be alphanumeric, starting with a capital letter, excluding JSON preserved characters such as  * \\ ’ ”. Additionally, '_' or '-' is not allowed.\n\nThis field must be unique in a tenant.\n\nThis field is used along with the `tenantId` field by the system to construct and generate the API name of the custom payment method type in the following way:\n\n`<internalName>__c_<tenantId>`\n\nFor example, if `internalName` is `AmazonPay`, and `tenantId` is `12368`, the API name of the custom payment method type will be `AmazonPay__c_12368`.\n\nThis field cannot be updated after the creation of the custom payment method type.\n",
      "maxLength": 19,
      "section": "Account Settings"
    },
    {
      "name": "isSupportAsyncPayment",
      "label": "Is Support Async Payment",
      "type": "boolean",
      "required": false,
      "description": "If you want to enable the <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DA_Electronic_Payment_Processing#Asynchronous_payment_flow\" target=\"_blank\">Asynchronous Payment Statuses</a> feature in handling transactions \nwith your custom payment method, specify `true` in this field. \nYou also need to complete tasks described in <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DA_Electronic_Payment_Processing#Enable_the_Asynchronous_Payment_Statuses_feature\" target=\"_blank\">Enable the Asynchronous Payment Statuses feature</a> in Zuora Knowledge Center.\n",
      "defaultValue": false,
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
