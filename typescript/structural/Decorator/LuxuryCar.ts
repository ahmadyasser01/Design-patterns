import { Car } from "./Car";
import { carDecorator } from "./carDecorator";

export class LuxuryCar extends carDecorator {
  public constructor(car: Car) {
    super(car);
  }

  public assemble(): void {
    super.assemble();
    console.log("Assembling luxury car");
  }
}
