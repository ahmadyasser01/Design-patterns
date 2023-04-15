import { Request } from "./Request";

export interface Chain {
  setNext(nextChain: Chain): void;
  calculate(request: Request): void;
}
