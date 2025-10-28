import { Injectable, Logger } from '@nestjs/common';
import { DateTime } from 'luxon';
import { SensorDataDto } from '../dto/sensor-data.dto';
import { PisadasRepository } from '../repositories/pisadas.repository';
import { EventsGateway } from '../../events/gateways/events.gateway';

@Injectable()
export class SensorService {
  private readonly logger = new Logger(SensorService.name);

  constructor(
    private readonly pisadasRepository: PisadasRepository,
    private readonly eventsGateway: EventsGateway,
  ) {}

  async processSensorData(sensorData: SensorDataDto) {
    // Almacenar en UTC
    const timestampUTC = new Date();

    // Convertir a zona horaria de Colombia solo para los campos fecha y hora
    const timestampColombia = DateTime.fromJSDate(timestampUTC).setZone('America/Bogota');
    const fecha = timestampColombia.toFormat('yyyy-MM-dd');
    const hora = timestampColombia.toFormat('HH:mm:ss');

    const pisada = await this.pisadasRepository.create({
      fecha,
      hora,
      timestamp: timestampUTC, // Almacena en UTC
    });

    this.logger.log(`💾 Pisada registrada en MongoDB: ID ${pisada.id} - ${pisada.fecha} ${pisada.hora} (Colombia)`);

    this.eventsGateway.emitSensorData({
      id: pisada.id,
      fecha: pisada.fecha,
      hora: pisada.hora,
      timestamp: pisada.timestamp,
      numeroPisada: sensorData.pisadas,
    });

    this.logger.log(`📡 Pisada emitida vía Socket.IO al frontend`);

    return pisada;
  }

  async getPisadasPaginadas(params: {
    page: number;
    limit: number;
    fecha?: string;
    fechaInicio?: string;
    fechaFin?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) {
    const { page, limit, fecha, fechaInicio, fechaFin, sortBy = 'timestamp', sortOrder = 'desc' } = params;
    const skip = (page - 1) * limit;

    // Construir filtro - priorizar rango sobre fecha única
    let filter = {};
    if (fechaInicio && fechaFin) {
      filter = { fechaInicio, fechaFin };
    } else if (fecha) {
      filter = { fecha };
    }

    const total = await this.pisadasRepository.count(filter);
    const pisadas = await this.pisadasRepository.findManyPaginated(
      filter,
      { skip, take: limit, sortBy, sortOrder },
    );

    return {
      data: pisadas,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1,
      },
    };
  }

  async getEstadisticas() {
    const totalPisadas = await this.pisadasRepository.getTotalCount();

    // Obtener fecha actual en Colombia para los filtros
    const hoy = DateTime.now().setZone('America/Bogota').toFormat('yyyy-MM-dd');

    const pisadasHoy = await this.pisadasRepository.countByFecha(hoy);
    const pisadasSemana = await this.pisadasRepository.countLastWeek();
    const pisadasMes = await this.pisadasRepository.countLastMonth();
    const ultimaPisada = await this.pisadasRepository.findLatest();

    return {
      totalPisadas,
      pisadasHoy,
      pisadasSemana,
      pisadasMes,
      ultimaPisada,
    };
  }

  async getPisadasPorHora(fecha: string) {
    const pisadas = await this.pisadasRepository.findByFecha(fecha);
    const pisadasPorHora: { [key: string]: number } = {};

    for (let i = 0; i < 24; i++) {
      const hora = i.toString().padStart(2, '0');
      pisadasPorHora[hora] = 0;
    }

    pisadas.forEach((pisada) => {
      const hora = pisada.hora.substring(0, 2);
      pisadasPorHora[hora] = (pisadasPorHora[hora] || 0) + 1;
    });

    return {
      fecha,
      pisadasPorHora,
      totalPisadas: pisadas.length,
    };
  }
}
