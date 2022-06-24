import { Module } from "@nestjs/common";
import { EmployersController } from "./controllers/employers.controller";
import { CompanyService } from "./services/company.service";
import { EmployersService } from "./services/employers.service";

@Module({
  imports: [],
  controllers: [EmployersController],
  providers: [EmployersService, CompanyService],
  exports: [EmployersService],
})
export class EmployersModule {}
