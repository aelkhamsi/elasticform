import { FormField } from "./form-field.entity";
import { FormSubmission } from "./form-submission.entity";

export interface FormSubmissionValue {
  id: string;

  submissionId: string;
  submission?: FormSubmission;

  fieldId: string;
  field?: FormField;

  value: any;
}
