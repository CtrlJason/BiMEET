// Hook para manejo del estado de la tabla
import { useState, useCallback } from "react";
import type { DateRange } from "../../components/table/DateRangeFilter";

export type SortOrder = "asc" | "desc";

// Función helper para obtener fecha local en formato YYYY-MM-DD
const getLocalDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const getDateFromRange = (range: DateRange): string | undefined => {
    const now = new Date();
    const today = getLocalDateString(now);

    switch (range) {
        case "all":
            return undefined; // Sin filtro
        case "today":
            return today;
        case "yesterday": {
            const yesterday = new Date(now);
            yesterday.setDate(yesterday.getDate() - 1);
            return getLocalDateString(yesterday);
        }
        case "week": {
            // Últimos 7 días - devolvemos fecha de inicio
            const weekAgo = new Date(now);
            weekAgo.setDate(weekAgo.getDate() - 7);
            return getLocalDateString(weekAgo);
        }
        case "month": {
            // Primer día del mes actual
            const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
            return getLocalDateString(firstDay);
        }
        case "lastMonth": {
            // Primer día del mes pasado
            const firstDay = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            return getLocalDateString(firstDay);
        }
        default:
            return today;
    }
};

export const useTableState = () => {
    const today = getLocalDateString(new Date());

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [dateRange, setDateRange] = useState<DateRange>("today");
    const [fechaFiltro, setFechaFiltro] = useState(today);
    const [customStartDate, setCustomStartDate] = useState(today);
    const [customEndDate, setCustomEndDate] = useState(today);
    const [sortBy, setSortBy] = useState("timestamp");
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

    const handleSort = useCallback((columnId: string) => {
        setSortBy((prev) => {
            if (prev === columnId) {
                setSortOrder((order) => order === "asc" ? "desc" : "asc");
                return prev;
            } else {
                setSortOrder("desc");
                return columnId;
            }
        });
    }, []);

    const handleDateRangeChange = useCallback((range: DateRange) => {
        setDateRange(range);

        if (range !== "custom") {
            const fecha = getDateFromRange(range);
            setFechaFiltro(fecha);

            // Actualizar los inputs de fecha personalizada
            if (fecha) {
                setCustomStartDate(fecha);
                // Para "ayer" y "today", la fecha fin es la misma que la de inicio (un solo día)
                // Para rangos (week, month, lastMonth), la fecha fin es hoy
                if (range === "yesterday" || range === "today") {
                    setCustomEndDate(fecha);
                } else {
                    setCustomEndDate(today);
                }
            }
        }
        setPage(1);
    }, [today]);

    const handleCustomDateChange = useCallback((start: string, end: string) => {
        setCustomStartDate(start);
        setCustomEndDate(end);
        // Por ahora usamos la fecha de inicio como filtro
        // TODO: Actualizar backend para soportar rango de fechas
        if (start) {
            setFechaFiltro(start);
        }
        setPage(1);
    }, []);

    const handlePageChange = useCallback((newPage: number) => {
        setPage(newPage);
    }, []);

    const handleLimitChange = useCallback((newLimit: number) => {
        setLimit(newLimit);
        setPage(1);
    }, []);

    return {
        // Estado
        page,
        limit,
        fechaFiltro,
        dateRange,
        customStartDate,
        customEndDate,
        sortBy,
        sortOrder,
        // Manejadores
        handleSort,
        handleDateRangeChange,
        handleCustomDateChange,
        handlePageChange,
        handleLimitChange,
        // Helper para saber si estamos usando rango
        isRangeFilter: customStartDate !== customEndDate,
    };
};
