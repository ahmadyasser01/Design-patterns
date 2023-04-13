import { Circle } from "./Circle";
import { IShape } from "./ISahpe";
import { ShapeTypes } from "./ShapeTypes";
import { Square } from "./Square";

export class ShapeFactory {
  private static shapesMap: Map<ShapeTypes, IShape> = new Map<
    ShapeTypes,
    IShape
  >();

  static createShape(type: ShapeTypes): IShape {
    let shape = this.shapesMap.get(type);

    if (shape == undefined) {
      if (type === ShapeTypes.SQUARE) shape = new Square();
      else shape = new Circle();

      this.shapesMap.set(type, shape);
    }
    return shape;
  }
}
