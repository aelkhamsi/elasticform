import { IBaseRepository } from "@elasticform/core";
import { DataSource, Repository, getRepository } from "typeorm";
import { FormSubmissionValueEntity } from "../entities/form-submission-value.entity";

export class FormSubmissionValueRepository implements IBaseRepository<FormSubmissionValueEntity, number> {
  private readonly formSubmissionValueRepository: Repository<FormSubmissionValueEntity>;

  constructor(dataSource: DataSource) {
    this.formSubmissionValueRepository = dataSource.getRepository(FormSubmissionValueEntity);
  }

  findAll(): Promise<FormSubmissionValueEntity[]> {
    return this.formSubmissionValueRepository.find();
  }

  findById(id: number): Promise<FormSubmissionValueEntity | null> {
    return this.formSubmissionValueRepository.findOneBy({ id });
  }

  create(data: Partial<FormSubmissionValueEntity>): Promise<FormSubmissionValueEntity> {
    const entity = this.formSubmissionValueRepository.create(data);
    return this.formSubmissionValueRepository.save(entity);
  }

  async update(id: number, data: Partial<FormSubmissionValueEntity>): Promise<FormSubmissionValueEntity | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const updatedEntity = this.formSubmissionValueRepository.merge(existing, data);
    return this.formSubmissionValueRepository.save(updatedEntity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.formSubmissionValueRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
