import { StringData } from "./StringData";

export class Stock implements StringData {
  data: string;

  public constructor(data: string) {
    this.data = data;
  }
  getData(): string {
    console.log(" Stocks data in string format");
    return this.data;
  }
}
