import { FormField } from "./form-field.entity";
import { FormSubmission } from "./form-submission.entity";

export interface Form {
  id: string;

  name: string;

  fields?: FormField[];

  submissions?: FormSubmission[];
}
