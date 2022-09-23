import { CreateUserDTO } from "./create-user.dto";
import { PartialType, OmitType } from "@nestjs/mapped-types";

export class UpdateUserDTO extends PartialType(
  OmitType(CreateUserDTO, ["accountType", "metadata"])
) {}
