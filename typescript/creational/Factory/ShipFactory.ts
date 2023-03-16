import { EnemyShip } from "./EnemyShip";
import { NormalShip } from "./NormalShip";
import { ShipTypes } from "./ShipTypes";
import { SuperShip } from "./SuperShip";

export class ShipFactory {
  public makeShip(type: ShipTypes): EnemyShip | null {
    switch (type) {
      case ShipTypes.SUPER:
        return new SuperShip();
      case ShipTypes.NORMAL:
        return new NormalShip();
      default:
        return null;
    }
  }
}
