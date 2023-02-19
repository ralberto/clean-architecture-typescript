import {EmployeeRepository} from "../app/interfaces/persistence/EmployeeRepository";
import {Employee} from "../domain/employee";

export class EmployeeRepositoryImpl implements EmployeeRepository {
  add(item: Employee): void {}

  findAll(): Array<Employee> {
    return [];
  }

  findById(id: number): Employee {
    throw new Error("Not implemented");
  }

  remove(item: Employee): void {}
}
