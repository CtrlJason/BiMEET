// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

// React Query
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Routes
import AppRoutes from "./routes/AppRoutes";

// Context Providers
import { SocketProvider } from "./shared/context/SocketContext";
import { NotificationProvider } from "./shared/context/NotificationContext";
import { ToastProvider } from "./shared/components/providers/ToastProvider";

// Utilities
import { queryClient } from "./shared/utils/queryClient";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <NotificationProvider>
                <SocketProvider>
                    <AppRoutes />
                    <ToastProvider />
                </SocketProvider>
            </NotificationProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
);
