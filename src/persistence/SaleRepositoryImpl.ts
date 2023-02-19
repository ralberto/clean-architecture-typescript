import { SaleRepository } from "../app/interfaces/persistence/SaleRepository";
import { Sale } from "../domain/sale";

export class SaleRepositoryImpl implements SaleRepository {
  add(item: Sale): void {
    throw new Error("Not implemented");
  }

  findAll(): Array<Sale> {
    return [];
  }

  findById(id: number): Sale {
    throw new Error("Not implemented");
  }

  remove(item: Sale): void {
    throw new Error("Not implemented");
  }
}
