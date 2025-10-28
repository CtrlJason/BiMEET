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
var PisadasRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PisadasRepository = void 0;
const common_1 = require("@nestjs/common");
const mongo_service_1 = require("../../config/services/mongo.service");
let PisadasRepository = PisadasRepository_1 = class PisadasRepository {
    mongoService;
    logger = new common_1.Logger(PisadasRepository_1.name);
    constructor(mongoService) {
        this.mongoService = mongoService;
    }
    async create(data) {
        return this.mongoService.pisada.create({
            data: {
                fecha: data.fecha,
                hora: data.hora,
                timestamp: data.timestamp || new Date(),
            },
        });
    }
    async findManyPaginated(filter, pagination) {
        const where = {};
        if (filter.fechaInicio && filter.fechaFin) {
            where.fecha = {
                gte: filter.fechaInicio,
                lte: filter.fechaFin,
            };
        }
        else if (filter.fecha) {
            where.fecha = filter.fecha;
        }
        const pisadas = await this.mongoService.pisada.findMany({
            where,
            skip: pagination.skip,
            take: pagination.take,
            orderBy: {
                [pagination.sortBy || 'timestamp']: pagination.sortOrder || 'desc',
            },
        });
        return pisadas;
    }
    async count(filter = {}) {
        const where = {};
        if (filter.fechaInicio && filter.fechaFin) {
            where.fecha = {
                gte: filter.fechaInicio,
                lte: filter.fechaFin,
            };
        }
        else if (filter.fecha) {
            where.fecha = filter.fecha;
        }
        return this.mongoService.pisada.count({ where });
    }
    async findByFecha(fecha) {
        return this.mongoService.pisada.findMany({
            where: { fecha },
            orderBy: { hora: 'asc' },
        });
    }
    async findLatest() {
        return this.mongoService.pisada.findFirst({
            orderBy: { timestamp: 'desc' },
        });
    }
    async getTotalCount() {
        return this.mongoService.pisada.count();
    }
    async countByFecha(fecha) {
        return this.mongoService.pisada.count({
            where: { fecha },
        });
    }
    async countByDateRange(startDate, endDate) {
        return this.mongoService.pisada.count({
            where: {
                timestamp: {
                    gte: startDate,
                    lte: endDate,
                },
            },
        });
    }
    async countLastWeek() {
        const now = new Date();
        const lastWeek = new Date(now);
        lastWeek.setDate(lastWeek.getDate() - 7);
        return this.countByDateRange(lastWeek, now);
    }
    async countLastMonth() {
        const now = new Date();
        const lastMonth = new Date(now);
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        return this.countByDateRange(lastMonth, now);
    }
};
exports.PisadasRepository = PisadasRepository;
exports.PisadasRepository = PisadasRepository = PisadasRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongo_service_1.MongoConfigService])
], PisadasRepository);
//# sourceMappingURL=pisadas.repository.js.map