import { Module } from "@nestjs/common";
import { CacheStoreModule } from "src/cache-store";
import { UsersService } from "./users.service";

@Module({
  imports: [CacheStoreModule.forFeature("users")],
  providers: [UsersService],
})
export class UsersModule {}
