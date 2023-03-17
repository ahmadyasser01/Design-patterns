import { Computer } from "./Computer";
import { ComputerAbstractFactory } from "./ComputerAbstractFactory";
import { Server } from "./Server";

export class ServerFactory implements ComputerAbstractFactory {
  public constructor(
    private ram: string,
    private cpu: string,
    private hdd: string
  ) {}
  createComputer(): Computer {
    return new Server(this.ram, this.cpu, this.hdd);
  }
}
