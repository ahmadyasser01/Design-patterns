import { Addition } from "./Addition";
import { Request } from "./Request";
import { Subtraction } from "./subtraction";

const ch1 = new Addition();
const ch2 = new Subtraction();

ch1.setNext(ch2);

const req1 = new Request(4, 2, "add");
const req2 = new Request(4, 2, "subtraction");
const req3 = new Request(4, 2, "divide");

ch1.calculate(req1);
ch1.calculate(req2);
ch1.calculate(req3);
