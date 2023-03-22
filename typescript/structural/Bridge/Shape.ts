import { Color } from "./Color";

export interface Shape {
  color: Color;
  draw(): string;
}
