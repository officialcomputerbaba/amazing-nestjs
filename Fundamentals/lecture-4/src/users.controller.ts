import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController {
  // @Example 1: GET: /users
  @Get()
  findUsers() {
    return { users: ["Iron Man", "Dr. Strange"] };
  }

  // @Example 2: GET: /users/followers
  @Get("followers")
  findFollowers() {
    return ["Amitabh", "Ashish", "Akshay", "Sagar", "Anusha"];
  }

   // @Example 3: GET: /users/netflix/shows
  @Get("netflix/shows")
  findNetflixShows() {
    return { shows: ["Dark", "Stranger Things", "Elite"] };
  }

  // @Example 4: Route for `image` or `images`
  // GET: /users/image
  // GET: /users/images
  @Get("images?")
  findImageorImages() {
    return [
      "https://picsum.photos/200",
      "https://picsum.photos/300",
      "https://picsum.photos/400",
    ];
  }

  // @Example 5: Route for `video-1` or `video-2` and so on..
  // GET: /users/video1
  // GET: /users/video2
  @Get("video-*")
  findVideoWithDash() {
    return { success: true };
  }

  // @Example 6: Route for `channel`, `channels`, `channel1`, `channels10` and so on..
  // GET: /users/channel
  // GET: /users/channels
  // GET: /users/channel1
  // GET: /users/channels10
  @Get("channels?*")
  findChannelOrChannels() {
    return { channel: "https://www.youtube.com/c/ComputerBabaOfficial" };
  }
}
