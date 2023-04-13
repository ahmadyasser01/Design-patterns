import { Colors } from "./Colors";
import { IShape } from "./ISahpe";

export class Circle implements IShape {
  public constructor() {
    console.log("creating Circle Object");
  }

  draw(x: number, y: number, color: Colors): void {
    console.log(`Drawing Circle in ${x}-${y}  with color ${color}`);
  }
}
