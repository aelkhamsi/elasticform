export interface IBaseRepository<T, ID> {
  findAll(): Promise<T[]>;

  findById(id: ID): Promise<T | null>;

  create(entity: Partial<T>): Promise<T>;

  update(id: ID, entity: Partial<T>): Promise<T | null>;

  delete(id: ID): Promise<boolean>;
}
