import { SensorDataDto } from '../dto/sensor-data.dto';
import { PisadasRepository } from '../repositories/pisadas.repository';
import { EventsGateway } from '../../events/gateways/events.gateway';
export declare class SensorService {
    private readonly pisadasRepository;
    private readonly eventsGateway;
    private readonly logger;
    constructor(pisadasRepository: PisadasRepository, eventsGateway: EventsGateway);
    processSensorData(sensorData: SensorDataDto): Promise<{
        fecha: string;
        hora: string;
        id: string;
        timestamp: Date;
    }>;
    getPisadasPaginadas(params: {
        page: number;
        limit: number;
        fecha?: string;
        fechaInicio?: string;
        fechaFin?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }): Promise<{
        data: {
            fecha: string;
            hora: string;
            id: string;
            timestamp: Date;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    }>;
    getEstadisticas(): Promise<{
        totalPisadas: number;
        pisadasHoy: number;
        pisadasSemana: number;
        pisadasMes: number;
        ultimaPisada: {
            fecha: string;
            hora: string;
            id: string;
            timestamp: Date;
        } | null;
    }>;
    getPisadasPorHora(fecha: string): Promise<{
        fecha: string;
        pisadasPorHora: {
            [key: string]: number;
        };
        totalPisadas: number;
    }>;
}
