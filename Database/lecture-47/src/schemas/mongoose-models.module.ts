import { Global, Module } from "@nestjs/common";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";
import { USER_MODEL, UserSchema } from "./user/user.schema";
import { JOB_MODEL, JobSchema } from "./job/job.schema";

const MODELS: ModelDefinition[] = [
  {
    name: USER_MODEL,
    schema: UserSchema,
  },
  { name: JOB_MODEL, schema: JobSchema },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
