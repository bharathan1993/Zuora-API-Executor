import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_workflowversionsimportEndpoint: ApiEndpoint = {
  "id": "post-workflowversionsimport",
  "name": "Import a workflow version",
  "description": "Create a new workflow version under a workflow definition using the exported JSON document of an existing workflow version.",
  "method": "POST",
  "path": "/workflows/{workflow_id}/versions/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: workflow_id",
      "placeholder": "Enter workflow id"
    }
  ],
  "bodyFields": [
    {
      "name": "linkages",
      "label": "Linkages",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "linkage_type",
          "label": "Linkage Type",
          "type": "string",
          "required": false,
          "enum": [
            "Start",
            "Success",
            "Failure",
            "Iterate",
            "True",
            "False",
            "Approve",
            "Reject"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "source_task_id",
          "label": "Source Task Id",
          "type": "number",
          "required": false,
          "description": "the task that spawned the target task",
          "section": "Additional Fields"
        },
        {
          "name": "source_workflow_id",
          "label": "Source Workflow Id",
          "type": "number",
          "required": false,
          "description": "the workflow the target task is associated with",
          "section": "Additional Fields"
        },
        {
          "name": "target_task_id",
          "label": "Target Task Id",
          "type": "number",
          "required": false,
          "description": "the task that the source task is linked to.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "tasks",
      "label": "Tasks",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "action_type",
          "label": "Action Type",
          "type": "string",
          "required": false,
          "description": "The type of the task.\n",
          "enum": [
            "Approval",
            "Attachment",
            "Billing::BillRun",
            "Billing::CurrencyConversion",
            "Billing::CustomInvoice",
            "Callout",
            "Cancel",
            "Create",
            "CustomObject::Create",
            "CustomObject::Delete",
            "CustomObject::Query",
            "CustomObject::Update",
            "Data::BillingPreviewRun",
            "Data::Link",
            "Delay",
            "Delete",
            "Download::SFTP",
            "Email",
            "Export",
            "File::CustomPDF::CustomDocument",
            "If",
            "InvoiceGenerate",
            "Iterate",
            "Logic::CSVTranslator",
            "Logic::Case",
            "Logic::CustomCode",
            "Logic::JSONTransform",
            "Logic::Lambda",
            "Logic::ResponseFormatter",
            "Logic::XMLTransform",
            "NewProduct",
            "Notifications::GoogleCloudPrint",
            "Notifications::PhoneCall",
            "Notifications::SMS",
            "Payment::GatewayReconciliation",
            "Payment::PaymentRun",
            "Query",
            "RemoveProduct",
            "Reporting::ReportData",
            "Reporting::RunReport",
            "Resume",
            "Suspend",
            "UI::Page",
            "UI::Stop",
            "Update",
            "Upload::FTP",
            "Upload::SFTP",
            "WriteOff"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "description": "The type of API used.\n",
          "section": "Additional Fields"
        },
        {
          "name": "concurrent_limit",
          "label": "Concurrent Limit",
          "type": "number",
          "required": false,
          "description": "the number of concurrent tasks that are allowed to run simultaneously",
          "section": "Additional Fields"
        },
        {
          "name": "data",
          "label": "Data",
          "type": "object",
          "required": false,
          "description": "The data payload for the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "end_time",
          "label": "End Time",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true**, the end time of the task instance.\n",
          "section": "Additional Fields"
        },
        {
          "name": "error",
          "label": "Error",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true** and **status** is **Error**, the error reason of the task instance failure.\n",
          "section": "Additional Fields"
        },
        {
          "name": "error_class",
          "label": "Error Class",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true** and **status** is **Error**, the error class of the task instance failure.\n",
          "section": "Additional Fields"
        },
        {
          "name": "error_details",
          "label": "Error Details",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true** and **status** is **Error**, the error details of the task instance failure.\n",
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": false,
          "description": "The unique ID of the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "instance",
          "label": "Instance",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether this task belongs to an instance of a workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The name of the task.\n",
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": false,
          "description": "The selected object for the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "object_id",
          "label": "Object Id",
          "type": "string",
          "required": false,
          "description": "The id of the selected object of the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "original_task_id",
          "label": "Original Task Id",
          "type": "number",
          "required": false,
          "description": "If **Instance** is **true**, the ID of the original task in the original workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "original_workflow_id",
          "label": "Original Workflow Id",
          "type": "number",
          "required": false,
          "description": "If **Instance** is **true**, the ID of the original workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "parameters",
          "label": "Parameters",
          "type": "object",
          "required": false,
          "description": "The configuration of the task.\n",
          "section": "Additional Fields"
        },
        {
          "name": "start_time",
          "label": "Start Time",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true**, the start time of the task instance.\n",
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "description": "If **Instance** is **true**, the status of the task instance.\n",
          "enum": [
            "Queued",
            "Processing",
            "Pending",
            "Success",
            "Stopped",
            "Error"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "description": "The array of filter tags.\n",
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "task_id",
          "label": "Task Id",
          "type": "number",
          "required": false,
          "description": "the id of this task's parent task. Will be null if this is the first task of the workflow",
          "section": "Additional Fields"
        },
        {
          "name": "workflow_id",
          "label": "Workflow Id",
          "type": "number",
          "required": false,
          "description": "The ID of the workflow that the task belongs to.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "workflow",
      "label": "Workflow",
      "type": "object",
      "required": false,
      "description": "A workflow.\n",
      "fields": [
        {
          "name": "call_type",
          "label": "Call Type",
          "type": "string",
          "required": false,
          "description": "The call type of the active workflow version.\n",
          "section": "Additional Fields"
        },
        {
          "name": "calloutTrigger",
          "label": "Callout Trigger",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the callout trigger is enabled for the retrieved workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "createdAt",
          "label": "Created At",
          "type": "string",
          "required": false,
          "description": "The date and time when the workflow is created, in the `YYYY-MM-DD HH:MM:SS` format.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "finished_at",
          "label": "Finished At",
          "type": "string",
          "required": false,
          "description": "The date and time when the instance of the workflow version finished at.\n",
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "number",
          "required": false,
          "description": "The unique ID of the workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "interval",
          "label": "Interval",
          "type": "string",
          "required": false,
          "description": "The schedule of the workflow, in a CRON expression. Returns null if the schedued trigger is disabled.\n",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The name of the workflow.\n",
          "section": "Account Settings"
        },
        {
          "name": "ondemandTrigger",
          "label": "Ondemand Trigger",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the ondemand trigger is enabled for the workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "original_workflow_id",
          "label": "Original Workflow Id",
          "type": "number",
          "required": false,
          "description": "The unique ID of the original workflow version.\n",
          "section": "Additional Fields"
        },
        {
          "name": "priority",
          "label": "Priority",
          "type": "string",
          "required": false,
          "description": "The priority of the active workflow version. \n",
          "section": "Additional Fields"
        },
        {
          "name": "scheduledTrigger",
          "label": "Scheduled Trigger",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the scheduled trigger is enabled for the workflow.\n",
          "section": "Additional Fields"
        },
        {
          "name": "started_at",
          "label": "Started At",
          "type": "string",
          "required": false,
          "description": "The date and time when the instance of the workflow version started at.\n",
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "number",
          "required": false,
          "description": "The status of the active workflow version.\n",
          "section": "Additional Fields"
        },
        {
          "name": "sync_trigger",
          "label": "Sync Trigger",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the workflow version is enabled for the sync mode.\n",
          "section": "Additional Fields"
        },
        {
          "name": "timezone",
          "label": "Timezone",
          "type": "string",
          "required": false,
          "description": "The timezone that is configured for the scheduler of the workflow. Returns null if the scheduled trigger is disabled.\n",
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "description": "The type of the workflow. Currently the only valid value is 'Workflow::Setup'.\n",
          "enum": [
            "Workflow::Setup",
            "Workflow::Instance"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "updatedAt",
          "label": "Updated At",
          "type": "string",
          "required": false,
          "description": "The date and time when the workflow is updated the last time, in the `YYYY-MM-DD HH:MM:SS` format.\n",
          "section": "Additional Fields"
        },
        {
          "name": "version",
          "label": "Version",
          "type": "string",
          "required": false,
          "description": "The version number of the active workflow version.            \n",
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
