import { FormField } from "./entities/form-field.entity";
import { FormSubmissionValue } from "./entities/form-submission-value.entity";
import { FormSubmission } from "./entities/form-submission.entity";
import { Form } from "./entities/form.entity";

export interface IFormService {
  // Forms
  getForms(): Promise<Form[]>;
  getFormById(): Promise<Form | null>;
  createForm(data: Partial<Form>): Promise<Form>;
  updateForm(formId: number, data: Partial<Form>): Promise<Form | null>;
  deleteForm(formId: number): Promise<boolean>;

  // Fields
  createField(data: Partial<FormField>): Promise<FormField>;
  updateField(fieldId: number, data: Partial<FormField>): Promise<FormField | null>;
  deleteField(fieldId: number): Promise<boolean>;

  // Submissions
  createSubmission(submissionId: number, data: Partial<FormSubmission>): Promise<FormSubmission>;
  deleteSubmission(submissionId: number): Promise<boolean>;

  // Submission Values
  createSubmissionValue(data: Partial<FormSubmissionValue>): Promise<FormSubmissionValue>;
  updateSubmissionValue(valueId: number, data: Partial<FormSubmissionValue>): Promise<FormSubmissionValue | null>;
  createSubmissionValue(valueId: number): Promise<boolean>;
}
