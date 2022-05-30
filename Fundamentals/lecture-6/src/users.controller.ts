import { Controller, Get, Query } from "@nestjs/common";

interface AlbumQueryParams {
  size: number;
  title: string;
}

@Controller("users")
export class UsersController {
  // @Example 1: Query Params Object
  @Get("videos")
  getVideos(@Query() params: Record<string, any>) {
    console.log(params);
    return params;
  }

  // @Example 2: Extract `name` param from Query Params Object
  @Get("shows")
  getShows(@Query("name") name: string) {
    console.log(name);
    return { title: name };
  }

  // @Example 3: Extract multiple params from Query Params Object
  @Get("latest-movies")
  getLatestMovies(
    @Query("name") name: string,
    @Query("rating") rating: number // NOTE: data type is only for developer ref, query params values are always in `string` format
  ) {
    return { name, rating };
  }

  // @Example 4: Query Params Object with a `type`
  @Get("albums")
  getAlbums(@Query() params: AlbumQueryParams) {
    return {
      message: "You albums group",
      title: params.title,
      size: params.size,
    };
  }
}
