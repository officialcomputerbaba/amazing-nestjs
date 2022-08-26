import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JobsModule } from "./jobs/jobs.module";
import { UsersModule } from "./users/users.module";
// import { APP_CONFIG } from "./config/app.config";
// import { DATABASE_CONFIG } from "./config/database.config";
// import { CRON_CONFIG } from "./config/cron.config";
// import { JWT_CONFIG } from "./config/jwt.config";
import configuration from "./config/configuration";
import { AdminModule } from "./admin/admin.module";

@Module({
  imports: [
    JobsModule,
    UsersModule,
    AdminModule,
    ConfigModule.forRoot({
      //   load: [APP_CONFIG, DATABASE_CONFIG, CRON_CONFIG, JWT_CONFIG],
      load: configuration,
      expandVariables: true,
      cache: true,
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
