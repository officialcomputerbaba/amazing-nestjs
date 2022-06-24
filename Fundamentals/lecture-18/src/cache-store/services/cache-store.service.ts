import { Injectable } from "@nestjs/common";
import { StoreType } from "../enums/store.enum";
import { StoreOptions } from "../interfaces/store-options";
import { FileStore } from "../stores/file.store";
import { MemoryStore } from "../stores/memory.store";

@Injectable()
export class CacheStoreService {
  createStore(storeOptions: StoreOptions) {
    const storeName = storeOptions.storeName;
    const storeType = storeOptions.storeType;
    const fileLocation = storeOptions?.storeDir;

    return storeType === StoreType.FILE
      ? new FileStore(fileLocation, storeName)
      : new MemoryStore(storeName);
  }
}
