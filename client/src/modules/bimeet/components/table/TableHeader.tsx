// Componente de encabezado de tabla con soporte para ordenamiento
import { flexRender } from "@tanstack/react-table";
import { ArrowUp, ArrowDown } from "lucide-react";
import type { TableHeaderProps } from "../../../../shared/types/components/table.ds";

export const TableHeader = <T,>({
    headerGroups,
    sortBy,
    sortOrder,
    onSort
}: TableHeaderProps<T>) => {
    return (
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-gray-200">
                    {headerGroup.headers.map((header) => (
                        <th
                            key={header.id}
                            className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                                onSort ? 'cursor-pointer hover:bg-gray-50 transition-colors' : ''
                            }`}
                            onClick={() => onSort && onSort(header.id)}
                        >
                            <div className="flex items-center gap-2">
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                                {sortBy === header.id && sortOrder && (
                                    sortOrder === "asc"
                                        ? <ArrowUp className="w-4 h-4" />
                                        : <ArrowDown className="w-4 h-4" />
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
};
