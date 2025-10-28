"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MongoConfigService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConfigService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let MongoConfigService = MongoConfigService_1 = class MongoConfigService extends client_1.PrismaClient {
    logger = new common_1.Logger(MongoConfigService_1.name);
    async onModuleInit() {
        try {
            this.logger.log('⚡ Conectando a la base de datos MongoDB...');
            await this.$connect();
            this.logger.log('✅ Base de datos MongoDB conectada correctamente');
        }
        catch (error) {
            this.logger.error('❌ Error al conectar a la base de datos MongoDB', error);
            throw error;
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log('🔌 Desconectado de MongoDB');
    }
};
exports.MongoConfigService = MongoConfigService;
exports.MongoConfigService = MongoConfigService = MongoConfigService_1 = __decorate([
    (0, common_1.Injectable)()
], MongoConfigService);
//# sourceMappingURL=mongo.service.js.map