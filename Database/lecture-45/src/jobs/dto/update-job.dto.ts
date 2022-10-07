import { CreateJobDTO } from "./create-job.dto";
import { PartialType, OmitType } from "@nestjs/mapped-types";

export class UpdateJobDTO extends PartialType(
  OmitType(CreateJobDTO, ["userId"])
) {}


