import { Car } from "./Car";

export abstract class carDecorator implements Car {
  protected car: Car;
  public constructor(car: Car) {
    this.car = car;
  }
  assemble(): void {
    this.car.assemble();
  }
}
