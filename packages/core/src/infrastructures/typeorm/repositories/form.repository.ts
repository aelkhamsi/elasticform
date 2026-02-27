import { DataSource, getRepository, Repository } from "typeorm";
import { FormEntity } from "../entities/form.entity";
import { IBaseRepository } from "src/repositories/form.repository";

export class FormRepository implements IBaseRepository<FormEntity, number> {
  private readonly formRepository: Repository<FormEntity>;

  constructor(dataSource: DataSource) {
    this.formRepository = dataSource.getRepository(FormEntity);
  }

  findAll(): Promise<FormEntity[]> {
    return this.formRepository.find();
  }

  findById(id: number): Promise<FormEntity | null> {
    return this.formRepository.findOneBy({ id });
  }

  create(data: Partial<FormEntity>) {
    const entity = this.formRepository.create(data);
    return this.formRepository.save(entity);
  }

  async update(
    id: number,
    data: Partial<FormEntity>,
  ): Promise<FormEntity | null> {
    const existing = await this.findById(id);
    if (!existing) return null;

    const updatedEntity = this.formRepository.merge(existing, data);
    return this.formRepository.save(updatedEntity);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.formRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
