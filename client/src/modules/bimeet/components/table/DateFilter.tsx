// Componente de filtro por fecha
import { Calendar } from "lucide-react";
import { FilterButton } from "../../../../shared/components/buttons/filter";
import type { DateFilterProps } from "../../../../shared/types/components/pagination.ds";

export const DateFilter = ({
    value,
    onChange,
    onClear,
    label = "Filtrar por fecha"
}: DateFilterProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <input
                    type="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    aria-label={label}
                />
            </div>
            <FilterButton hasFilter={!!value} onClick={onClear} />
        </div>
    );
};
