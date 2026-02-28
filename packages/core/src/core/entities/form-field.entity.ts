import { Form } from "./form.entity";
import { FormFieldType } from "src/core/form-field-type.enum";

export interface FormField {
  id: number;

  name: string;

  type: FormFieldType;

  defaultValue?: unknown;

  required?: boolean;

  disabled?: boolean;

  formId: number;
  form?: Form; // N->1
}
