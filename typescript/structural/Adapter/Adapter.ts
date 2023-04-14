import { StringDataProvider } from "./stringDataProvider";
import { StringData } from "./StringData";
import { DataAdapter } from "./DataAdapter";
import { Stocks } from "./stocks";

export class Adapter implements DataAdapter {
  stringData: StringDataProvider;

  public constructor(stocksData: StringDataProvider) {
    this.stringData = stocksData;
  }
  parse(): Stocks {
    return JSON.parse(this.stringData.getData()) as Stocks;
  }
  getData(): Stocks {
    return this.parse();
  }
}
