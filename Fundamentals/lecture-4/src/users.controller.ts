import { Controller, Get } from "@nestjs/common";
import { of } from "rxjs";

function getNetflixShows() {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve({ shows: ["Dark", "Stranger Things", "Elite"] }),
      5000
    );
  });
}

@Controller("users")
export class UsersController {
  // @Example 1: return a `sync value` that Nest will be able to resolve and send as response
  @Get("sync")
  findUsers() {
    return ["Iron Man", "Dr. Strange"];
  }

  // @Example 2: return a `promise value` that Nest will be able to resolve and send as response
  @Get("promise")
  findFollowers() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(["Amitabh", "Ashish", "Akshay", "Sagar", "Anusha"]),
        5000
      );
    });
  }

  // @Example 3: return a `deferred value (async)` that Nest will be able to resolve and send as response
  @Get("async")
  async findShows() {
    const shows = await getNetflixShows();

    return shows;
  }

  // @Example 4: return a `observable value` that Nest will be able to resolve and send as response
  @Get("observable")
  findImages() {
    return of([
      "https://picsum.photos/200",
      "https://picsum.photos/300",
      "https://picsum.photos/400",
    ]);
  }
}
