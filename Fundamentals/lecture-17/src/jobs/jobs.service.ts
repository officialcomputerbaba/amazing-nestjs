import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "../cache-store";

@Injectable()
export class JobsService {
  constructor(private store: CacheStoreService) {
    console.log(`[JobsService]:`, this.store);
  }
}
