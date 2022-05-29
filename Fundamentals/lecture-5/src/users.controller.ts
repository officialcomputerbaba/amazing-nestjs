import { Controller, Delete, HttpCode, HttpStatus, Post } from "@nestjs/common";

@Controller("users")
export class UsersController {
  // @Example 1: default status code for `POST` request is `201`
  @Post("profile")
  createProfile() {
    return { success: true };
  }

  // @Example 2: setting status code `200`
  @Post("email")
  @HttpCode(200)
  setEmail() {
    return { success: true };
  }

  // @Example 3: setting status code `200` with `HttpStatus` enum
  @Post("message")
  @HttpCode(HttpStatus.OK)
  setMessage() {
    return { message: "Be Happy" };
  }

  // @Example 4: setting status code `204` with `HttpStatus` enum
  @Delete("tags")
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTags() {
    // NOTE: Because the status code is `204` hence no `response content` is sent to the client
    return "Tags Removed";
  }
}
