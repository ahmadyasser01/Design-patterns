import { JsonDataProvider } from "./JsonData";
import { StringData } from "./StringData";

export class DataAdapter implements StringData {
  jsonData: JsonDataProvider;
  public constructor(jsonData: JsonDataProvider) {
    this.jsonData = jsonData;
  }
  getData(): string {
    return JSON.stringify(this.jsonData.getData());
  }
}
