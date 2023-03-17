export abstract class Computer {
  public constructor(
    protected ram: string,
    protected cpu: string,
    protected hdd: string
  ) {}

  public abstract getRAM(): string;
  public abstract getCPU(): string;
  public abstract getHDD(): string;

  public specs(): string {
    return `RAM= ${this.getRAM()}, CPU= ${this.getCPU()}, HDD=${this.getHDD()}`;
  }
}
