import { Injectable, Scope } from "@nestjs/common";

let instanceCount = 0;

@Injectable()
export class UsersStore {
  public readonly storeN: number;

  constructor() {
    this.storeN = ++instanceCount;

    console.log(`UsersStore init (instance ${this.storeN})`);
  }

  getStore() {
    return `I am UsersStore (instance ${this.storeN})`;
  }
}
