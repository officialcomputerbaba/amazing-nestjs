import { StoreType } from "../enums/store.enum";

export type StoreOptions = Partial<{
  storeName: string;
  storeType: StoreType;
  storeDir: string;
}>;
