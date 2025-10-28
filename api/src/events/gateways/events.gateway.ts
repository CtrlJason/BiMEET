import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { AppConfigService } from '../../config/services/app-config.service';

@WebSocketGateway({
  cors: {
    origin: (origin, callback) => {
      // Permitir solicitudes del frontend
      callback(null, true);
    },
    credentials: true,
  },
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(EventsGateway.name);

  constructor(private readonly configService: AppConfigService) { }

  afterInit(server: Server) {
    this.logger.log('🔌 WebSocket Gateway initialized');
    this.logger.log(`📡 CORS enabled for: ${this.configService.frontendUrl}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`✅ Client connected: ${client.id}`);
    this.logger.log(`👥 Total clients: ${this.server.sockets.sockets.size}`);

    // Enviar mensaje de bienvenida
    client.emit('connection', {
      message: 'Conectado al servidor BiMEET',
      timestamp: new Date(),
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`❌ Client disconnected: ${client.id}`);
    this.logger.log(`👥 Total clients: ${this.server.sockets.sockets.size}`);
  }

  // Método para emitir datos de sensor a todos los clientes conectados
  emitSensorData(data: any) {
    this.logger.log(`📤 Emitting sensor data to all clients: ${JSON.stringify(data)}`);
    this.server.emit('sensor-data', data);
  }

  // Método para emitir solo las pisadas actualizadas (más ligero)
  emitPisadasUpdate(pisadas: number) {
    this.logger.log(`📤 Emitting pisadas update: ${pisadas}`);
    this.server.emit('pisadas-update', { pisadas, timestamp: new Date() });
  }

  // Método para obtener el número de clientes conectados
  getConnectedClients(): number {
    return this.server.sockets.sockets.size;
  }
}
