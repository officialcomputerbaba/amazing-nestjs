import { Inject, Injectable } from "@nestjs/common";
import { Store } from "../cache-store";

@Injectable()
export class JobsService {
  constructor(@Inject("JOBS-STORE") private store: Store) {
    console.log(`[JobsService]:`, this.store);
  }
}
