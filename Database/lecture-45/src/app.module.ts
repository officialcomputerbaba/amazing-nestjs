import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./infra/mongoose/database.module";
import { JobsModule } from "./jobs/jobs.module";
import { MongooseModelsModule } from "./schemas/mongoose-models.module";
import { UsersModule } from "./users/users.module";
import { StudentsModule } from "./students/students.module";
import { EmployersModule } from "./employers/employers.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelsModule,
    UsersModule,
    JobsModule,
    StudentsModule,
    EmployersModule
  ],
})
export class AppModule {}
