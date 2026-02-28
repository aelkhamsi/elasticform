import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FormField, FormFieldType } from "@elasticform/core";
import { FormEntity } from "./form.entity";

@Entity("form_fields")
export class FormFieldEntity implements FormField {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "enum", enum: FormFieldType })
  type!: FormFieldType;

  @Column({
    type: "text",
    transformer: {
      to: (value: unknown) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  defaultValue?: unknown;

  @Column({ type: "boolean", default: false, nullable: true })
  required?: boolean;

  @Column({ type: "boolean", default: false, nullable: true })
  disabled?: boolean;

  @Column({ name: "form_id" })
  formId!: number;

  @ManyToOne(() => FormEntity, (form) => form.fields, { onDelete: "CASCADE" })
  @JoinColumn({ name: "form_id" })
  form?: FormEntity;
}
