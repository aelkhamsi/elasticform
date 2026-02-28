import { FormField } from "./form-field.entity";
import { FormSubmission } from "./form-submission.entity";

export interface Form {
  id: number;

  name: string;

  fields?: FormField[];

  submissions?: FormSubmission[];
}
