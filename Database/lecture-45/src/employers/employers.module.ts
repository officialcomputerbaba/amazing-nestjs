import { Module } from "@nestjs/common";
import { EmployersController } from "./employers.controller";
import { EmployersService } from "./employers.service";

@Module({
  controllers: [EmployersController],
  providers: [EmployersService],
})
export class EmployersModule {}
