import { Car } from "./Car";

export class BasicCar implements Car {
  assemble(): void {
    console.log("Basic car...");
  }
}
