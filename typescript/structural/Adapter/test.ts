import { json } from "node:stream/consumers";
import { StringDataProvider } from "./stringDataProvider";
import { Adapter } from "./Adapter";
const stocks = `{
  "s1": {"buy":98,"sell":99},
  "s2": {"buy":118,"sell":119},
  "s3": {"buy":200,"sell":200}
}`;

const stringDataProvider = new StringDataProvider(stocks);

const string2JSONAdapter = new Adapter(stringDataProvider);
const data = string2JSONAdapter.getData();
console.log(data);
