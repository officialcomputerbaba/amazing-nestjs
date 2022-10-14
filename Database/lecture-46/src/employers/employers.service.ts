import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DATABASE_CONNECTION } from "../infra/mongoose/database.config";
import { EmployerDocument, EMPLOYER_MODEL } from "../schemas/employer";
import { CreateEmployerDTO } from "./dto";

@Injectable()
export class EmployersService {
  constructor(
    @InjectModel(EMPLOYER_MODEL, DATABASE_CONNECTION.APP)
    private readonly employerModel: Model<EmployerDocument>
  ) {}

  async create(createEmployerDto: CreateEmployerDTO) {
    const createdEmployer = await this.employerModel.create(createEmployerDto);

    return createdEmployer;
  }
}
