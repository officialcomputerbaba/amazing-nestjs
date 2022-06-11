import { Injectable } from "@nestjs/common";

let instanceCount = 1;

@Injectable()
export class UsersStore {
  private instanceN: number;

  constructor() {
    this.instanceN = instanceCount++;
    console.log(`Users store init instance(${this.instanceN})`);
  }

  getStore() {
    return `I am UsersStore ${this.instanceN}`;
  }
}
