export type Pisada = {
    id: string;
    fecha: string;
    hora: string;
    timestamp: Date;
};

export type PaginationData = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};