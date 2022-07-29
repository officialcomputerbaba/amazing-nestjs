import { Module, OnModuleInit } from "@nestjs/common";
import { JobsController } from "./jobs.controller";
import { JobsService } from "./jobs.service";

@Module({
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule implements OnModuleInit {
  onModuleInit() {
    console.log("Jobs module init");
  }
}
