import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_create_notification_definitionEndpoint: ApiEndpoint = {
  "id": "post-create-notification-definition",
  "name": "Create a notification definition",
  "description": "Creates a notification definition. If a filter rule is specified, it will be evaluated to see if the notification definition is qualified to handle the incoming events during runtime. If the notification is qualified, it will send the email and invoke the callout if it has an email template or a callout.",
  "method": "POST",
  "path": "/notifications/notification-definitions",
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
          "description": "The status of the callout. The default is `true`.",
          "defaultValue": true,
          "section": "Additional Fields"
        },
        {
          "name": "calloutBaseurl",
          "label": "Callout Baseurl",
          "type": "string",
          "required": true,
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
          "name": "eventTypeName",
          "label": "Event Type Name",
          "type": "string",
          "required": false,
          "description": "The name of the event type. The value must be the same as the parent-level `eventTypeName` field.",
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "httpMethod",
          "label": "Http Method",
          "type": "string",
          "required": true,
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
          "required": true,
          "description": "The name of the callout template that will be created. It must be unique across all callout templates.",
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "requiredAuth",
          "label": "Required Auth",
          "type": "boolean",
          "required": true,
          "description": "Indicates whether Basic authentication is enabled for the callout.\n\nWhen creating callout notifications with Basic authentication enabled, you must set this field to `true` and specify the username and password in `calloutAuth`.\n",
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
          "required": true,
          "description": "Indicates whether OAuth 2.0 authentication is enabled for the callout.\n\nWhen creating callout notifications with OAuth 2.0 authentication enabled, you must set this field to `true` and specify the OAuth 2.0 provider ID in `oauth2ProviderId`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "oauth2ProviderId",
          "label": "Oauth2 Provider Id",
          "type": "string",
          "required": false,
          "description": "The ID of the OAuth 2.0 provider in your tenant that provides access tokens for the callout. This field is required if `requiredOauth2` is `true`.\n\nFor more information about how to get the ID of an OAuth 2.0 provider, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/A_Administrator_Settings/Add_an_OAuth_2.0_Provider#Retrieve_the_ID_of_an_OAuth_2.0_provider\" target=\"_blank\">Retrieve the ID of an OAuth 2.0 provider</a>.\n",
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
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false,
      "description": "The event category code for a standard event, on which the notification definition is created.\n\nThis field is required when creating notification definitions for standard events.\n\nFor the list of supported standard event category codes, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Events_and_Notifications\" target=\"_blank\">Standard event category code for events and notifications</a>.\n",
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
          "description": "The filter rule conditions, written in [JEXL](http://commons.apache.org/proper/commons-jexl/).\nThe rule might contain event context merge fields and data source merge fields. Data source merge fields must be from [the base object of the event or from the joined objects of the base object](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL#Data_Sources_and_Objects). Notifications with invalid merge fields will fail to evaluate, thus will not be invoked. For example, to filter an invoice posted notification to only invoices with an amount over 1000, you would define the following condition:\n\n```Invoice.Amount > 1000.0```\n\nThere are conventions and keywords you need to be aware of. For example:\n\n* `Invoice.Amount` refers to the `Amount` field of the Zuora object `Invoice`.\n\n* Unlike Event Triggers, there is no access to variables with the `_old` suffix. Fields with the `_old` suffix are only available on Event Trigger conditions.\n",
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
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false,
      "description": "The name of the event that the notification definition is based on.\n\nThis field is required when creating notification definitions for Zuora custom events, custom events, or custom scheduled events.\n\nIf this field is provided, you can specify the event namespace in the `eventTypeNamespace` field. \n",
      "minLength": 1,
      "section": "Account Settings"
    },
    {
      "name": "eventTypeNamespace",
      "label": "Event Type Namespace",
      "type": "string",
      "required": false,
      "description": "The namespace of the `eventTypeName` field. It indicates who created the event and which namespace the event is assigned to.\n\nSupported values are as follows:\n\n- `com.zuora.notification`: events that are created by Zuora. This value applies to Zuora custom events.\n- `user.notification`: events that are created by tenant users. This value applies to custom events and custom scheduled events. This is the default value. \n          \nFor example, if you want to create a notification definition on the `OrderActionProcessed` event, which is a Zuora custom event, you must specify `com.zuora.notification` for this field.\n",
      "defaultValue": "user.notification",
      "enum": [
        "user.notification",
        "com.zuora.notification"
      ],
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the notification definition, unique per communication profile.",
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
      "description": "The ID of the email template. If `emailActive` is `true`, an email template is required. And EventType of the email template MUST be the same as the eventType.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "description": "The ID of the communication profile that the notification definition is associated with.\n\nYou can use the [Query Action](https://developer.zuora.com/api-references/api/operation/Action_POSTquery) to get the communication profile Id. See the following request sample:\n\n`{\n    \"queryString\": \"select Id, ProfileName from CommunicationProfile\"\n }`\n\n\nIf you do not pass the communicationProfileId, notification service will be automatically added to the 'Default Profile'.\n\nIf you want to associate the notification definition with multiple communication profiles,  use the `communicationProfileIds` field, which overrides this field.\n",
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
