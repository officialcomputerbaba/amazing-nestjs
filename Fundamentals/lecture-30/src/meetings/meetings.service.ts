import { Injectable, OnModuleInit } from "@nestjs/common";
import { BehaviorSubject } from "rxjs";

class VideoServer {
  private readonly pool = new BehaviorSubject<any>(null);

  establishConnection() {
    return this.pool.asObservable();
  }

  closeConnection() {
    this.pool.unsubscribe();
  }
}

@Injectable()
export class MeetingsService implements OnModuleInit {
  videoServer: VideoServer;

  constructor() {
    this.videoServer = new VideoServer();
  }

  onModuleInit() {
    this.videoServer.establishConnection();
    console.log("on module(Meetings) init video server conn established");
  }

  onModuleDestroy() {
    console.log("on module(Meetings) destroy video server conn closed");
    this.videoServer.closeConnection();
  }
}
