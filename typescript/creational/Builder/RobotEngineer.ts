import Robot from "./Robot";
import { RobotBuilder } from "./RobotBuilder";

export class RobotEngineer {
  private robotBuilder: RobotBuilder;

  public constructor(robotBuilder: RobotBuilder) {
    this.robotBuilder = robotBuilder;
  }

  public getRobot(): Robot {
    return this.robotBuilder.getRobot();
  }
  public makeRobot(): void {
    this.robotBuilder.buildRobotHead();
    this.robotBuilder.buildRobotTorso();
    this.robotBuilder.buildRobotLegs();
    this.robotBuilder.buildRobotArms();
  }
}
