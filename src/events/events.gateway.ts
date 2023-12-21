import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { from, Observable, map } from 'rxjs';

import { FditionService } from './fdition.service';

@WebSocketGateway(5000, {
  namespace: 'fdist',
  transports: ['websocket'],
  allowEIO3: true,
  cors: { origin: 'http://localhost:3000' },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly fditionService: FditionService) {}
  @WebSocketServer()
  server: Server;

  public handleConnection(client: Socket): void {

  }


}
