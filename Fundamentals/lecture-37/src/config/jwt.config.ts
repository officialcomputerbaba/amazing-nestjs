import { registerAs } from "@nestjs/config";

export const JWT_CONFIG = registerAs("JWT", () => {
  return {
    SECRET: process.env["JWT_SECRET"],
    EXPIRE_TIME: process.env["JWT_EXPIRE_TIME"],
  };
});
