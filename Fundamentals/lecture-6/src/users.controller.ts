import { Controller, Get, Param } from "@nestjs/common";

interface AlbumParams {
  id: number;
  group: string;
}

@Controller("users")
export class UsersController {
  // @Example 1: Route Params Object
  @Get("videos/:id")
  getVideos(@Param() params: Record<string, any>) {
    console.log(params);
    return params;
  }

  // @Example 2: Multiple params in Route Params Object
  @Get("movies/:type/:id")
  getMovies(@Param() params: Record<string, any>) {
    console.log(params);
    return params;
  }

  // @Example 3: Extract `id` param from Route Params Object
  @Get("shows/:id")
  getShows(@Param("id") id: number) {
    // NOTE: `number` data type is just for developer ref, it will not convert the `id` to number
    console.log(id, typeof id);
    return { showId: id };
  }

  // @Example 4: Extract multiple params from Route Params Object
  @Get("latest-movies/:type/:id")
  getLatestMovies(@Param("type") type: string, @Param("id") id: number) {
    return { type, movieId: id };
  }

  // @Example 5: Route Params Object with a `type`
  @Get("albums/:group/:id")
  getAlbums(@Param() params: AlbumParams) {
    return {
      message: "You albums group",
      group: params.group,
      id: params.id,
    };
  }
}
