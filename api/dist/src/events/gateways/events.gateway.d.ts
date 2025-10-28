import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppConfigService } from '../../config/services/app-config.service';
export declare class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly configService;
    server: Server;
    private readonly logger;
    constructor(configService: AppConfigService);
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    emitSensorData(data: any): void;
    emitPisadasUpdate(pisadas: number): void;
    getConnectedClients(): number;
}
