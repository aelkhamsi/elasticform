import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Form } from "src/entities/form.entity";
import { FormFieldEntity } from "./form-field.entity";
import { FormSubmissionEntity } from "./form-submission.entity";

@Entity("forms")
export class FormEntity implements Form {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @OneToMany(() => FormFieldEntity, (field) => field.form, { cascade: true })
  fields?: FormFieldEntity[];

  @OneToMany(() => FormSubmissionEntity, (submission) => submission.form, {
    cascade: true,
  })
  submissions?: FormSubmissionEntity[];
}
