import OldRobotBuilder from "./OldRobotBuilder";
import { RobotBuilder } from "./RobotBuilder";
import { RobotEngineer } from "./RobotEngineer";

let oldRobotBuilder: RobotBuilder;

oldRobotBuilder = new OldRobotBuilder();

const robotEngineer = new RobotEngineer(oldRobotBuilder);

robotEngineer.makeRobot();

const robot = robotEngineer.getRobot();

console.log(robot);
console.log(robot.getRobotHead());
console.log(robot.getRobotTorso());
console.log(robot.getRobotArms());
console.log(robot.getRobotLegs());
