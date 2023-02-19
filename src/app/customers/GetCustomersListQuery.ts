import {CustomerModel} from "./CustomerModel";

export interface GetCustomersListQuery {
  execute(): Array<CustomerModel>
}
