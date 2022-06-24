import { Module } from "@nestjs/common";
import { EmployersModule } from "./employers/employers.module";
import { UsersModule } from "./users/users.module";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [UsersModule, JobsModule, EmployersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
