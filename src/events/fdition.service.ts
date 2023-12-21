import { Injectable } from '@angular/core';
import { Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FditionService {
  createVideo(client: Socket, videoName: string): void {}

}
