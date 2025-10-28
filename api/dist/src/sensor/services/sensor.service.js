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
var SensorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorService = void 0;
const common_1 = require("@nestjs/common");
const luxon_1 = require("luxon");
const pisadas_repository_1 = require("../repositories/pisadas.repository");
const events_gateway_1 = require("../../events/gateways/events.gateway");
let SensorService = SensorService_1 = class SensorService {
    pisadasRepository;
    eventsGateway;
    logger = new common_1.Logger(SensorService_1.name);
    constructor(pisadasRepository, eventsGateway) {
        this.pisadasRepository = pisadasRepository;
        this.eventsGateway = eventsGateway;
    }
    async processSensorData(sensorData) {
        const timestampUTC = new Date();
        const timestampColombia = luxon_1.DateTime.fromJSDate(timestampUTC).setZone('America/Bogota');
        const fecha = timestampColombia.toFormat('yyyy-MM-dd');
        const hora = timestampColombia.toFormat('HH:mm:ss');
        const pisada = await this.pisadasRepository.create({
            fecha,
            hora,
            timestamp: timestampUTC,
        });
        this.logger.log(`💾 Pisada registrada en MongoDB: ID ${pisada.id} - ${pisada.fecha} ${pisada.hora} (Colombia)`);
        this.eventsGateway.emitSensorData({
            id: pisada.id,
            fecha: pisada.fecha,
            hora: pisada.hora,
            timestamp: pisada.timestamp,
            numeroPisada: sensorData.pisadas,
        });
        this.logger.log(`📡 Pisada emitida vía Socket.IO al frontend`);
        return pisada;
    }
    async getPisadasPaginadas(params) {
        const { page, limit, fecha, fechaInicio, fechaFin, sortBy = 'timestamp', sortOrder = 'desc' } = params;
        const skip = (page - 1) * limit;
        let filter = {};
        if (fechaInicio && fechaFin) {
            filter = { fechaInicio, fechaFin };
        }
        else if (fecha) {
            filter = { fecha };
        }
        const total = await this.pisadasRepository.count(filter);
        const pisadas = await this.pisadasRepository.findManyPaginated(filter, { skip, take: limit, sortBy, sortOrder });
        return {
            data: pisadas,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page < Math.ceil(total / limit),
                hasPrevPage: page > 1,
            },
        };
    }
    async getEstadisticas() {
        const totalPisadas = await this.pisadasRepository.getTotalCount();
        const hoy = luxon_1.DateTime.now().setZone('America/Bogota').toFormat('yyyy-MM-dd');
        const pisadasHoy = await this.pisadasRepository.countByFecha(hoy);
        const pisadasSemana = await this.pisadasRepository.countLastWeek();
        const pisadasMes = await this.pisadasRepository.countLastMonth();
        const ultimaPisada = await this.pisadasRepository.findLatest();
        return {
            totalPisadas,
            pisadasHoy,
            pisadasSemana,
            pisadasMes,
            ultimaPisada,
        };
    }
    async getPisadasPorHora(fecha) {
        const pisadas = await this.pisadasRepository.findByFecha(fecha);
        const pisadasPorHora = {};
        for (let i = 0; i < 24; i++) {
            const hora = i.toString().padStart(2, '0');
            pisadasPorHora[hora] = 0;
        }
        pisadas.forEach((pisada) => {
            const hora = pisada.hora.substring(0, 2);
            pisadasPorHora[hora] = (pisadasPorHora[hora] || 0) + 1;
        });
        return {
            fecha,
            pisadasPorHora,
            totalPisadas: pisadas.length,
        };
    }
};
exports.SensorService = SensorService;
exports.SensorService = SensorService = SensorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pisadas_repository_1.PisadasRepository,
        events_gateway_1.EventsGateway])
], SensorService);
//# sourceMappingURL=sensor.service.js.map