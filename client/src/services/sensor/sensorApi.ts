import api from '../api';
import type {
  Pisada,
  PaginatedResponse,
  Stats,
  GraficaPorHora,
} from '../../shared/types/api/api.ds';

export type HistorialParams = {
  page?: number;
  limit?: number;
  fecha?: string;
  fechaInicio?: string;
  fechaFin?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export const sensorApi = {
  getHistorial(params: HistorialParams = {}): Promise<PaginatedResponse<Pisada>> {
    return api.get<PaginatedResponse<Pisada>>('/api/sensor/historial', params);
  },

  getStats(): Promise<Stats> {
    return api.get<Stats>('/api/sensor/stats');
  },

  getGraficaPorHora(fecha?: string): Promise<GraficaPorHora> {
    return api.get<GraficaPorHora>('/api/sensor/grafica-por-hora', fecha ? { fecha } : {});
  },
};
