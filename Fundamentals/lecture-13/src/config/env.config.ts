import { Injectable } from "@nestjs/common";

@Injectable()
export class EnvConfig {
  envType: "DEV" | "STAGE" | "PROD";

  constructor() {
    this.envType = "DEV";
  }
}

export const IS_DEV_MODE = true;
