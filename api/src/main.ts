import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AppConfigService } from './config/services/app-config.service';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  // Get config service
  const configService = app.get(AppConfigService);

  // Enable CORS
  app.enableCors({
    origin: configService.frontendUrl,
    credentials: true,
  });

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = configService.port;
  await app.listen(port);

  logger.log(`🚀 Application is running on: http://localhost:${port}`);
  logger.log(`🌍 Environment: ${configService.nodeEnv}`);
  logger.log(`🔗 CORS enabled for: ${configService.frontendUrl}`);
  logger.log(`📡 WebSocket server ready for connections`);
}

bootstrap();
