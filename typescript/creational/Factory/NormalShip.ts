import { EnemyShip } from "./EnemyShip";

export class NormalShip extends EnemyShip {
  public constructor() {
    super();
    this.setName("Normal ship");
    this.setDamage(10);
    this.setSpeed(1);
  }

  getInfo(): void {
    const damage = this.getDamage();
    const speed = this.getSpeed();
    console.log("damage is ", damage, "speed is ", speed);
  }
}
