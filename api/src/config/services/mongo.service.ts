// NestJS
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';

// Prisma
import { PrismaClient } from '@prisma/client';

@Injectable()
export class MongoConfigService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger(MongoConfigService.name);

    async onModuleInit() {
        // Conectar a la base de datos al iniciar el modulo
        try {
            this.logger.log('⚡ Conectando a la base de datos MongoDB...');
            await this.$connect();
            this.logger.log('✅ Base de datos MongoDB conectada correctamente');
        } catch (error) {
            this.logger.error('❌ Error al conectar a la base de datos MongoDB', error);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log('🔌 Desconectado de MongoDB');
    }
}
