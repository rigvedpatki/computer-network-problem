export class ComputerNode {

  public next: ComputerNode | null = null;
  public previous: ComputerNode | null = null;

  constructor(public storage: number, public nodeIndex: number) { }

}