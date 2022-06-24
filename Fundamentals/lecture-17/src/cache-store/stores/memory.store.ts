import { Store } from "../interfaces/store";

type StoreValue = Map<string, unknown>;

const MEMORY_STORES = new Map<string, StoreValue>();

export class MemoryStore implements Store {
  private MEMORY_STORE: StoreValue = new Map();

  private readonly STORE_KEY: string;

  constructor(storeName: string) {
    this.STORE_KEY = storeName;

    MEMORY_STORES.set(this.STORE_KEY, this.MEMORY_STORE);
  }

  async set<V>(key: string, value: V) {
    this.MEMORY_STORE.set(key, value);
  }

  async get(key: string) {
    return this.MEMORY_STORE.get(key);
  }

  async del(key: string) {
    this.MEMORY_STORE.delete(key);
  }

  async clear() {
    this.MEMORY_STORE = new Map();

    MEMORY_STORES.delete(this.STORE_KEY);
    MEMORY_STORES.set(this.STORE_KEY, this.MEMORY_STORE);
  }

  async getStore() {
    return Array.from(this.MEMORY_STORE, ([_, value]) => value);
  }
}
