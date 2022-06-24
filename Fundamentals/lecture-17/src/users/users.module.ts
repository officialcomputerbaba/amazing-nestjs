import { Module } from "@nestjs/common";
import { CacheStoreModule } from "src/cache-store";
import { UsersService } from "./users.service";

@Module({
  imports: [
    // create a dynamic module with below option
    CacheStoreModule.register({
      storeName: "users",
    }),
  ],
  providers: [UsersService],
})
export class UsersModule {}
