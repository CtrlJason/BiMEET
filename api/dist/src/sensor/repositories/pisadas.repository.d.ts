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
export declare class PisadasRepository {
    private readonly mongoService;
    private readonly logger;
    constructor(mongoService: MongoConfigService);
    create(data: PisadaCreateInput): Promise<{
        id: string;
        fecha: string;
        hora: string;
        timestamp: Date;
    }>;
    findManyPaginated(filter: PisadaFilter, pagination: PaginationParams): Promise<{
        id: string;
        fecha: string;
        hora: string;
        timestamp: Date;
    }[]>;
    count(filter?: PisadaFilter): Promise<number>;
    findByFecha(fecha: string): Promise<{
        id: string;
        fecha: string;
        hora: string;
        timestamp: Date;
    }[]>;
    findLatest(): Promise<{
        id: string;
        fecha: string;
        hora: string;
        timestamp: Date;
    } | null>;
    getTotalCount(): Promise<number>;
    countByFecha(fecha: string): Promise<number>;
    countByDateRange(startDate: Date, endDate: Date): Promise<number>;
    countLastWeek(): Promise<number>;
    countLastMonth(): Promise<number>;
}
