import { Colors } from "./Colors";
import { ShapeFactory } from "./Shape-factory";
import { ShapeTypes } from "./ShapeTypes";

const circle1 = ShapeFactory.createShape(ShapeTypes.CIRCLE);
circle1.draw(0, 0, Colors.RED);
const circle2 = ShapeFactory.createShape(ShapeTypes.CIRCLE);
circle2.draw(100, 50, Colors.WHITE);

const square1 = ShapeFactory.createShape(ShapeTypes.SQUARE);
square1.draw(200, 200, Colors.BLACK);
const square2 = ShapeFactory.createShape(ShapeTypes.SQUARE);
square2.draw(50, 200, Colors.GREEN);
