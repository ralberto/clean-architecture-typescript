import {CustomerRepository} from "../app/interfaces/persistence/CustomerRepository";
import {Customer} from "../domain/customer";

export class CustomerRepositoryImpl implements CustomerRepository {
  add(item: Customer): void {}

  findAll(): Array<Customer> {
    return [];
  }

  findById(id: number): Customer {
    throw new Error("Not implemented");
  }

  remove(item: Customer): void {}
}
