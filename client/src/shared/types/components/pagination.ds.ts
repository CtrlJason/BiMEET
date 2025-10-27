// Tipos para componentes de paginación
import type { PaginationInfo } from "../api/api.ds";

export type TablePaginationProps = {
    pagination: PaginationInfo;
    limit: number;
    onPageChange: (page: number) => void;
    onLimitChange: (limit: number) => void;
    limitOptions?: number[];
};

export type DateFilterProps = {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    label?: string;
};
