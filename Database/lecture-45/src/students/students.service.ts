import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StudentDocument, STUDENT_MODEL } from "../schemas/student";
import { CreateStudentDTO } from "./dto";

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(STUDENT_MODEL)
    private readonly studentModel: Model<StudentDocument>
  ) {}

  async create(createStudentDto: CreateStudentDTO) {
    const createdStudent = await this.studentModel.create(createStudentDto);

    return createdStudent;
  }
}
