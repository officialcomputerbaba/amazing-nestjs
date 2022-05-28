import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController {
  // @Example 1: `string` value as response
  @Get("ping")
  sayPong() {
    return "pong";
  }

  // @Example 2: `number` value as response
  @Get("followers")
  findFollowers() {
    return 1000;
  }

  // @Example 3: `boolean` value as response
  @Get("online")
  findIsOnline() {
    return true;
  }

  // @Example 4: `undefined` or `null` value as response
  @Get("unknown")
  findUnknown() {
    return null; 

    // NOTE: can be `undefined` also
    // return undefined;

    // NOTE: can be nothing, act as `undefined`
    // return;
  }

  // @Example 5: `JSON` as response
  @Get("me")
  findMe() {
    return {
      user: "Computer Baba Fan",
      like: true,
      twitter: "akacomputerbaba",
    };

    // NOTE: we can also send an `Array`, treated as `JSON` in response
    // return ['Ajit', 'Ronaldo', 'Iron Man', 'Dr. Strange']
  }
}
