import { FormField } from "./form-field.entity";
import { FormSubmission } from "./form-submission.entity";

export interface FormSubmissionValue {
  id: number;

  submissionId: number;
  submission?: FormSubmission;

  fieldId: number;
  field?: FormField;

  value: any;
}
