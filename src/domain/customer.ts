import {Entity} from "./entity";

export class Customer extends Entity {
  name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
