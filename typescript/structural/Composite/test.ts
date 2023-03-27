import { Circle } from "./Circle";
import { Drawing } from "./Drawing";
import { Square } from "./Square";

const bigCircle = new Circle();
const smallCircle = new Circle();

const bigSquare = new Square();
const smallSquare = new Square();

const grid = new Drawing();

const squares = new Drawing();
const circles = new Drawing();

squares.add(bigSquare);
squares.add(smallSquare);

circles.add(bigCircle);
circles.add(smallCircle);

grid.add(squares);
grid.add(circles);

// Draw the grid
grid.draw();
