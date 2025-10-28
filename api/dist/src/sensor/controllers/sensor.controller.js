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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SensorController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorController = void 0;
const common_1 = require("@nestjs/common");
const sensor_service_1 = require("../services/sensor.service");
const sensor_data_dto_1 = require("../dto/sensor-data.dto");
let SensorController = SensorController_1 = class SensorController {
    sensorService;
    logger = new common_1.Logger(SensorController_1.name);
    constructor(sensorService) {
        this.sensorService = sensorService;
    }
    async receiveSensorData(sensorData) {
        this.logger.log(`📥 Datos recibidos del ESP32: ${JSON.stringify(sensorData)}`);
        try {
            const result = await this.sensorService.processSensorData(sensorData);
            this.logger.log(`✅ Datos procesados y enviados vía Socket.IO`);
            return {
                success: true,
                message: 'Datos recibidos correctamente',
                data: result,
            };
        }
        catch (error) {
            this.logger.error(`❌ Error procesando datos: ${error.message}`);
            throw error;
        }
    }
    async receivePisadas(sensorData) {
        return this.receiveSensorData(sensorData);
    }
    async getHistorial(page = '1', limit = '10', fecha, fechaInicio, fechaFin, sortBy = 'timestamp', sortOrder = 'desc') {
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        this.logger.log(`📋 Solicitando historial: página ${pageNum}, límite ${limitNum}`);
        return this.sensorService.getPisadasPaginadas({
            page: pageNum,
            limit: limitNum,
            fecha,
            fechaInicio,
            fechaFin,
            sortBy,
            sortOrder,
        });
    }
    async getStats() {
        return this.sensorService.getEstadisticas();
    }
    async getGraficaPorHora(fecha) {
        const fechaHoy = fecha || new Date().toISOString().split('T')[0];
        return this.sensorService.getPisadasPorHora(fechaHoy);
    }
};
exports.SensorController = SensorController;
__decorate([
    (0, common_1.Post)('data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_data_dto_1.SensorDataDto]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "receiveSensorData", null);
__decorate([
    (0, common_1.Post)('pisadas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_data_dto_1.SensorDataDto]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "receivePisadas", null);
__decorate([
    (0, common_1.Get)('historial'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('fecha')),
    __param(3, (0, common_1.Query)('fechaInicio')),
    __param(4, (0, common_1.Query)('fechaFin')),
    __param(5, (0, common_1.Query)('sortBy')),
    __param(6, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "getHistorial", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('grafica-por-hora'),
    __param(0, (0, common_1.Query)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "getGraficaPorHora", null);
exports.SensorController = SensorController = SensorController_1 = __decorate([
    (0, common_1.Controller)('api/sensor'),
    __metadata("design:paramtypes", [sensor_service_1.SensorService])
], SensorController);
//# sourceMappingURL=sensor.controller.js.map