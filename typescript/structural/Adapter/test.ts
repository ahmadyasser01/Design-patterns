import { json } from "node:stream/consumers";
import { JsonDataProvider } from "./JsonData";
const stocks = `{
  s1: "100",
  s2: "200",
  s3: "300",
}`;
const jsonData: JsonDataProvider = new JsonDataProvider(JSON.parse(stocks));
