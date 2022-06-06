import { Controller, Get, HostParam } from "@nestjs/common";

// NOTE: The below code is only for demo purposes, it will not run with `localhost` or in a `local environment`
// in real use case, we need to deploy the code in a `production environment` and require a dedicated domain

// **************************************************************** //

// This controller will handle the request from any sub-domain followed by the mydomain.com
// In `:app.mydomain.com` where `:app` is the HostParam argument that we can use in our request handlers
@Controller({ path: "users", host: ":app.mydomain.com" })
export class UsersController {
  // @Example 1: HostParam object
  @Get("shows")
  findShows(@HostParam() hostParams: Record<string, any>) {
    // if request origin is `admin.mydomain.com` then
    // this statement will print an object like this { app: admin }
    console.log(hostParams);
    return { shows: ["Stranger Things", "Dark"], hostParams };
  }

  // @Example 2: Extract `app` param from HostParam object
  // if request origin is `admin.mydomain.com` then `:app` param is `admin`
  // if request origin is `info.mydomain.com` then `:app` param is `info`
  @Get("movies")
  findMovies(@HostParam("app") subDomain: string) {
    return { movies: ["Eternals", "Shang Chi"], subDomain };
  }
}

// This controller will handle the request from any sub-domain followed by any base domain
// In `:sub.:base.com` where `:sub` and `:base` are the HostParams argument that we can use in our request handlers
@Controller({ path: "studio", host: ":sub.:base.com" })
export class StudioController {
  // @Example 1: HostParam object
  @Get("shows")
  findShows(@HostParam() hostParams: Record<string, any>) {
    // if request origin is `upload.content.com` then
    // this statement will print an object like this { sub: upload, base: content }
    console.log(hostParams);
    return { shows: ["Stranger Things", "Dark"], hostParams };
  }

  // @Example 2: Extract `sub` and `base` param from HostParam object
  // if request origin is `upload.content.com` then `:base` param is `content` and `:sub` is `upload`
  // if request origin is `info.workspace.com` then `:base` param is `workspace` and `:sub` is `info`
  @Get("movies")
  findMovies(
    @HostParam("sub") subDomain: string,
    @HostParam("base") baseDomain: string
  ) {
    return { movies: ["Eternals", "Shang Chi"], baseDomain, subDomain };
  }
}
