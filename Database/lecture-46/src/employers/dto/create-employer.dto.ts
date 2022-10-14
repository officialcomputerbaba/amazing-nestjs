import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateUserDTO } from "../../users/dto";

export class CreateEmployerDTO extends CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  size?: string;

  @IsString({ each: true })
  @IsOptional()
  workArea?: string;

  @IsString()
  @IsOptional()
  website?: boolean;
}
