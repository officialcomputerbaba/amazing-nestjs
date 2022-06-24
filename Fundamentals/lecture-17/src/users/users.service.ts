import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "../cache-store";

@Injectable()
export class UsersService {
  constructor(private store: CacheStoreService) {
    console.log(`[UsersService]:`, this.store);
  }
}
