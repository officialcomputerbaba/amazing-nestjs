import { Body, Controller, Post } from "@nestjs/common";
import { CreateStudentDTO } from "./dto";
import { StudentsService } from "./students.service";

@Controller("students")
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDTO) {
    return this.studentsService.create(createStudentDto);
  }
}
