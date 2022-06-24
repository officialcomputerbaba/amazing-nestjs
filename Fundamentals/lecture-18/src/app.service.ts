import { Inject, Injectable } from "@nestjs/common";
import { Store } from "./cache-store";

@Injectable()
export class AppService {
  constructor(@Inject("DEFAULT_CACHE-STORE") private store: Store) {
    console.log(`[AppService]:`, this.store);
  }
}
