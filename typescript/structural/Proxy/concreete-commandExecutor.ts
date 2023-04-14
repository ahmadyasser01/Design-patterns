import { ICommandExecutor } from "./CommandExecutor";

export class ConcreteCommandExecutor implements ICommandExecutor {
  run(command: string): void {
    console.log("========================================================");
    console.log("Command executing...");
    console.log(command);
    console.log("Done!");
    console.log("========================================================");
  }
}
