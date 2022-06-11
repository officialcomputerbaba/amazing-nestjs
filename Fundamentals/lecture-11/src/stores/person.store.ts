import { Injectable } from "@nestjs/common";

export const PERSON_STORE_INJECTION_TOKEN = "PERSON_STORE";

let instanceCount = 1;

@Injectable()
export class PersonStore {
  private instanceN: number;

  constructor() {
    this.instanceN = instanceCount++;
    console.log(`Person store init instance(${this.instanceN})`);
  }

  getStore() {
    return `I am PersonStore ${this.instanceN}`;
  }
}
