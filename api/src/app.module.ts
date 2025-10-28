import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { EventsModule } from './events/module/events.module';
import { SensorModule } from './sensor/module/sensor.module';

@Module({
  imports: [
    ConfigModule,
    EventsModule,
    SensorModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }
