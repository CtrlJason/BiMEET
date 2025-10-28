import { SensorService } from '../services/sensor.service';
import { SensorDataDto } from '../dto/sensor-data.dto';
export declare class SensorController {
    private readonly sensorService;
    private readonly logger;
    constructor(sensorService: SensorService);
    receiveSensorData(sensorData: SensorDataDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            fecha: string;
            hora: string;
            timestamp: Date;
        };
    }>;
    receivePisadas(sensorData: SensorDataDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            fecha: string;
            hora: string;
            timestamp: Date;
        };
    }>;
    getHistorial(page?: string, limit?: string, fecha?: string, fechaInicio?: string, fechaFin?: string, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<{
        data: {
            id: string;
            fecha: string;
            hora: string;
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
    getStats(): Promise<{
        totalPisadas: number;
        pisadasHoy: number;
        pisadasSemana: number;
        pisadasMes: number;
        ultimaPisada: {
            id: string;
            fecha: string;
            hora: string;
            timestamp: Date;
        } | null;
    }>;
    getGraficaPorHora(fecha?: string): Promise<{
        fecha: string;
        pisadasPorHora: {
            [key: string]: number;
        };
        totalPisadas: number;
    }>;
}
