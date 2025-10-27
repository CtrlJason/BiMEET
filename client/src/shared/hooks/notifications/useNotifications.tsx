// Hook para manejo de notificaciones con react-hot-toast
import toast from "react-hot-toast";
import { useCallback } from "react";

export const useNotifications = () => {
    const success = useCallback((message: string) => {
        toast.success(message);
    }, []);

    const error = useCallback((message: string) => {
        toast.error(message);
    }, []);

    const info = useCallback((message: string) => {
        toast(message, {
            icon: "ℹ️",
        });
    }, []);

    const loading = useCallback((message: string) => {
        return toast.loading(message);
    }, []);

    const dismiss = useCallback((toastId?: string) => {
        if (toastId) {
            toast.dismiss(toastId);
        } else {
            toast.dismiss();
        }
    }, []);

    return {
        success,
        error,
        info,
        loading,
        dismiss,
    };
};
