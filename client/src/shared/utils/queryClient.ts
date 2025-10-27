// Configuración centralizada del cliente de React Query
import { QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Configuración del cliente de React Query
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 30000, // 30 segundos - datos considerados frescos
            gcTime: 5 * 60 * 1000, // 5 minutos - tiempo en caché
        },
        mutations: {
            onError: (error) => {
                const message = error instanceof Error
                    ? error.message
                    : "Error al procesar la solicitud";
                toast.error(message);
            },
        },
    },
});
