import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get("followers")
  findFollowers() {
    return ["Amitabh", "Ashish", "Akshay", "Sagar", "Anusha"];
  }

  @Post("bio")
  createUserBio() {
    return "User bio added";
  }

  @Put("username")
  changeUsername() {
    return { success: true };
  }

  @Patch("city")
  updateUserCity() {
    return { address: { city: "SHDM" } };
  }

  @Delete("photos")
  deleteUserPhotos() {
    return; // not returning anything in response (same as `return undefined`)
  }
}
