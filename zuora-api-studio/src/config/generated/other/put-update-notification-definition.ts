import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_update_notification_definitionEndpoint: ApiEndpoint = {
  "id": "put-update-notification-definition",
  "name": "Update a notification definition",
  "description": "Updates a notification definition.",
  "method": "PUT",
  "path": "/notifications/notification-definitions/{id}",
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
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "description": "The status of the notification definition. The default value is `true`.",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "callout",
      "label": "Callout",
      "type": "object",
      "required": false,
      "description": "If this field is specified, Zuora will create a new callout template when creating the notification definition and associate the template with the notification definition.\n\nYou cannot specify the `calloutTemplateIds` and `callout` fields at the same time.\n\nFor more information about callout templates, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications/AF_Manage_email_and_callout_templates/B_Manage_callout_templates\" target=\"_blank\">Manage callout templates</a>.\n",
      "fields": [
        {
          "name": "active",
          "label": "Active",
          "type": "boolean",
          "required": false,
          "description": "The status of the callout. The default value is `true`.",
          "defaultValue": true,
          "section": "Additional Fields"
        },
        {
          "name": "calloutBaseurl",
          "label": "Callout Baseurl",
          "type": "string",
          "required": false,
          "description": "The callout URL. It must start with 'https://'.\n\nZuora uses port 443 to send callout notifications by default. If you want to use other ports, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
          "minLength": 10,
          "section": "Additional Fields"
        },
        {
          "name": "calloutParams",
          "label": "Callout Params",
          "type": "object",
          "required": false,
          "description": "A key-value map of merge fields of this callout.\n",
          "section": "Additional Fields"
        },
        {
          "name": "calloutRetry",
          "label": "Callout Retry",
          "type": "boolean",
          "required": false,
          "description": "Specified whether to retry the callout when the callout fails. The default value is `true`.",
          "defaultValue": true,
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Description for the callout.",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "httpMethod",
          "label": "Http Method",
          "type": "string",
          "required": false,
          "description": "The HTTP method of the callout.",
          "enum": [
            "POST",
            "GET",
            "PUT",
            "PATCH",
            "DELETE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The name of the callout template that will be created. It must be unique across all callout templates.",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "requiredAuth",
          "label": "Required Auth",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether Basic authentication is enabled for the callout.\n",
          "section": "Additional Fields"
        },
        {
          "name": "calloutAuth",
          "label": "Callout Auth",
          "type": "object",
          "required": false,
          "description": "If `requiredAuth` is `true`, this object is required.",
          "fields": [
            {
              "name": "domain",
              "label": "Domain",
              "type": "string",
              "required": false,
              "description": "The domain of the callout auth.",
              "section": "Additional Fields"
            },
            {
              "name": "password",
              "label": "Password",
              "type": "string",
              "required": false,
              "description": "The field is required when `requiredAuth` is `true`.",
              "section": "Additional Fields"
            },
            {
              "name": "preemptive",
              "label": "Preemptive",
              "type": "boolean",
              "required": false,
              "description": "Set this field to `true` if you want to enable the preemptive authentication.",
              "section": "Additional Fields"
            },
            {
              "name": "username",
              "label": "Username",
              "type": "string",
              "required": false,
              "description": "The field is required when `requiredAuth` is `true`.",
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "requiredOauth2",
          "label": "Required Oauth2",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether OAuth 2.0 authentication is enabled for the callout.\n",
          "section": "Additional Fields"
        },
        {
          "name": "oauth2ProviderId",
          "label": "Oauth2 Provider Id",
          "type": "string",
          "required": false,
          "description": "The ID of the OAuth 2.0 provider in your tenant that provides access tokens for the callout.\n\nFor more information about how to get the ID of an OAuth 2.0 provider, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/A_Administrator_Settings/Add_an_OAuth_2.0_Provider#Retrieve_the_ID_of_an_OAuth_2.0_provider\" target=\"_blank\">Retrieve the ID of an OAuth 2.0 provider</a>.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "calloutActive",
      "label": "Callout Active",
      "type": "boolean",
      "required": false,
      "description": "The status of the callout action. The default value is `false`.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the notification definition.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "filterRule",
      "label": "Filter Rule",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "string",
          "required": true,
          "description": "The filter rule conditions, written in [JEXL](http://commons.apache.org/proper/commons-jexl/).\nThe rule might contain event context merge fields and data source merge fields. Data source merge fields must be from [the base object of the event or from the joined objects of the base object](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL#Data_Sources_and_Objects). Notifications with invalid merge fields will fail to evaluate, thus will not be invoked. For example, to trigger an event when an invoice is posted with the amount over 1000, you would define the following condition on the `Invoice` object:\n\n```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0```\n\nThere are conventions and keywords you need to be aware of. For example:\n\n* `changeType` is a keyword to specify what kind of change happened to the object. Allowed values are `INSERT`, `UPDATE` or `DELETE`.\n\n* `Invoice.Status` refers to field `Status` of the Zuora object `Invoice`.\n\n* A variable with the `_old` suffix means it’s a previous value of the corresponding object field. The \"_old\" fields are only available on the base objects.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the filter rule.",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "parameters",
          "label": "Parameters",
          "type": "object",
          "required": true,
          "description": "The parameters of the filter rule and their name must match those in the filter rule. And all parameters must be defined in the event type payload. The name of parameters can't be duplicate. The following reserved keywords should not be used as a parameter name: `AttachmentList`, `RecipientList`, `RecipientType`, `Exceptions`, `OCP_OBJECT_TYPE`, `OCP_OBJECT_ID`, `OCP_TRIGGER_BY`\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "filterRuleParams",
      "label": "Filter Rule Params",
      "type": "object",
      "required": false,
      "description": "The parameter values used to configure the filter rule.\n",
      "section": "Additional Fields"
    },
    {
      "name": "associatedAccount",
      "label": "Associated Account",
      "type": "string",
      "required": false,
      "description": "The account on which the histories of this notification will be displayed. The associated account does not enforce where the merge fields come from.\nAvailable values are as follows:\n* `Account.Id`: ID of the primary customer account related to the notification. It is also the default value.\n* `ParentAccount.Id`: this option is available only if you have <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Customer_Accounts/A_Customer_Account_Introduction#Customer_Hierarchy\" target=\"_blank\">Customer Hierarchy</a> enabled for your tenant.\n* `SubscriptionOwnerAccount.Id`: this option is available if the base object of the notification is Order Action.\n\n**Note:** before specifying this field, we recommend that you use [Data Source](https://knowledgecenter.zuora.com/Billing/Reporting/D_Data_Sources_and_Exports/C_Data_Source_Reference) to check the available types of accounts for the current notification.  \n",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the notification definition, which is unique in the profile.",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "calloutTemplateIds",
      "label": "Callout Template Ids",
      "type": "array",
      "required": false,
      "description": "List of callout template IDs that the notification definition is associated with.\n\nYou cannot specify the `calloutTemplateIds` and `callout` fields at the same time.\n\nFor more information about callout templates, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/Events_and_Notifications/AF_Manage_email_and_callout_templates/B_Manage_callout_templates\" target=\"_blank\">Manage callout templates</a>.\n",
      "itemType": "string",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "emailTemplateId",
      "label": "Email Template Id",
      "type": "string",
      "required": false,
      "description": "The ID of the email template. If emailActive is updated from\nfalse to true, an email template is required, and the EventType of\nthe email template MUST be the same as the EventType of the notification definition.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "description": "The profile that notification definition belongs to. \n\nIf you want to associate the notification definition with multiple communication profiles, use the `communicationProfileIds` field, which overrides this field.\n",
      "section": "Communication Settings"
    },
    {
      "name": "communicationProfileIds",
      "label": "Communication Profile Ids",
      "type": "array",
      "required": false,
      "description": "List of communication profile IDs that the notification definition is associated with.\n\nThis field overrides the `communicationProfileId` field.\n",
      "itemType": "string",
      "section": "Communication Settings"
    },
    {
      "name": "emailActive",
      "label": "Email Active",
      "type": "boolean",
      "required": false,
      "description": "The status of the email action. The default value is `false`.",
      "defaultValue": false,
      "section": "Communication Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
