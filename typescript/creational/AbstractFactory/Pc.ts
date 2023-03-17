import { Computer } from "./Computer";

export class PC extends Computer {
  public constructor(ram: string, cpu: string, hdd: string) {
    console.log("PC is created ");
    super(ram, cpu, hdd);
  }
  public getRAM(): string {
    return this.ram;
  }
  public getCPU(): string {
    return this.cpu;
  }
  public getHDD(): string {
    return this.hdd;
  }
}
