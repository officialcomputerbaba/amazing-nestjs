import { Injectable, Scope } from "@nestjs/common";

let instanceCount = 0;

// one shared instance is used everywhere
// Nestjs uses { scope: Scope.DEFAULT } by default

@Injectable({})
// NOTE: above statement is equivalent to below statement
// @Injectable({ scope: Scope.DEFAULT })
export class UsersStore {
  constructor() {
    instanceCount++;
    console.log(`UsersStore init (instance ${instanceCount})`);
  }

  getStore() {
    return `I am UsersStore (instance ${instanceCount})`;
  }
}
