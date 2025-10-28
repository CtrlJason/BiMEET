import { Injectable, Logger } from '@nestjs/common';
import { MongoConfigService } from '../../config/services/mongo.service';

export interface PisadaCreateInput {
  fecha: string;
  hora: string;
  timestamp?: Date;
}

export interface PisadaFilter {
  fecha?: string;
  fechaInicio?: string;
  fechaFin?: string;
}

export interface PaginationParams {
  skip: number;
  take: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

@Injectable()
export class PisadasRepository {
  private readonly logger = new Logger(PisadasRepository.name);

  constructor(private readonly mongoService: MongoConfigService) {}

  // Crear una nueva pisada
  async create(data: PisadaCreateInput) {
    return this.mongoService.pisada.create({
      data: {
        fecha: data.fecha,
        hora: data.hora,
        timestamp: data.timestamp || new Date(),
      },
    });
  }

  // Encontrar pisadas con paginación y filtros
  async findManyPaginated(
    filter: PisadaFilter,
    pagination: PaginationParams,
  ) {
    const where: any = {};

    // Filtro por rango de fechas
    if (filter.fechaInicio && filter.fechaFin) {
      where.fecha = {
        gte: filter.fechaInicio,
        lte: filter.fechaFin,
      };
    } else if (filter.fecha) {
      // Filtro por fecha exacta
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

  // Contar total de pisadas con filtro
  async count(filter: PisadaFilter = {}) {
    const where: any = {};

    // Filtro por rango de fechas
    if (filter.fechaInicio && filter.fechaFin) {
      where.fecha = {
        gte: filter.fechaInicio,
        lte: filter.fechaFin,
      };
    } else if (filter.fecha) {
      // Filtro por fecha exacta
      where.fecha = filter.fecha;
    }

    return this.mongoService.pisada.count({ where });
  }

  // Obtener pisadas por fecha
  async findByFecha(fecha: string) {
    return this.mongoService.pisada.findMany({
      where: { fecha },
      orderBy: { hora: 'asc' },
    });
  }

  // Obtener última pisada
  async findLatest() {
    return this.mongoService.pisada.findFirst({
      orderBy: { timestamp: 'desc' },
    });
  }

  // Obtener total de pisadas
  async getTotalCount() {
    return this.mongoService.pisada.count();
  }

  // Obtener pisadas del día
  async countByFecha(fecha: string) {
    return this.mongoService.pisada.count({
      where: { fecha },
    });
  }

  // Obtener total de pisadas por rango de fechas
  async countByDateRange(startDate: Date, endDate: Date) {
    return this.mongoService.pisada.count({
      where: {
        timestamp: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }

  // Obtener total de pisadas de la última semana
  async countLastWeek() {
    const now = new Date();
    const lastWeek = new Date(now);
    lastWeek.setDate(lastWeek.getDate() - 7);

    return this.countByDateRange(lastWeek, now);
  }

  // Obtener total de pisadas del último mes
  async countLastMonth() {
    const now = new Date();
    const lastMonth = new Date(now);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    return this.countByDateRange(lastMonth, now);
  }
}
