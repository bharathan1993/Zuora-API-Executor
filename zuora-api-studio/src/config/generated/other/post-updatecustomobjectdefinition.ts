import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_updatecustomobjectdefinitionEndpoint: ApiEndpoint = {
  "id": "post-updatecustomobjectdefinition",
  "name": "Update a custom object definition",
  "description": "Updates a custom object definition by posting migration resource to initiate the migration of definitions.",
  "method": "POST",
  "path": "/objects/migrations",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "actions",
      "label": "Actions",
      "type": "array",
      "required": true,
      "description": "The actions of updating custom object definitions, to be performed as parts of the migration.  Currently only one action per migration is supported.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Optional property for `updateObject` action",
          "section": "Additional Fields"
        },
        {
          "name": "enableCreateRecordAuditing",
          "label": "Enable Create Record Auditing",
          "type": "boolean",
          "required": false,
          "description": "Optional property for `updateObject` action.\n\nIndicates whether to audit the creation of custom object records of this custom object definition.\n\nNote that you must enable the **Custom Object Definition** audit trail setting in your Zuora tenant before auditing custom object record creation. For more information, see <a href=\"https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-audit-trail-settings\" target=\"_blank\">Manage audit trail settings</a>.\n",
          "section": "Additional Fields"
        },
        {
          "name": "enableDeleteRecordAuditing",
          "label": "Enable Delete Record Auditing",
          "type": "boolean",
          "required": false,
          "description": "Optional property for `updateObject` action.\n\nIndicates whether to audit the deletion of custom object records of this custom object definition.\n\nNote that you must enable the **Custom Object Definition** audit trail setting in your Zuora tenant before auditing custom object record deletion. For more information, see <a href=\"https://docs.zuora.com/en/zuora-platform/system-management/administrator-settings/manage-audit-trail-settings\" target=\"_blank\">Manage audit trail settings</a>.\n",
          "section": "Additional Fields"
        },
        {
          "name": "field",
          "label": "Field",
          "type": "object",
          "required": false,
          "description": "A reference to a field.",
          "fields": [
            {
              "name": "auditable",
              "label": "Auditable",
              "type": "boolean",
              "required": false,
              "description": "Indicates whether Audit Trail will record changes of this custom field. You can change auditable fields to non-auditable, and vice versa. One custom object can have a maximum of five auditable fields.\n",
              "section": "Additional Fields"
            },
            {
              "name": "definition",
              "label": "Definition",
              "type": "object",
              "required": false,
              "description": "The custom field definition in the custom object",
              "fields": [
                {
                  "name": "default",
                  "label": "Default",
                  "type": "string",
                  "required": false,
                  "description": "Applicable if the `type` of the action is  `updateField`",
                  "section": "Additional Fields"
                },
                {
                  "name": "description",
                  "label": "Description",
                  "type": "string",
                  "required": false,
                  "description": "Applicable if the `type` of the action is  `updateField`",
                  "section": "Additional Fields"
                },
                {
                  "name": "displayName",
                  "label": "Display Name",
                  "type": "boolean",
                  "required": false,
                  "description": "Indicates whether to use this field as the display name of the custom object when being linked to another custom object.\n\nThis field applies only to the Text custom field type:\n\n- The `type` field is `string`.\n- The `enum` field is not specified.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "format",
                  "label": "Format",
                  "type": "string",
                  "required": false,
                  "description": "The data format of the custom field",
                  "section": "Additional Fields"
                },
                {
                  "name": "label",
                  "label": "Label",
                  "type": "string",
                  "required": false,
                  "description": "The UI label of the custom field",
                  "section": "Additional Fields"
                },
                {
                  "name": "maxLength",
                  "label": "Max Length",
                  "type": "number",
                  "required": false,
                  "description": "The maximum length of string that can be stored in the custom field.\n\nThis field applies only to the following custom field types:\n\n- Text:\n  - The `type` field is `string`.\n  - The `format` field is not specified or is `url`.\n  - The `enum` field is not specified.\n- Long Text:\n  - The `type` field is `string`.\n  - The `format` field is `long-text`.\n- Picklist:\n  - The `type` field is `string`.\n  - The `enum` field is specified.\n  - The `multiselect` field is not specified or is `false`.\n- Multiselect:\n  - The `type` field is `string`.\n  - The `enum` field is specified.\n  - The `multiselect` field is `true`.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "multiselect",
                  "label": "Multiselect",
                  "type": "boolean",
                  "required": false,
                  "description": "Indicates whether this is a multiselect custom field.\n\nThis field applies only to the creation of Picklist or Multiselect custom fields:\n\n- The action `type` field is `addField`.\n- The definition `type` field is `string`.\n- The `maxLength` field is specified.\n- The `enum` field is specified.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "origin",
                  "label": "Origin",
                  "type": "string",
                  "required": false,
                  "description": "Specifies that this is a custom field",
                  "enum": [
                    "custom"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": false,
                  "description": "The data type of the custom field",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "filterable",
              "label": "Filterable",
              "type": "boolean",
              "required": false,
              "description": "Indicates whether the field is filterable or not. Applicable to `addField` and `updateField` actions.\n\nYou can change a filterable field to non-filterable and vice versa. You can also add a filterable field. One custom object can have a maximum of 10 filterable fields.\n\nNote that changing filterable fields triggers reindexing. It will take 12-24 hours before all your data are reindexed and available to query.\n",
              "section": "Additional Fields"
            },
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": false,
              "description": "The name of the custom field to be updated",
              "section": "Account Settings"
            },
            {
              "name": "required",
              "label": "Required",
              "type": "boolean",
              "required": false,
              "description": "Indicates whether the field is required or optional.\n\nYou can update a required field to optional. On the other hand, you can only update an optional field to required on the custom object with no records.\n\nYou can only add a required field to the custom object with no records.\n",
              "section": "Additional Fields"
            },
            {
              "name": "targetName",
              "label": "Target Name",
              "type": "string",
              "required": false,
              "description": "Required if the `type` of the action is `renameField`",
              "section": "Account Settings"
            },
            {
              "name": "unique",
              "label": "Unique",
              "type": "boolean",
              "required": false,
              "description": "Indicates whether to specify a unique constraint to the field. You can remove the unique constraint on the field. However, you can only add a unique constraint to a filterable field if the custom object contains no record. One custom object can have a maximum of five fields with unique constraints.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "label",
          "label": "Label",
          "type": "string",
          "required": false,
          "description": "Optional property for `updateObject` action",
          "section": "Additional Fields"
        },
        {
          "name": "namespace",
          "label": "Namespace",
          "type": "string",
          "required": true,
          "description": "The namespace of the custom object definition to be updated",
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": true,
          "description": "The API name of the custom object definition to be updated",
          "section": "Additional Fields"
        },
        {
          "name": "relationship",
          "label": "Relationship",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "cardinality",
              "label": "Cardinality",
              "type": "string",
              "required": false,
              "description": "The cardinality of the relationship from this object to another object.\n\nOnly the `manyToOne` cardinality can be used when creating relationships.  A relationship with `oneToMany` cardinality is created implicitly when a `manyToOne` relationship is created.\n\nA custom object definition can have a maximum of 2 `manyToOne` relationships.\n",
              "enum": [
                "manyToOne"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "fields",
              "label": "Fields",
              "type": "object",
              "required": true,
              "description": "Field mappings in the form of `<this-object-field-name>`: `<other-object-field-name>`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "namespace",
              "label": "Namespace",
              "type": "string",
              "required": true,
              "description": "The namespace where the related object is located",
              "section": "Account Settings"
            },
            {
              "name": "object",
              "label": "Object",
              "type": "string",
              "required": true,
              "description": "The API name of the related object",
              "section": "Additional Fields"
            },
            {
              "name": "recordConstraints",
              "label": "Record Constraints",
              "type": "object",
              "required": false,
              "description": "Specifies contraints to apply to custom object records.\n",
              "fields": [
                {
                  "name": "create",
                  "label": "Create",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "enforceValidMapping",
                      "label": "Enforce Valid Mapping",
                      "type": "boolean",
                      "required": false,
                      "description": "Specifies whether Zuora validates the values of mapped fields\nin custom object records.\n\nBy default, Zuora validates the values of mapped fields\nin custom object records. For example, if the\ncustom object definition has a field called `AccountId__c`\nthat is mapped to the `Id` field of the `account` object,\nZuora verifies that the value of `AccountId__c` is a valid\naccount ID when a custom object record is created.\nIf the value of `AccountId__c` is not a valid account ID,\nthe operation fails.\n",
                      "defaultValue": true,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "description": "The type of the updating action on a custom object definition",
          "enum": [
            "addField",
            "deleteField",
            "updateField",
            "updateObject",
            "renameField",
            "addRelationship",
            "deleteRelationship"
          ],
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
