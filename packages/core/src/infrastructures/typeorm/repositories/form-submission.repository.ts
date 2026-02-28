import { IBaseRepository } from "src/core/form.repository";
import { FormSubmissionEntity } from "../entities/form-submission.entity";
import { DataSource, Repository } from "typeorm";

export class FormSubmissionRepository
  implements IBaseRepository<FormSubmissionEntity, number>
{
  private readonly formSubmissionRepository: Repository<FormSubmissionEntity>;

  constructor(dataSource: DataSource) {
    this.formSubmissionRepository =
      dataSource.getRepository(FormSubmissionEntity);
  }

  findAll(): Promise<FormSubmissionEntity[]> {
    return this.formSubmissionRepository.find({
      relations: ["form"],
    });
  }

  findById(id: number): Promise<FormSubmissionEntity | null> {
    return this.formSubmissionRepository.findOne({
      where: { id },
      relations: ["form", "values", "values.field"],
    });
  }

  create(data: Partial<FormSubmissionEntity>): Promise<FormSubmissionEntity> {
    const entity = this.formSubmissionRepository.create(data);
    return this.formSubmissionRepository.save(entity);
  }

  async update(
    id: number,
    data: Partial<FormSubmissionEntity>,
  ): Promise<FormSubmissionEntity | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const entity = this.formSubmissionRepository.merge(existing, data);
    return this.formSubmissionRepository.save(entity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.formSubmissionRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
