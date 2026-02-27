import { FormSubmissionValue as FormSubmissionValueCore } from "src/entities/form-submission-value.entity";
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FormSubmissionEntity } from "./form-submission.entity";
import { FormFieldEntity } from "./form-field.entity";

export class FormSubmissionValueEntity implements FormSubmissionValueCore {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "submission_id" })
  submissionId!: number;

  @ManyToOne(() => FormSubmissionEntity, (submission) => submission.values, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "submission_id" })
  submission?: FormSubmissionEntity;

  @Column({ name: "field_id" })
  fieldId!: number;

  @ManyToOne(() => FormFieldEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "field_id" })
  field?: FormFieldEntity;

  @Column({
    type: "text",
    transformer: {
      to: (value: unknown) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value),
    },
  })
  value: any;
}
