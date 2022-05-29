import { Controller, Get, Redirect } from "@nestjs/common";

// NOTE: it can be any kind of logic, just for demo
let recNum = 1;
function getRecommendations() {
  recNum += 1;

  if (recNum > 5) {
    return (recNum = 1);
  }

  return recNum < 5;
}

@Controller("users")
export class UsersController {
  // @Example 1: Redirect to `/users/netflix` route
  @Get("shows")
  @Redirect("netflix") // url, statusCode (default to 302)
  // @Redirect("netflix", 302)
  // @Redirect("netflix", 307)
  // @Redirect("/users/netflix", 302)
  getShow() {
    return { message: "I am not going to show" };
  }

  // redirection path
  @Get("netflix")
  redirectNetflix() {
    return {
      shows: ["Dark", "Sabrina"],
      message: "Netflix Redirect",
      isRedirectPath: true,
    };
  }

  // ****************************************** //

  // @Example 2: Dynamic Redirect
  // we need place the `@Redirect` decorator
  // then in request handler we must return an object with this fields {url, statusCode}
  @Get("recommendations")
  @Redirect()
  getRecommendations() {
    const areLatestArrivals = getRecommendations();

    if (areLatestArrivals) {
      return {
        url: "/users/latest-shows",
        statusCode: 302, // optional
      };
    } else {
      return {
        url: "netflix", // it is same as /users/netflix
      };
    }
  }

  // redirection path
  @Get("latest-shows")
  getLatestShows() {
    return {
      shows: ["Stanger Things 4", "Money Heist"],
      message: "Latest shows Redirect",
    };
  }
}
