import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JobsService } from "./jobs.service";

@Module({
  imports: [ConfigModule],
  providers: [JobsService],
})
export class JobsModule {}
