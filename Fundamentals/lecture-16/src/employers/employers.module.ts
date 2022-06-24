import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { EmployersController } from "./controllers/employers.controller";
import { CompanyService } from "./services/company.service";
import { EmployersService } from "./services/employers.service";

@Module({
  imports: [UsersModule],
  controllers: [EmployersController],
  providers: [EmployersService, CompanyService],
  exports: [EmployersService],
})
export class EmployersModule {}
