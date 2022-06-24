import { Module } from "@nestjs/common";

import { JobsModule } from "./jobs/jobs.module";
import { AdminModule } from "./admin/admin.module";
import { AppRoutingModule } from "./app-routing.module";

@Module({
  imports: [JobsModule, AdminModule, AppRoutingModule],
})
export class AppModule {}
