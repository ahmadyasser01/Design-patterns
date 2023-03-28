import { Car } from "./Car";
import { carDecorator } from "./carDecorator";

export class SportsCar extends carDecorator {
  public constructor(car: Car) {
    super(car);
  }

  public assemble(): void {
    super.assemble();
    console.log("Assembling sports car");
  }
}
