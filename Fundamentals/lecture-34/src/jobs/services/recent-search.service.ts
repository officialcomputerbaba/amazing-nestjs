import { Injectable } from "@nestjs/common";
import { Job } from "../interfaces/job.class";

type RecentList = Array<{ query: string; list: Job[] }>;

@Injectable()
export class RecentSearchService {
  private readonly store = new Map<string, RecentList>();

  private readonly MAX_STORED_ITEMS = 5;

  addRecentSerach(token: string, query: string, list: Job[]) {
    const recentList = this.store.get(token) || [];

    recentList.unshift({ query, list });

    if (recentList.length > this.MAX_STORED_ITEMS) {
      recentList.length = this.MAX_STORED_ITEMS;
    }

    this.store.set(token, recentList);
  }

  find(token: string) {
    const recentList = this.store.get(token);

    return recentList || [];
  }

  findByTokenAndQuery(token: string, query: string) {
    const recentList = this.find(token);

    return recentList.filter((searchResult) =>
      searchResult.query.includes(query.toLowerCase())
    );
  }
}
