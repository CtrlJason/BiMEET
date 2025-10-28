import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { MongoConfigService } from './services/mongo.service';
import { AppConfigService } from './services/app-config.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [MongoConfigService, AppConfigService],
  exports: [MongoConfigService, AppConfigService],
})
export class ConfigModule {}

