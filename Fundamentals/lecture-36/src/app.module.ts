import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JobsModule } from "./jobs/jobs.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    JobsModule,
    UsersModule,
    ConfigModule.forRoot({
      cache: true, // enable caching of environment variables
      expandVariables: true, // enable expand variables in ".env" file
      isGlobal: true, // available globally within the application without importing into modules
    }),
  ],
})
export class AppModule {}
