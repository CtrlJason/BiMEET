// Indicador compacto de conexión en tiempo real
import { useSocketContext } from "../../../../shared/context/SocketContext";
import { Wifi, WifiOff } from "lucide-react";

const ConnectionStatus = () => {
    const { isConnected } = useSocketContext();

    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200">
            {isConnected ? (
                <>
                    <Wifi className="w-4 h-4 text-green-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">
                        Conectado
                    </span>
                </>
            ) : (
                <>
                    <WifiOff className="w-4 h-4 text-red-500" />
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-sm font-medium text-gray-700">
                        Desconectado
                    </span>
                </>
            )}
        </div>
    );
};

export default ConnectionStatus;
