import { Computer } from "./Computer";
import { ComputerAbstractFactory } from "./ComputerAbstractFactory";
import { PC } from "./Pc";

export class PcFactory implements ComputerAbstractFactory {
  public constructor(
    private ram: string,
    private cpu: string,
    private hdd: string
  ) {}
  createComputer(): Computer {
    return new PC(this.ram, this.cpu, this.hdd);
  }
}
