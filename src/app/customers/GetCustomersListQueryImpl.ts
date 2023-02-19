import {CustomerModel} from "./CustomerModel";
import {CustomerRepository} from "../interfaces/persistence/CustomerRepository";
import {GetCustomersListQuery} from "./GetCustomersListQuery";

export class GetCustomersListQueryImpl implements GetCustomersListQuery {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  execute(): Array<CustomerModel> {
    const customers = this.customerRepository.findAll();
    return customers.map((c) => new CustomerModel(c.id, c.name));
  }
}
