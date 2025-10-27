// Tipos para componentes de tabla
import type { Row, HeaderGroup } from "@tanstack/react-table";

export type TableBodyProps<T> = {
    rows: Row<T>[];
    columnsLength: number;
    isLoading?: boolean;
    emptyMessage?: string;
};

export type TableHeaderProps<T> = {
    headerGroups: HeaderGroup<T>[];
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    onSort?: (columnId: string) => void;
};
