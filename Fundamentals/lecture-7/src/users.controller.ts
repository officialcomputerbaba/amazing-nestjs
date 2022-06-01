import { Body, Controller, Post, Put } from "@nestjs/common";

class ShowDTO {
  id: number;
  name: string;
  rating: number;
  type: string;
}

@Controller("users")
export class UsersController {
  // @Example 1: Body Object
  @Post("video")
  addVideo(@Body() requestData: Record<string, any>) {
    console.log(requestData);
    return { success: true, data: requestData };
  }

  // @Example 2: Extract `name` from Body Object
  @Post("show")
  addShow(@Body("name") name: string) {
    return { message: "Show added", show: name };
  }

  // @Example 3: Extract mutliple keys from Body Object
  @Post("movie")
  addMovie(@Body("name") name: string, @Body("id") id: number) {
    return { message: "Data extracted", show: name, movieId: id };
  }

  // @Example 4: Using `DTO (Data Transfer Object)` for data type
  @Put("show")
  updateShow(@Body() show: ShowDTO) {
    return { message: "Show updated", name: show.name, id: show.id };
  }
}
