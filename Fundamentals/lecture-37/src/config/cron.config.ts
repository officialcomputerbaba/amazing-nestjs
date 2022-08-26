import { registerAs } from "@nestjs/config";

export const CRON_CONFIG = registerAs("CRON", () => {
  return {
    runOnBootstrap: true,
    logLevel: "error",
  };
});
