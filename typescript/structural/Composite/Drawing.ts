import { Shape } from "./Shape";

export class Drawing implements Shape {
  private shapes: Shape[];

  constructor() {
    this.shapes = [];
  }
  public add(s: Shape): void {
    this.shapes.push(s);
  }

  draw(): void {
    for (let shape of this.shapes) {
      shape.draw();
    }
  }
}
