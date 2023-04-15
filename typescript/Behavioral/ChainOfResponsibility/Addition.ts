import { Chain } from "./Chain";
import { Request } from "./Request";

export class Addition implements Chain {
  nextChain: Chain | undefined;
  setNext(nextChain: Chain): void {
    this.nextChain = nextChain;
  }
  calculate(request: Request): void {
    if (request.opertaion === "add") {
      console.log(request.number_1 + request.number_2);
    } else if (this.nextChain) {
      this.nextChain.calculate(request);
    } else {
      console.log("invalid operations");
    }
  }
}
