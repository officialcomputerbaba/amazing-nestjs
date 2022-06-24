import { Inject, Injectable } from "@nestjs/common";
import { Store } from "../cache-store";

@Injectable()
export class UsersService {
  constructor(@Inject("USERS-STORE") private store: Store) {
    console.log(`[UsersService]:`, this.store);
  }
}
