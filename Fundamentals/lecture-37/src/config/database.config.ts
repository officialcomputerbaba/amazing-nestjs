import { registerAs } from "@nestjs/config";

export const DATABASE_CONFIG = registerAs("DATABASE", () => {
  return {
    USER: process.env["DATABASE_USER"],
    PASSWORD: process.env["DATABASE_PASSWORD"],
    HOST: process.env["DATABASE_HOST"],
    NAME: process.env["DATABASE_NAME"],
    PORT: process.env["DATBASE_PORT"],
    get url() {
      return `${this.HOST}:${this.PORT}/${this.NAME}`;
    },
    isLocal() {
      return process.env["DATABASE_HOST"]?.includes("localhost");
    },
  };
});
