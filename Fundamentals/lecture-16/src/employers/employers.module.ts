import { Module } from "@nestjs/common";
import { JobsModule } from "src/jobs/jobs.module";
import { EmployersController } from "./controllers/employers.controller";
import { CompanyService } from "./services/company.service";
import { EmployersService } from "./services/employers.service";

@Module({
  // NOTE: `JobsModule` exports the `JobsApplicationsModule`
  // therefore `JobsApplicationsModule` is imported into this module also
  imports: [JobsModule],
  controllers: [EmployersController],
  providers: [EmployersService, CompanyService],
  exports: [EmployersService],
})
export class EmployersModule {}
