import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class MongoConfigService extends PrismaClient implements OnModuleInit {
    private readonly logger;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
