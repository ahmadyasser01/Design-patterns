import { Computer } from "./Computer";
import { ComputerAbstractFactory } from "./ComputerAbstractFactory";

export class ComputerFactory {
  public static getComputer(factory: ComputerAbstractFactory): Computer {
    return factory.createComputer();
  }
}
