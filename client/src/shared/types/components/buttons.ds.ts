// Tipos para componentes de botones
import type { LucideIcon } from "lucide-react";

export type PaginationButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    icon: LucideIcon;
    label: string;
};

export type FilterButtonProps = {
    hasFilter: boolean;
    onClick: () => void;
};
