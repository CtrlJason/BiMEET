// Componente del cuerpo de tabla
import { flexRender } from "@tanstack/react-table";
import type { TableBodyProps } from "../../../../shared/types/components/table.ds";

export const TableBody = <T,>({
    rows,
    columnsLength,
    isLoading = false,
    emptyMessage = "No hay datos disponibles",
}: TableBodyProps<T>) => {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
                <tr>
                    <td
                        colSpan={columnsLength}
                        className="px-6 py-12 text-center"
                    >
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        </div>
                    </td>
                </tr>
            ) : rows.length === 0 ? (
                <tr>
                    <td
                        colSpan={columnsLength}
                        className="px-6 py-12 text-center text-gray-500"
                    >
                        {emptyMessage}
                    </td>
                </tr>
            ) : (
                rows.map((row) => (
                    <tr
                        key={row.id}
                        className="hover:bg-gray-50 transition-colors"
                    >
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                            >
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))
            )}
        </tbody>
    );
};
