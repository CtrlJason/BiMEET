// Filtro por rangos de fecha predefinidos y personalizado
import { Calendar } from "lucide-react";

type DateRange = "all" | "today" | "yesterday" | "week" | "month" | "lastMonth" | "custom";

type DateRangeFilterProps = {
    selectedRange: DateRange;
    onChange: (range: DateRange) => void;
    customStartDate: string;
    customEndDate: string;
    onCustomDateChange: (start: string, end: string) => void;
};

const ranges: { key: DateRange; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "today", label: "Hoy" },
    { key: "yesterday", label: "Ayer" },
    { key: "week", label: "Última Semana" },
    { key: "month", label: "Este Mes" },
    { key: "lastMonth", label: "Mes Pasado" },
];

export const DateRangeFilter = ({
    selectedRange,
    onChange,
    customStartDate,
    customEndDate,
    onCustomDateChange,
}: DateRangeFilterProps) => {
    return (
        <div className="space-y-4">
            {/* Filtro personalizado - Fecha inicio y fin */}
            <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div className="flex items-center gap-3 flex-1">
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Fecha Inicio:
                            </label>
                            <input
                                type="date"
                                value={customStartDate}
                                onChange={(e) => {
                                    onChange("custom");
                                    onCustomDateChange(e.target.value, customEndDate);
                                }}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Fecha Fin:
                            </label>
                            <input
                                type="date"
                                value={customEndDate}
                                onChange={(e) => {
                                    onChange("custom");
                                    onCustomDateChange(customStartDate, e.target.value);
                                }}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Botones de rangos predefinidos */}
            <div className="grid grid-cols-6 gap-2">
                {ranges.map((range) => (
                    <button
                        key={range.key}
                        onClick={() => onChange(range.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedRange === range.key
                                ? "bg-green-500 text-white shadow-md"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300"
                        }`}
                    >
                        {range.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export type { DateRange };
