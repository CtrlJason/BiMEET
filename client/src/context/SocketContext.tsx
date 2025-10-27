import { createContext, useContext } from "react";
import type { SocketContextType } from "../shared/types/socket/socket.ds";
import { useSocket } from "../shared/hooks/socket";

export const SocketContext = createContext<SocketContextType | null>(null);

// Provider
export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socketData = useSocket();

    return (
        <SocketContext.Provider value={socketData}>
            {children}
        </SocketContext.Provider>
    );
};

// Hook para acceder al contexto
export const useSocketContext = () => {
    const context = useContext(SocketContext);

    if (!context) {
        throw new Error(
            "useSocketContext debe ser usado dentro de un SocketProvider"
        );
    }

    return context;
};
