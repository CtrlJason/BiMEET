// Componente de paginación para tablas
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { PaginationButton } from "../../../../shared/components/buttons/pagination";
import type { TablePaginationProps } from "../../../../shared/types/components/pagination.ds";

export const TablePagination = ({
    pagination,
    limit,
    onPageChange,
    onLimitChange,
    limitOptions = [5, 10, 20, 50]
}: TablePaginationProps) => {
    return (
        <div className="mt-6 flex items-center justify-between">
            {/* Selector de filas por página */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Filas por página:</span>
                <select
                    value={limit}
                    onChange={(e) => onLimitChange(Number(e.target.value))}
                    className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    {limitOptions.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            {/* Información de paginación */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">
                    Página {pagination.page} de {pagination.totalPages} ({pagination.total} total)
                </span>
            </div>

            {/* Botones de navegación */}
            <div className="flex items-center gap-2">
                <PaginationButton
                    onClick={() => onPageChange(1)}
                    disabled={!pagination.hasPrevPage}
                    icon={ChevronsLeft}
                    label="Primera página"
                />
                <PaginationButton
                    onClick={() => onPageChange(pagination.page - 1)}
                    disabled={!pagination.hasPrevPage}
                    icon={ChevronLeft}
                    label="Página anterior"
                />
                <PaginationButton
                    onClick={() => onPageChange(pagination.page + 1)}
                    disabled={!pagination.hasNextPage}
                    icon={ChevronRight}
                    label="Página siguiente"
                />
                <PaginationButton
                    onClick={() => onPageChange(pagination.totalPages)}
                    disabled={!pagination.hasNextPage}
                    icon={ChevronsRight}
                    label="Última página"
                />
            </div>
        </div>
    );
};
