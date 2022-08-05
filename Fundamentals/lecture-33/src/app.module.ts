import { Module } from "@nestjs/common";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [JobsModule],
})
export class AppModule {}
