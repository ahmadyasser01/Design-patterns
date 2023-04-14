import { ICommandExecutor } from "./CommandExecutor";
import { ConcreteCommandExecutor } from "./concreete-commandExecutor";
export enum User_Types {
  USER = "USER",
  ADMIN = "ADMIN",
}
export class CommandExecutorProxy implements ICommandExecutor {
  private permissions: { [key in User_Types]: boolean } = {
    [User_Types.ADMIN]: true,
    [User_Types.USER]: false,
  };
  private hasPermission: boolean;

  private commandExecutor: ConcreteCommandExecutor;
  public constructor(user: User_Types) {
    this.hasPermission = this.permissions[user];
    this.commandExecutor = new ConcreteCommandExecutor();
  }
  run(command: string): void {
    if (this.hasPermission) {
      this.commandExecutor.run(command);
    } else {
      console.log("You do not have permission to run this command..");
    }
  }
}
