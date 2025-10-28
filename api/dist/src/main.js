"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const app_config_service_1 = require("./config/services/app-config.service");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(app_config_service_1.AppConfigService);
    app.enableCors({
        origin: configService.frontendUrl,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = configService.port;
    await app.listen(port);
    logger.log(`🚀 Application is running on: http://localhost:${port}`);
    logger.log(`🌍 Environment: ${configService.nodeEnv}`);
    logger.log(`🔗 CORS enabled for: ${configService.frontendUrl}`);
    logger.log(`📡 WebSocket server ready for connections`);
}
bootstrap();
//# sourceMappingURL=main.js.map