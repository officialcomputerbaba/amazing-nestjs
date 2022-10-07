import { Body, Controller, Post } from "@nestjs/common";
import { CreateEmployerDTO } from "./dto";
import { EmployersService } from "./employers.service";

@Controller("employers")
export class EmployersController {
  constructor(private readonly employersService: EmployersService) {}

  @Post()
  create(@Body() createEmployerDto: CreateEmployerDTO) {
    return this.employersService.create(createEmployerDto);
  }
}
