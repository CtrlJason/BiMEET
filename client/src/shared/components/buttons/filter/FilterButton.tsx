// Botón de filtro reutilizable
import { Filter, X } from 'lucide-react';
import type { FilterButtonProps } from "../../types/components/buttons.ds";

export const FilterButton = ({ hasFilter, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        hasFilter
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {hasFilter ? (
        <>
          <X className="w-4 h-4" />
          <span>Limpiar filtro</span>
        </>
      ) : (
        <>
          <Filter className="w-4 h-4" />
          <span>Filtrar por fecha</span>
        </>
      )}
    </button>
  );
};
