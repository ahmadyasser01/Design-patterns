import { CommandExecutorProxy, User_Types } from "./CommandExecutorProxy";

const adminCommandExec: CommandExecutorProxy = new CommandExecutorProxy(
  User_Types.ADMIN
);

const userCommandExec: CommandExecutorProxy = new CommandExecutorProxy(
  User_Types.USER
);

userCommandExec.run("rm -r");
adminCommandExec.run("rm -r");
