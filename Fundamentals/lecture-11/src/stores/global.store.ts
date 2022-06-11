import { Injectable } from "@nestjs/common";

let instanceCount = 1;

@Injectable()
export class GlobalStore {
    private instanceN: number;

    constructor() {
      this.instanceN = instanceCount++;
      console.log(`Global store init instance(${this.instanceN})`);
    }
  
    getStore() {
      return `I am GlobalStore ${this.instanceN}`;
    }
}
