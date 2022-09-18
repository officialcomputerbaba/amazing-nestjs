import { Module } from "@nestjs/common";
import { MongooseModelsModule } from "../schemas/mongoose-models.module";
import { JobsService } from "./jobs.service";

@Module({
  imports: [
    MongooseModelsModule
  ],
  exports: [],
  providers: [JobsService],
})
export class JobsModule {}
