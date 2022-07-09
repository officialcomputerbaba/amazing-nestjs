import {
  IsNotEmpty,
  IsNumber,
  IsNumberString
} from "class-validator";
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

// NOTE: without transforming into number data type and without custom error messages
// export class Paginable {
//     @IsNumberString()
//     @IsNotEmpty()
//     page: number;
  
//     @IsNumberString()
//     @IsNotEmpty()
//     limit: number;
// }
  