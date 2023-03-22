import { Color } from "./Color";
import { Shape } from "./Shape";

export class Circle implements Shape {
  color: Color;

  public constructor(color: Color) {
    this.color = color;
  }
  draw(): string {
    return `You drawed a circle with color ${this.color.name}|[${this.color.hexCode}]`;
  }
}
