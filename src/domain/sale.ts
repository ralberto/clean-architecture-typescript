import {Entity} from "./entity";
import {Customer} from "./customer";
import {Employee} from "./employee";
import {Product} from "./product";

export class Sale extends Entity {
  quantity = 0;
  date: Date;
  customer: Customer;
  employee: Employee;
  product: Product;
  unitPrice = 0;

  constructor(
      id: number,
      quantity: number,
      unitPrice: number,
      customer: Customer,
      employee: Employee,
      product: Product,
  ) {
    super(id);
    this.quantity = quantity;
    this.date = new Date();
    this.customer = customer;
    this.employee = employee;
    this.product = product;
    this.unitPrice = unitPrice;
  }

  get totalPrice() {
    return this.unitPrice * this.quantity;
  }
}
