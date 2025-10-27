// Provider para notificaciones toast
import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
    return (
        <Toaster
            position="bottom-center"
            toastOptions={{
                duration: 4000,
                style: {
                    background: "#fff",
                    color: "#1f2937",
                    border: "1px solid #e5e7eb",
                    padding: "16px",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                },
                success: {
                    duration: 3000,
                    style: {
                        background: "#f0fdf4",
                        border: "1px solid #86efac",
                    },
                },
                error: {
                    duration: 5000,
                    style: {
                        background: "#fef2f2",
                        border: "1px solid #fca5a5",
                    },
                },
            }}
        />
    );
};
