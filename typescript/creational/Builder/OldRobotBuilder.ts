import Robot from "./Robot";
import { RobotBuilder } from "./RobotBuilder";

export default class OldRobotBuilder implements RobotBuilder {
  robot: Robot;
  public constructor() {
    this.robot = new Robot();
  }
  buildRobotHead(): void {
    this.robot.setRobotHead("Old Robot Head");
  }
  buildRobotTorso(): void {
    this.robot.setRobotTorso("Old Robot Torso");
  }
  buildRobotArms(): void {
    this.robot.setRobotArms("Old Robot Arms");
  }
  buildRobotLegs(): void {
    this.robot.setRobotLegs("Old Robot Legs");
  }
  public getRobot(): Robot {
    return this.robot;
  }
}
