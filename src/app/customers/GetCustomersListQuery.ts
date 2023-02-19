import {CustomerModel} from "./CustomerModel";

export interface GetCustomersListQuery {
  Execute(): Array<CustomerModel>
}
