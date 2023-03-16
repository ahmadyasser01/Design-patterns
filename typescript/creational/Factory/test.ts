import { ShipFactory } from "./ShipFactory";
import { ShipTypes } from "./ShipTypes";

const shipFactory = new ShipFactory();

const ship1 = shipFactory.makeShip(ShipTypes.SUPER);

console.log(ship1?.getInfo());
