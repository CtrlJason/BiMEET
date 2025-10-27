// Tipos para respuestas de la API

export type Pisada = {
  id: string;
  fecha: string;
  hora: string;
  timestamp: Date;
};

export type PaginationInfo = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: PaginationInfo;
};

export type Stats = {
  totalPisadas: number;
  pisadasHoy: number;
  pisadasSemana: number;
  pisadasMes: number;
  ultimaPisada: Pisada | null;
};

export type GraficaPorHora = {
  fecha: string;
  pisadasPorHora: Record<string, number>;
  totalPisadas: number;
};
