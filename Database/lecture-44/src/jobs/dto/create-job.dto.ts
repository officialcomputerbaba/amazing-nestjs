import { Type } from "class-transformer";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsMongoId,
} from "class-validator";
import { AddressDTO } from "../../dto/address.dto";
import { JOB_TYPE } from "../../constants";

export class CreateJobDTO {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  experience: number;

  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsOptional()
  salary?: string;

  @IsEnum(JOB_TYPE)
  @IsNotEmpty()
  type: JOB_TYPE;

  @Type(() => AddressDTO)
  @ValidateNested()
  @IsNotEmpty()
  location: AddressDTO;
}
