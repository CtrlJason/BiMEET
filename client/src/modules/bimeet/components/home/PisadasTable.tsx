// React y TanStack Table
import { useReactTable, getCoreRowModel, type ColumnDef } from "@tanstack/react-table";

// Hooks personalizados del módulo
import { usePisadasQuery } from "../../hooks/queries";
import { useTableState } from "../../hooks/table";

// Componentes del módulo
import { TableHeader } from "../table/TableHeader";
import { TableBody } from "../table/TableBody";
import { TablePagination } from "../table/TablePagination";
import { DateRangeFilter } from "../table/DateRangeFilter";

// Tipos
import type { Pisada } from "../../../../shared/types/api/api.ds";

// Definición de columnas
const columns: ColumnDef<Pisada>[] = [
    {
        accessorKey: "fecha",
        header: "Fecha",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "hora",
        header: "Hora",
        cell: (info) => info.getValue(),
    },
    {
        accessorKey: "timestamp",
        header: "Timestamp",
        cell: (info) => new Date(info.getValue() as Date).toLocaleString("es-CO"),
    },
];

const PisadasTable = () => {
    // Estado de la tabla usando hook personalizado
    const {
        page,
        limit,
        fechaFiltro,
        dateRange,
        customStartDate,
        customEndDate,
        sortBy,
        sortOrder,
        handleSort,
        handleDateRangeChange,
        handleCustomDateChange,
        handlePageChange,
        handleLimitChange,
    } = useTableState();

    // Obtener datos del servidor con paginación server-side
    const { data, isLoading, error } = usePisadasQuery({
        page,
        limit,
        fecha: customStartDate === customEndDate ? fechaFiltro : undefined,
        fechaInicio: customStartDate !== customEndDate ? customStartDate : undefined,
        fechaFin: customStartDate !== customEndDate ? customEndDate : undefined,
        sortBy,
        sortOrder,
    });

    // Configurar tabla con TanStack Table
    const table = useReactTable({
        data: data?.data || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true, // Paginación en el servidor
        manualSorting: true, // Ordenamiento en el servidor
        pageCount: data?.pagination.totalPages || 0,
    });

    // Manejo de errores
    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600">Error al cargar los datos</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Encabezado */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Historial de Pisadas
            </h2>

            {/* Filtros de rango de fechas */}
            <div className="mb-6">
                <DateRangeFilter
                    selectedRange={dateRange}
                    onChange={handleDateRangeChange}
                    customStartDate={customStartDate}
                    customEndDate={customEndDate}
                    onCustomDateChange={handleCustomDateChange}
                />
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeader
                        headerGroups={table.getHeaderGroups()}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        onSort={handleSort}
                    />
                    <TableBody
                        rows={table.getRowModel().rows}
                        columnsLength={columns.length}
                        isLoading={isLoading}
                        emptyMessage="No hay pisadas registradas"
                    />
                </table>
            </div>

            {/* Paginación */}
            {data && (
                <TablePagination
                    pagination={data.pagination}
                    limit={limit}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                />
            )}
        </div>
    );
};

export default PisadasTable;
