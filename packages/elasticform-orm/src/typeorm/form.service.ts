import { IFormService } from "@elasticform/core";
import { FormRepository } from "./repositories/form.repository";
import { FormSubmissionRepository } from "./repositories/form-submission.repository";
import { FormFieldRepository } from "./repositories/form-field.repository";
import { FormSubmissionValueRepository } from "./repositories/form-submission-value.repository";
import { FormEntity } from "./entities/form.entity";
import { FormFieldEntity } from "./entities/form-field.entity";
import { FormSubmissionEntity } from "./entities/form-submission.entity";
import { FormSubmissionValueEntity } from "./entities/form-submission-value.entity";
import { DataSource } from "typeorm";

export class FormService implements IFormService {
  private readonly formRepository: FormRepository;
  private readonly formSubmissionRepository: FormSubmissionRepository;
  private readonly formFieldRepository: FormFieldRepository;
  private readonly formSubmissionValueRepository: FormSubmissionValueRepository;

  constructor(dataSource: DataSource) {
    this.formRepository = new FormRepository(dataSource);
    this.formSubmissionRepository = new FormSubmissionRepository(dataSource);
    this.formFieldRepository = new FormFieldRepository(dataSource);
    this.formSubmissionValueRepository = new FormSubmissionValueRepository(dataSource);
  }

  // Forms
  getForms(): Promise<FormEntity[]> {
    return this.formRepository.findAll();
  }

  getFormById(formId: number): Promise<FormEntity | null> {
    return this.formRepository.findById(formId);
  }

  createForm(data: Partial<FormEntity>): Promise<FormEntity> {
    return this.formRepository.create(data);
  }

  updateForm(formId: number, data: Partial<FormEntity>): Promise<FormEntity | null> {
    return this.formRepository.update(formId, data);
  }

  deleteForm(formId: number): Promise<boolean> {
    return this.formRepository.delete(formId);
  }

  // Fields
  createField(data: Partial<FormFieldEntity>): Promise<FormFieldEntity> {
    return this.formFieldRepository.create(data);
  }

  updateField(fieldId: number, data: Partial<FormFieldEntity>): Promise<FormFieldEntity | null> {
    return this.formFieldRepository.update(fieldId, data);
  }

  deleteField(fieldId: number): Promise<boolean> {
    return this.formFieldRepository.delete(fieldId);
  }

  // Submissions
  createSubmission(data: Partial<FormSubmissionEntity>): Promise<FormSubmissionEntity> {
    return this.formSubmissionRepository.create(data);
  }

  deleteSubmission(submissionId: number): Promise<boolean> {
    return this.formSubmissionRepository.delete(submissionId);
  }

  // Submission Values
  createSubmissionValue(data: Partial<FormSubmissionValueEntity>): Promise<FormSubmissionValueEntity> {
    return this.formSubmissionValueRepository.create(data);
  }

  updateSubmissionValue(
    valueId: number,
    data: Partial<FormSubmissionValueEntity>,
  ): Promise<FormSubmissionValueEntity | null> {
    return this.formSubmissionValueRepository.update(valueId, data);
  }

  deleteSubmissionValue(valueId: number): Promise<boolean> {
    return this.formSubmissionValueRepository.delete(valueId);
  }
}
