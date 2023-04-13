import { Colors } from "./Colors";
import { IShape } from "./ISahpe";

export class Square implements IShape {
  public constructor() {
    console.log("creating Square Object");
  }
  draw(x: number, y: number, color: Colors): void {
    console.log(`Drawing square in ${x}-${y}  with color ${color}`);
  }
}
