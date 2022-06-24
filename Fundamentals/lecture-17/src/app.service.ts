import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "./cache-store";

@Injectable()
export class AppService {
  constructor(private store: CacheStoreService) {
    console.log(`[AppService]:`, this.store);
  }
}
