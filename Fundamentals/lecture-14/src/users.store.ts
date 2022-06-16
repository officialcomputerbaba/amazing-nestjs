import { Injectable, Scope } from "@nestjs/common";

let instanceCount = 0;

// new dedicated instance is created for each consumer of this dependency
@Injectable({ scope: Scope.TRANSIENT })
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
