import { FormField } from "./entities/form-field.entity";
import { FormSubmissionValue } from "./entities/form-submission-value.entity";
import { FormSubmission } from "./entities/form-submission.entity";
import { Form } from "./entities/form.entity";

export abstract class IFormService {
  // Forms
  abstract getForms(): Promise<Form[]>;
  abstract getFormById(formId: number): Promise<Form | null>;
  abstract createForm(data: Partial<Form>): Promise<Form>;
  abstract updateForm(formId: number, data: Partial<Form>): Promise<Form | null>;
  abstract deleteForm(formId: number): Promise<boolean>;

  // Fields
  abstract createField(data: Partial<FormField>): Promise<FormField>;
  abstract updateField(fieldId: number, data: Partial<FormField>): Promise<FormField | null>;
  abstract deleteField(fieldId: number): Promise<boolean>;

  // Submissions
  abstract createSubmission(data: Partial<FormSubmission>): Promise<FormSubmission>;
  abstract deleteSubmission(submissionId: number): Promise<boolean>;

  // Submission Values
  abstract createSubmissionValue(data: Partial<FormSubmissionValue>): Promise<FormSubmissionValue>;
  abstract updateSubmissionValue(
    valueId: number,
    data: Partial<FormSubmissionValue>,
  ): Promise<FormSubmissionValue | null>;
  abstract deleteSubmissionValue(valueId: number): Promise<boolean>;
}
