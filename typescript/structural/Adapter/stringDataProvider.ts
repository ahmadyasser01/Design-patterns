import { StringData } from "./StringData";

export class StringDataProvider implements StringData {
  private data: string;
  public constructor(data: string) {
    this.data = data;
  }
  getData(): string {
    return this.data;
  }
}
