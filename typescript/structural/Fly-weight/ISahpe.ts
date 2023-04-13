import { Colors } from "./Colors";

export interface IShape {
  draw(x: number, y: number, color: Colors): void;
}
