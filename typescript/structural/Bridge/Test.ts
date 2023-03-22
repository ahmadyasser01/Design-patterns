import { Circle } from "./Circle";
import { RedColor } from "./RedColor";
import { WhiteColor } from "./WhiteColor";

const whiteColor = new WhiteColor();
const redColor = new RedColor();

const whiteCircle = new Circle(whiteColor);
const redCircle = new Circle(redColor);

console.log(whiteCircle.draw());
console.log(redCircle.draw());
