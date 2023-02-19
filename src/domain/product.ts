import {Entity} from "./entity";

export class Product extends Entity {
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    super(id);
    this.name = name;
    this.price = price;
  }
}
