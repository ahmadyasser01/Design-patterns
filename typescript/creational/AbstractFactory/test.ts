import { Computer } from "./Computer";
import { ComputerFactory } from "./ComputerFactory";
import { PcFactory } from "./PcFactory";

let pc: Computer;
let server: Computer;

pc = ComputerFactory.getComputer(new PcFactory("16gb", "corei7", "1tb"));

console.log(pc.specs());
