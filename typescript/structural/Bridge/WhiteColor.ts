import { Color } from "./Color";

export class WhiteColor implements Color {
  name: string;
  hexCode: string;

  public constructor() {
    this.name = "White";
    this.hexCode = "#FFFFFF";
  }
}
