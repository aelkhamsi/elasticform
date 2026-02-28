import { FormSubmission } from "src/core/entities/form-submission.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FormEntity } from "./form.entity";
import { FormSubmissionValueEntity } from "./form-submission-value.entity";

@Entity("form_submissions")
export class FormSubmissionEntity implements FormSubmission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "form_id" })
  formId!: number;

  @ManyToOne(() => FormEntity, (form) => form.submissions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "form_id" })
  form?: FormEntity;

  @OneToMany(() => FormSubmissionValueEntity, (value) => value.submission, {
    cascade: true,
  })
  values?: FormSubmissionValueEntity[];
}
