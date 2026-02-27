import { Form } from "./form.entity";

export type FormFieldType = "text" | "number" | "boolean" | "date" | "json";

export interface FormField {
  id: string;

  name: string;

  type: FormFieldType;

  defaultValue?: unknown;

  required?: boolean;

  disabled?: boolean;

  formId: string;
  form?: Form; // N->1
}
