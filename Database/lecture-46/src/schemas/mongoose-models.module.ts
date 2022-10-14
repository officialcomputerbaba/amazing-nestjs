import { Global, Module } from "@nestjs/common";
import { ModelDefinition, MongooseModule } from "@nestjs/mongoose";
import { USER_MODEL, UserSchema } from "./user/user.schema";
import { JOB_MODEL, JobSchema } from "./job/job.schema";
import { StudentSchema, STUDENT_MODEL } from "./student/student.schema";
import { EmployerSchema, EMPLOYER_MODEL } from "./employer/employer.schema";
import { DATABASE_CONNECTION } from "../infra/mongoose/database.config";

const MODELS: ModelDefinition[] = [
  {
    name: USER_MODEL,
    schema: UserSchema,
    discriminators: [
      { name: STUDENT_MODEL, schema: StudentSchema },
      { name: EMPLOYER_MODEL, schema: EmployerSchema },
    ],
  },
  { name: JOB_MODEL, schema: JobSchema },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS, DATABASE_CONNECTION.APP)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
