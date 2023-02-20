import {
  CustomerRepository,
} from "../app/interfaces/persistence/CustomerRepository";
import {Customer} from "../domain/customer";
import {injectable} from "inversify";

@injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  add(item: Customer): void {
  }

  findAll(): Array<Customer> {
    const c1 = new Customer(1, "Some user");
    const c2 = new Customer(2, "Other User");
    return [c1, c2];
  }

  findById(id: number): Customer {
    throw new Error("Not implemented");
  }

  remove(item: Customer): void {
  }
}
