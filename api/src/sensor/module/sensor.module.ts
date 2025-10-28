import { Module } from '@nestjs/common';
import { SensorController } from '../controllers/sensor.controller';
import { SensorService } from '../services/sensor.service';
import { PisadasRepository } from '../repositories/pisadas.repository';
import { EventsModule } from '../../events/module/events.module';

@Module({
  imports: [EventsModule],
  controllers: [SensorController],
  providers: [SensorService, PisadasRepository],
  exports: [SensorService],
})
export class SensorModule {}
