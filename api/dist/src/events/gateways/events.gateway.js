"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EventsGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const app_config_service_1 = require("../../config/services/app-config.service");
let EventsGateway = EventsGateway_1 = class EventsGateway {
    configService;
    server;
    logger = new common_1.Logger(EventsGateway_1.name);
    constructor(configService) {
        this.configService = configService;
    }
    afterInit(server) {
        this.logger.log('🔌 WebSocket Gateway initialized');
        this.logger.log(`📡 CORS enabled for: ${this.configService.frontendUrl}`);
    }
    handleConnection(client) {
        this.logger.log(`✅ Client connected: ${client.id}`);
        this.logger.log(`👥 Total clients: ${this.server.sockets.sockets.size}`);
        client.emit('connection', {
            message: 'Conectado al servidor BiMEET',
            timestamp: new Date(),
        });
    }
    handleDisconnect(client) {
        this.logger.log(`❌ Client disconnected: ${client.id}`);
        this.logger.log(`👥 Total clients: ${this.server.sockets.sockets.size}`);
    }
    emitSensorData(data) {
        this.logger.log(`📤 Emitting sensor data to all clients: ${JSON.stringify(data)}`);
        this.server.emit('sensor-data', data);
    }
    emitPisadasUpdate(pisadas) {
        this.logger.log(`📤 Emitting pisadas update: ${pisadas}`);
        this.server.emit('pisadas-update', { pisadas, timestamp: new Date() });
    }
    getConnectedClients() {
        return this.server.sockets.sockets.size;
    }
};
exports.EventsGateway = EventsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
exports.EventsGateway = EventsGateway = EventsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: (origin, callback) => {
                callback(null, true);
            },
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [app_config_service_1.AppConfigService])
], EventsGateway);
//# sourceMappingURL=events.gateway.js.map