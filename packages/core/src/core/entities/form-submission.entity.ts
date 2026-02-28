import { FormSubmissionValue } from "./form-submission-value.entity";
import { Form } from "./form.entity";

export interface FormSubmission {
  id: number;

  formId: number;
  form?: Form;

  values?: FormSubmissionValue[];
}
