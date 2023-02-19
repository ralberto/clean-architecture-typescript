import {CustomerModel} from "./CustomerModel";
import {CustomerRepository} from "../interfaces/persistence/CustomerRepository";

export class GetCustomersListQueryImpl implements GetCustomersListQueryImpl {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  Execute(): Array<CustomerModel> {
    const customers = this.customerRepository.findAll();
    return customers.map((c) => new CustomerModel(c.id, c.name));
  }
}
