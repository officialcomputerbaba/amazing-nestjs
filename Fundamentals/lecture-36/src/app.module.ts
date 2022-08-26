import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JobsModule } from "./jobs/jobs.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [JobsModule, UsersModule, ConfigModule.forRoot()],
})
export class AppModule {}
