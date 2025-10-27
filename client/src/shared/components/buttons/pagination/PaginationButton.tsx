// Botón de paginación reutilizable
import type { PaginationButtonProps } from "../../types/components/buttons.ds";

export const PaginationButton = ({
  onClick,
  disabled = false,
  icon: Icon,
  label,
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-lg transition-colors ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
      }`}
      aria-label={label}
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
};
