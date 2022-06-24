export interface Store {
  set<V>(key: string, value: V): Promise<void>;

  get(key: string): Promise<unknown>;

  del(key: string): Promise<void>;

  clear(): Promise<void>;

  getStore(): Promise<unknown>;
}
