import { EnemyShip } from "./EnemyShip";

export class SuperShip extends EnemyShip {
  public constructor() {
    super();
    this.setName("Super ship");
    this.setDamage(100);
    this.setSpeed(10);
  }

  getInfo(): void {
    const damage = this.getDamage();
    const speed = this.getSpeed();
    console.log("damage is ", damage, "speed is ", speed);
  }
}
