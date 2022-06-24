import { Module, DynamicModule } from "@nestjs/common";
import { STORE_OPTIONS } from "./constants";
import { StoreOptions } from "./interfaces/store-options";
import { CacheStoreService } from "./services/cache-store.service";
import { StoreType } from "./enums/store.enum";

const DEFAULT_STORE_NAME = "DEFAULT_CACHE";
const DEFAULT_STORE_TYPE = StoreType.MEMORY;

@Module({
  // these props extend to the below return statement
  providers: [CacheStoreService],
  exports: [CacheStoreService],
})
export class CacheStoreModule {
  static register(options: StoreOptions): DynamicModule {
    const storeOptions = Object.assign(
      {
        storeName: DEFAULT_STORE_NAME,
        storeType: DEFAULT_STORE_TYPE,
      },
      options
    );

    if (storeOptions.storeType === StoreType.FILE && !storeOptions.storeDir) {
      throw new Error("File store directory location not provided");
    }

    return {
      module: CacheStoreModule,
      providers: [
        {
          provide: STORE_OPTIONS,
          useValue: storeOptions,
        },
      ],
    };
  }
}
