import { IBuilder } from "./IBuilder";

export default class Robot implements IBuilder {
  private robotHead: string;
  private robotTorso: string;
  private robotArms: string;
  private robotLegs: string;

  public constructor() {
    this.robotHead = "";
    this.robotTorso = "";
    this.robotArms = "";
    this.robotLegs = "";
  }
  setRobotHead(head: string): void {
    this.robotHead = head;
  }
  setRobotTorso(torso: string): void {
    this.robotTorso = torso;
  }
  setRobotArms(arms: string): void {
    this.robotArms = arms;
  }
  setRobotLegs(legs: string): void {
    this.robotLegs = legs;
  }
  getRobotHead(): string {
    return this.robotHead;
  }
  getRobotTorso(): string {
    return this.robotTorso;
  }
  getRobotArms(): string {
    return this.robotArms;
  }
  getRobotLegs(): string {
    return this.robotLegs;
  }
}
