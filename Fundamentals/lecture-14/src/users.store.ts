import { Injectable, Scope } from "@nestjs/common";

// new instance is created whenever a HTTP request comes in and destroyed after request completion
@Injectable({ scope: Scope.REQUEST })
export class UsersStore {
  constructor() {
    console.log(`[UsersStore]: init on HTTP request`);
  }
}
