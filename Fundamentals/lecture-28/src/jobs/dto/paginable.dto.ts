import { IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class Paginable {
  @IsNumber({}, { message: "Page must be a number" })
  @IsNotEmpty({ message: "Page must not be empty" })
  @Type(() => Number)
  page: number;

  @IsNumber({}, { message: "Limit must be a number" })
  @IsNotEmpty({ message: "Limit must not be empty" })
  @Type(() => Number)
  limit: number;
}
