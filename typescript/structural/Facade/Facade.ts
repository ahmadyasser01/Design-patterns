import { ComplexSystem } from "./ComplexSystem";

export class Facade {
  private subSystem: ComplexSystem;

  constructor(subSystem?: ComplexSystem) {
    this.subSystem = subSystem || new ComplexSystem();
  }
  operation(): void {
    this.subSystem.operation1();
    this.subSystem.operation2();
    this.subSystem.operation3();
  }
}
