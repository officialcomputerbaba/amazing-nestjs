import { Global, Module } from "@nestjs/common";
import { USER_MODEL, UserSchema } from "./user/user.schema";
import { JOB_MODEL, JobSchema } from "./job/job.schema";
import { Connection } from "mongoose";
import { DATABASE_CONNECTION } from "../infra/mongoose/database.constants";

const MODELS_PROVIDERS = [
    {
      provide: USER_MODEL,
      useFactory(connection: Connection) {
        // here we can do any operation or add logic like plugin, hooks, methods and more
        return connection.model(USER_MODEL, UserSchema);
      },
      inject: [DATABASE_CONNECTION],
    },
    {
      provide: JOB_MODEL,
      useFactory(connection: Connection) {
        return connection.model(JOB_MODEL, JobSchema);
      },
      inject: [DATABASE_CONNECTION],
    },
  ];

@Global()
@Module({
    providers: [...MODELS_PROVIDERS],
    exports: [...MODELS_PROVIDERS],
})
export class MongooseModelsModule {}
