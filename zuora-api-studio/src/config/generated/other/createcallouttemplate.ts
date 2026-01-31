import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createcallouttemplateEndpoint: ApiEndpoint = {
  "id": "createcallouttemplate",
  "name": "Create a callout template",
  "description": "Creates a callout template.",
  "method": "POST",
  "path": "/notifications/callout-templates",
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
      "description": "The status of the callout. The default is `true`.",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "calloutBaseurl",
      "label": "Callout Baseurl",
      "type": "string",
      "required": true,
      "description": "The callout URL. It must start with `https://`.\n\nZuora uses port 443 to send callout notifications by default. If you want to use other ports, submit a request at <a href=\"http://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n\nYou can add merge fields in the callout URL. For example, `https://mywebsite.com/zuora/{{DataSource.Account.Id}}`. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/Create_Email_Templates/A_Merge_field_syntax_for_email_templates\" target=\"_blank\">Merge field syntax for email and callout templates</a>.\n",
      "minLength": 10,
      "section": "Additional Fields"
    },
    {
      "name": "calloutHeaders",
      "label": "Callout Headers",
      "type": "object",
      "required": false,
      "description": "Container for custom callout headers. Each custom callout header consists of a header name and a header value.\n",
      "section": "Additional Fields"
    },
    {
      "name": "calloutParams",
      "label": "Callout Params",
      "type": "object",
      "required": false,
      "description": "Container for callout parameters sent in the request body. Each callout parameter consists of a parameter name and a parameter value.\n",
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
      "name": "certificate",
      "label": "Certificate",
      "type": "string",
      "required": false,
      "description": "The SSL certificate for the domain of the callout receiver server specified in `calloutBaseurl`.\n\nThe value must be in PEM format, which typically starts with `-----BEGIN CERTIFICATE-----` and ends with `-----END CERTIFICATE-----`.\n\nSpecifying the SSL certificate can eliminate SSL certificate errors (HTTP status code 495) for callout notifications.\n",
      "section": "Additional Fields"
    },
    {
      "name": "confirmSuccessFromResponseContent",
      "label": "Confirm Success From Response Content",
      "type": "boolean",
      "required": false,
      "description": "Indicates how Zuora determines whether callout notifications to your system succeed or fail:\n\n* If `false`, Zuora determines the result based solely on the HTTP response status code. This is the default value.\n\n* If `true`, and the HTTP response status code is 200, Zuora evaluates the callout response and considers the notification successful only if the `Content-Type` header is set to `application/json`, and the response body contains a `success` field set to `true`.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "customRequestBody",
      "label": "Custom Request Body",
      "type": "string",
      "required": false,
      "description": "Customized request body. This field is available only for callouts whose Content-Type in the request body is `application/json`. The value must be in JSON format and double quotes in the value must be escaped.\n\nYou can add merge fields to the request body. For example, `{\\\"AccountNumber\\\": \\\"{{DataSource.Account.AccountNumber}}\\\",\\\"AccountId\\\": \\\"{{DataSource.Account.Id}}\\\"}`. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/Create_Email_Templates/A_Merge_field_syntax_for_email_templates\" target=\"_blank\">Merge field syntax for email and callout templates</a>.\n\nYou must set `useCustomRequestBody` to `true` if you want to customize the callout request body with this field. Alternatively, you can use the `calloutParams` field.\n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "Description for the callout template.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false,
      "description": "The event category code for a standard event that the callout template relates to.\n\nThis field is required when creating callout templates for standard events.\n\nFor the list of supported standard event category codes, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Events_and_Notifications\" target=\"_blank\">Standard event category code for events and notifications</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "hmacAlgorithm",
      "label": "Hmac Algorithm",
      "type": "string",
      "required": false,
      "description": "The hash function Zuora uses to generate the signed data for HMAC authentication.\n",
      "enum": [
        "MD5",
        "SHA-1",
        "SHA-224",
        "SHA-256",
        "SHA-384",
        "SHA-512"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "hmacData",
      "label": "Hmac Data",
      "type": "string",
      "required": false,
      "description": "The message to be authenticated for HMAC authentication.\n\nYou can use merge fields in this value:\n\n- `{{Request.Headers.<header_name>}}`: Refers to the value of a particular request header. For example, `{{Request.Headers.Date}}` refers to the value of the request header called `Date`.\n- `{{Request.Body}}`: Refers to the request body.\n- Other merge fields: See <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Events_and_Notifications/AF_Manage_email_and_callout_templates/C_Merge_field_syntax_for_email_and_callout_templates\" target=\"_blank\">Merge field syntax for email and callout templates</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "hmacKey",
      "label": "Hmac Key",
      "type": "string",
      "required": false,
      "description": "The header key that Zuora uses to send the header value for HMAC authentication. The header value is specified in the `hmacValue` field and typically contains the signed data.\n",
      "section": "Additional Fields"
    },
    {
      "name": "hmacOutputFormat",
      "label": "Hmac Output Format",
      "type": "string",
      "required": false,
      "description": "The format of the signed data for HMAC authentication.\n",
      "enum": [
        "BASE64",
        "HEX"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "hmacSecret",
      "label": "Hmac Secret",
      "type": "string",
      "required": false,
      "description": "The shared secret key that Zuora uses to generate the signed data for HMAC authentication.\n",
      "section": "Additional Fields"
    },
    {
      "name": "hmacValue",
      "label": "Hmac Value",
      "type": "string",
      "required": false,
      "description": "The header value for HMAC authentication. The header key is specified in the `hmacKey` field.\n\nYou can use merge fields in this value:\n\n- `{{Request.HMAC.Signed}}`: Refers to the signed data.\n- Other merge fields: See <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/Extensibility/Events_and_Notifications/AF_Manage_email_and_callout_templates/C_Merge_field_syntax_for_email_and_callout_templates\" target=\"_blank\">Merge field syntax for email and callout templates</a>.\n\nThe following is a header value example: `The algorithm is SHA-256 and the signed data is {{Request.HMAC.Signed}}`.\n",
      "section": "Additional Fields"
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
      "name": "useCustomRequestBody",
      "label": "Use Custom Request Body",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to enable the customized request body configured in the `customRequestBody` field.\n",
      "section": "Additional Fields"
    },
    {
      "name": "requiredAuth",
      "label": "Required Auth",
      "type": "boolean",
      "required": true,
      "description": "Indicates whether Basic authentication is enabled for the callout.\n\nWhen creating callout templates with Basic authentication enabled, you must set this field to `true` and specify the username and password in `calloutAuth`.\n",
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
      "description": "Indicates whether OAuth 2.0 authentication is enabled for the callout.\n\nWhen creating callout templates with OAuth 2.0 authentication enabled, you must set this field to `true` and specify the OAuth 2.0 provider ID in `oauth2ProviderId`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "oauth2ProviderId",
      "label": "Oauth2 Provider Id",
      "type": "string",
      "required": false,
      "description": "The ID of the OAuth 2.0 provider in your tenant that provides access tokens for the callout. This field is required if `requiredOauth2` is `true`.\n\nFor more information about how to get the ID of an OAuth 2.0 provider, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Tenant_Management/A_Administrator_Settings/Add_an_OAuth_2.0_Provider#Retrieve_the_ID_of_an_OAuth_2.0_provider\" target=\"_blank\">Retrieve the ID of an OAuth 2.0 provider</a>.\n",
      "section": "Additional Fields"
    },
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false,
      "description": "The name of a custom event that the callout template relates to.\n\nThis field is required when creating callout templates for Zuora custom events, custom events, or custom scheduled events.\n\nIf this field is provided, you can specify the event namespace in the `eventTypeNamespace` field. \n",
      "minLength": 1,
      "section": "Account Settings"
    },
    {
      "name": "eventTypeNamespace",
      "label": "Event Type Namespace",
      "type": "string",
      "required": false,
      "description": "The namespace of the `eventTypeName` field. It indicates who created the event and which namespace the event is assigned to.\n\nSupported values are as follows:\n\n- `com.zuora.notification`: events that are created by Zuora. This value applies to Zuora custom events.\n- `user.notification`: events that are created by tenant users. This value applies to custom events and custom scheduled events. This is the default value. \n          \nFor example, if you want to create a callout template that relates to the `OrderActionProcessed` event, which is a Zuora custom event, you must specify `com.zuora.notification` for this field.\n",
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
      "description": "The name of the callout template. It must be unique across all callout templates.",
      "maxLength": 255,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
