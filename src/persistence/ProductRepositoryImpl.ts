import {ProductRepository} from "../app/interfaces/persistence/ProductRepository";
import {Employee} from "../domain/employee";
import {Product} from "../domain/product";

export class ProductRepositoryImpl implements ProductRepository {
  add(item: Product): void {}

  findAll(): Array<Product> {
    return [];
  }

  findById(id: number): Product {
    throw new Error("Not implemented");
  }

  remove(item: Employee): void {}
}
