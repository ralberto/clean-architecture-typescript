export interface Repository<T> {
  findAll(): Array<T>

  findById(id: number): T

  add(item: T): void

  remove(item: T): void
}
