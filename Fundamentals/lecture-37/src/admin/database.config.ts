import { registerAs } from "@nestjs/config";

export const ADMIN_DATABASE_CONFIG = registerAs("ADMIN_DATABASE", () => {
  return {
    URL: "admin@hostme.com",
    NAME: "admin_db",
  };
});
