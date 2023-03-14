import Robot from "./Robot";

export interface RobotBuilder {
  buildRobotHead(): void;
  buildRobotTorso(): void;
  buildRobotArms(): void;
  buildRobotLegs(): void;
  getRobot(): Robot;
}
