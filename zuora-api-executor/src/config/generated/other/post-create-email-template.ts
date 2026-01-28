import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_create_email_templateEndpoint: ApiEndpoint = {
  "id": "post-create-email-template",
  "name": "Create an email template",
  "description": "Creates an email template. ",
  "method": "POST",
  "path": "/notifications/email-templates",
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
      "description": "The status of the email template. The default value is `true`.",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the email template.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "encodingType",
      "label": "Encoding Type",
      "type": "string",
      "required": false,
      "description": "The endcode type of the email body.",
      "defaultValue": "UTF8",
      "enum": [
        "UTF8",
        "Shift_JIS",
        "ISO_2022_JP",
        "EUC_JP",
        "X_SJIS_0213"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false,
      "description": "If you specify this field, the email template is created based on a standard event. See [Standard Event Categories](https://knowledgecenter.zuora.com/Central_Platform/Notifications/A_Standard_Events/Standard_Event_Category_Code_for_Notification_Histories_API) for all standard event category codes. \n",
      "section": "Additional Fields"
    },
    {
      "name": "isHtml",
      "label": "Is Html",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the style of email body is HTML. The default value is `false`.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "bccEmailAddress",
      "label": "Bcc Email Address",
      "type": "email",
      "required": false,
      "description": "The email bcc address.",
      "section": "Communication Settings"
    },
    {
      "name": "ccEmailAddress",
      "label": "Cc Email Address",
      "type": "string",
      "required": false,
      "description": "The email CC address.",
      "section": "Communication Settings"
    },
    {
      "name": "ccEmailType",
      "label": "Cc Email Type",
      "type": "string",
      "required": false,
      "description": "Email CC type.\n\n- When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:\n  - BillToContact\n  - SoldToContact\n  - ShipToContact\n  - BillToAndSoldToContacts\n  - AllContacts\n  - SpecificEmails\n  - InvoiceOwnerBillToContact\n  - InvoiceOwnerSoldToContact\n  - InvoiceOwnerShipToContact\n  - InvoiceOwnerBillToAndSoldToContacts\n  - InvoiceOwnerAllContacts\n- When the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:\n  - BillToContact\n  - SoldToContact\n  - ShipToContact\n  - BillToAndSoldToContacts\n  - AllContacts\n  - SpecificEmails\n- When the related event is tenant-level, such as Bill Run Completion, you can use the following values:\n  - TenantAdmin\n  - RunOwner\n  - SpecificEmails\n",
      "defaultValue": "SpecificEmails",
      "enum": [
        "BillToContact",
        "SoldToContact",
        "ShipToContact",
        "SpecificEmails",
        "TenantAdmin",
        "BillToAndSoldToContacts",
        "RunOwner",
        "AllContacts",
        "InvoiceOwnerBillToContact",
        "InvoiceOwnerSoldToContact",
        "InvoiceOwnerShipToContact",
        "InvoiceOwnerBillToAndSoldToContacts",
        "InvoiceOwnerAllContacts"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "emailBody",
      "label": "Email Body",
      "type": "string",
      "required": true,
      "description": "The email body. You can add merge fields in the email body using angle brackets or double curly brackets. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/Create_Email_Templates/A_Merge_field_syntax_for_email_templates\" target=\"_blank\">Merge field syntax for email templates</a>.\n\nYou can also embed HTML tags if `isHtml` is `true`.\n",
      "section": "Communication Settings"
    },
    {
      "name": "emailHeaders",
      "label": "Email Headers",
      "type": "object",
      "required": false,
      "description": "Container for custom email headers. Each custom email header consists of a header name and a header value.\n",
      "section": "Communication Settings"
    },
    {
      "name": "emailSubject",
      "label": "Email Subject",
      "type": "string",
      "required": true,
      "description": "The email subject. You can add merge fields in the email subject using angle brackets or double curly brackets. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Events_and_Notifications/Create_Email_Templates/A_Merge_field_syntax_for_email_templates\" target=\"_blank\">Merge field syntax for email templates</a>.\n",
      "section": "Communication Settings"
    },
    {
      "name": "fromEmailAddress",
      "label": "From Email Address",
      "type": "string",
      "required": false,
      "description": "If fromEmailType is SpecificEmail, this field is required.",
      "section": "Communication Settings"
    },
    {
      "name": "fromEmailType",
      "label": "From Email Type",
      "type": "string",
      "required": true,
      "description": "The type of the email.",
      "enum": [
        "TenantEmail",
        "RunOwner",
        "SpecificEmail"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "replyToEmailAddress",
      "label": "Reply To Email Address",
      "type": "string",
      "required": false,
      "description": "If replyToEmailType is SpecificEmail, this field is required.",
      "section": "Communication Settings"
    },
    {
      "name": "replyToEmailType",
      "label": "Reply To Email Type",
      "type": "string",
      "required": false,
      "description": "Type of the replyTo email.",
      "enum": [
        "TenantEmail",
        "RunOwner",
        "SpecificEmail"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "toEmailAddress",
      "label": "To Email Address",
      "type": "string",
      "required": false,
      "description": "If toEmailType is SpecificEmail, this field is required.",
      "section": "Communication Settings"
    },
    {
      "name": "toEmailType",
      "label": "To Email Type",
      "type": "string",
      "required": true,
      "description": "Email receive type.\n\n- When the related event is account-level and associated with the Subscription object, such as Subscription Created, you can use the following values:\n  - BillToContact\n  - SoldToContact\n  - ShipToContact\n  - BillToAndSoldToContacts\n  - AllContacts\n  - SpecificEmails\n  - InvoiceOwnerBillToContact\n  - InvoiceOwnerSoldToContact\n  - InvoiceOwnerShipToContact\n  - InvoiceOwnerBillToAndSoldToContacts\n  - InvoiceOwnerAllContacts\n- When the related event is account-level and not associated with the Subscription object, such as Payment Processed, you can use the following values:\n  - BillToContact\n  - SoldToContact\n  - ShipToContact\n  - BillToAndSoldToContacts\n  - AllContacts\n  - SpecificEmails\n- When the related event is tenant-level, such as Bill Run Completion, you can use the following values:\n  - TenantAdmin\n  - RunOwner\n  - SpecificEmails\n",
      "enum": [
        "BillToContact",
        "SoldToContact",
        "ShipToContact",
        "SpecificEmails",
        "TenantAdmin",
        "BillToAndSoldToContacts",
        "RunOwner",
        "AllContacts",
        "InvoiceOwnerBillToContact",
        "InvoiceOwnerSoldToContact",
        "InvoiceOwnerShipToContact",
        "InvoiceOwnerBillToAndSoldToContacts",
        "InvoiceOwnerAllContacts"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false,
      "description": "The name of the custom event or custom scheduled event. If you specify this field, the email template is created based on the corresponding custom event or custom scheduled event.\n",
      "section": "Account Settings"
    },
    {
      "name": "eventTypeNamespace",
      "label": "Event Type Namespace",
      "type": "string",
      "required": false,
      "description": "The namespace of the `eventTypeName` field. The `eventTypeName` has the `user.notification` namespace by default. \n\nNote that if the `eventTypeName` is a standard event type, you must specify the `com.zuora.notification` namespace; otherwise, you will get an error.\n\nFor example, if you want to create an email template on the `OrderActionProcessed` event, you must specify `com.zuora.notification` for this field.         \n",
      "section": "Account Settings"
    },
    {
      "name": "fromName",
      "label": "From Name",
      "type": "string",
      "required": false,
      "description": "The name of the email sender.",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the email template, a unique name in a tenant.",
      "maxLength": 255,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
