import { DataSource, Repository, getRepository } from "typeorm";
import { FormFieldEntity } from "../entities/form-field.entity";
import { IBaseRepository } from "src/core/form.repository";

export class FormFieldRepository implements IBaseRepository<FormFieldEntity, number> {
  private readonly formFieldRepository: Repository<FormFieldEntity>;

  constructor(dataSource: DataSource) {
    this.formFieldRepository = dataSource.getRepository(FormFieldEntity);
  }

  findAll(): Promise<FormFieldEntity[]> {
    return this.formFieldRepository.find();
  }

  findById(id: number): Promise<FormFieldEntity | null> {
    return this.formFieldRepository.findOneBy({ id });
  }

  create(data: Partial<FormFieldEntity>): Promise<FormFieldEntity> {
    const entity = this.formFieldRepository.create(data);
    return this.formFieldRepository.save(entity);
  }

  async update(id: number, data: Partial<FormFieldEntity>): Promise<FormFieldEntity | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const updatedEntity = this.formFieldRepository.merge(existing, data);
    return this.formFieldRepository.save(updatedEntity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.formFieldRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
