import { Computer } from "./Computer";

export interface ComputerAbstractFactory {
  createComputer(): Computer;
}
