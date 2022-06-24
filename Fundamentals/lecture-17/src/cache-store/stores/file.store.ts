import { FileHandle, open } from "fs/promises";
import { join } from "path";
import { Store } from "../interfaces/store";

export class FileStore implements Store {
  private FILE: string;

  constructor(dirLoc: string, fileName: string) {
    this.FILE = join(dirLoc, `${fileName}.json`);
  }

  private async readJSON() {
    let fd: FileHandle;
    let data: object;

    try {
      fd = await open(this.FILE, "r");

      const file = await fd.readFile({ encoding: "utf-8" });

      data = JSON.parse(file) as object;
    } catch (err) {
      if (err.code === "ENOENT") {
        data = {};
      } else {
        throw err;
      }
    } finally {
      await fd?.close();
    }

    return data;
  }

  private async writeJSON<D extends object>(data: D) {
    let fd: FileHandle;

    try {
      fd = await open(this.FILE, "w");

      await fd.writeFile(JSON.stringify(data || {}));
    } catch (err) {
      throw err;
    } finally {
      await fd?.close();
    }
  }

  async getStore() {
    return await this.readJSON();
  }

  async set<V>(key: string, value: V) {
    let data = await this.readJSON();

    data[key] = value;

    await this.writeJSON(data);
  }

  async get(key: string) {
    const data = await this.readJSON();

    return data[key];
  }

  async del(key: string) {
    const data = await this.readJSON();

    delete data[key];

    this.writeJSON(data);
  }

  async clear() {
    this.writeJSON({});
  }
}
