import { Color } from "./Color";

export class RedColor implements Color {
  name: string;
  hexCode: string;

  public constructor() {
    this.name = "Red";
    this.hexCode = "#FF0000";
  }
}
