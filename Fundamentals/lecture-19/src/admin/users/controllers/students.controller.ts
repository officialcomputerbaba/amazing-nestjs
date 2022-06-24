import { Controller, Get } from "@nestjs/common";

// admin/users/students
@Controller("/students")
export class StudentsController {
  @Get()
  requestHandler() {
    return "Admin user students route";
  }
}
