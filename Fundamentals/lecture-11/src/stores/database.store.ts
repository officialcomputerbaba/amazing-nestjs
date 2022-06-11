import { Injectable } from "@nestjs/common";

let instanceCount = 1;

@Injectable()
export class DatabaseStore {
    private instanceN: number;

    constructor() {
      this.instanceN = instanceCount++;
      console.log(`Database store init instance(${this.instanceN})`);
    }
  
    getStore() {
      return `I am DatabaseStore ${this.instanceN}`;
    }
}
