// Context para manejo de notificaciones (limpio, sin lógica)
import { createContext, useContext } from "react";
import { useNotifications } from "../hooks/notifications";

type NotificationContextType = ReturnType<typeof useNotifications>;

export const NotificationContext =
    createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const notifications = useNotifications();

    return (
        <NotificationContext.Provider value={notifications}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error(
            "useNotificationContext debe usarse dentro de NotificationProvider"
        );
    }
    return context;
};
