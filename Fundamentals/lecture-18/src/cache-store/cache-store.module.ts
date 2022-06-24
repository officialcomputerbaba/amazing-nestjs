import { Module, DynamicModule } from "@nestjs/common";
import { StoreOptions } from "./interfaces/store-options";
import { CacheStoreService } from "./services/cache-store.service";
import { StoreType } from "./enums/store.enum";
import { mkdir, opendir } from "fs/promises";
import { Dir } from "fs";

const DEFAULT_STORE_NAME = "DEFAULT_CACHE";
const DEFAULT_STORE_TYPE = StoreType.MEMORY;

let ROOT_STORE_OPTIONS: StoreOptions;
@Module({
  providers: [CacheStoreService],
  exports: [CacheStoreService],
})
class RootCacheStoreModule {}

@Module({})
export class CacheStoreModule {
  // create dynamic module asynchronously
  static async forRootAsync(options: StoreOptions): Promise<DynamicModule> {
    const storeOptions = CacheStoreModule.buildStoreOptions(options);

    if (storeOptions.storeType === StoreType.FILE && !storeOptions.storeDir) {
      throw new Error("File store requires store directory location");
    }

    // setting root store options
    ROOT_STORE_OPTIONS = storeOptions;

    let dirHandle: Dir;

    // create store directory if not exists
    if (storeOptions.storeType === StoreType.FILE) {
      try {
        dirHandle = await opendir(storeOptions.storeDir);
      } catch (err) {
        if (err.code === "ENOENT") {
          await mkdir(storeOptions.storeDir);
        } else {
          throw err;
        }
      } finally {
        await dirHandle?.close();
      }
    }

    // default store provider token `DEFAULT_CACHE-STORE`
    const STORE_NAME_TOKEN = CacheStoreModule.createStoreInjectionToken(
      storeOptions.storeName
    );

    return {
      module: RootCacheStoreModule,
      providers: [
        // default store provider in global scope
        {
          provide: STORE_NAME_TOKEN,
          useFactory: (cacheStoreService: CacheStoreService) =>
            cacheStoreService.createStore(storeOptions),
          inject: [CacheStoreService],
        },
      ],
      exports: [STORE_NAME_TOKEN],
    };
  }

  static forFeature(storeName: string): DynamicModule {
    // feature module store name token
    const STORE_NAME_TOKEN =
      CacheStoreModule.createStoreInjectionToken(storeName);

    return {
      module: CacheStoreModule,
      // importing `RootCacheStoreModule` for injecting `CacheStoreService` in `useFactory`
      imports: [RootCacheStoreModule],
      providers: [
        // feature module store provider
        {
          provide: STORE_NAME_TOKEN,
          useFactory: (cacheStoreService: CacheStoreService) => {
            const featureStoreOptions = CacheStoreModule.buildStoreOptions({
              ...ROOT_STORE_OPTIONS,
              storeName,
            });

            return cacheStoreService.createStore(featureStoreOptions);
          },
          inject: [CacheStoreService],
        },
      ],
      exports: [STORE_NAME_TOKEN],
    };
  }

  private static createStoreInjectionToken(storeName: string) {
    const STORE_NAME_TOKEN = `${storeName?.toUpperCase()}-STORE`;

    return STORE_NAME_TOKEN;
  }

  private static buildStoreOptions(storeOptions: StoreOptions) {
    return Object.assign(
      {
        storeName: DEFAULT_STORE_NAME,
        storeType: DEFAULT_STORE_TYPE,
      },
      storeOptions
    );
  }
}
