export abstract class EnemyShip {
  private name: string = "";
  private speed: number = 0;
  private directionX: number = 0;
  private directionY: number = 0;
  private damage: number = 0;

  getName(): string {
    return this.name;
  }
  setName(shipName: string): void {
    this.name = shipName;
  }

  getDamage(): number {
    return this.damage;
  }
  setDamage(damage: number): void {
    this.damage = damage;
  }

  getSpeed(): number {
    return this.speed;
  }
  setSpeed(speed: number): void {
    this.speed = speed;
  }
  abstract getInfo(): void;
}
