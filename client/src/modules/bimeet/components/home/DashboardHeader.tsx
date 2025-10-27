// Header del dashboard
import { Footprints } from "lucide-react";
import ConnectionStatus from "./ConnectionStatus";

const DashboardHeader = () => {
    return (
        <div className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm">
            <div className="flex items-center justify-between">
                {/* Título con icono */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md">
                        <Footprints className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            Monitoreo en Tiempo Real
                        </h1>
                        <p className="text-sm text-gray-500">
                            Sistema de baldosas inteligentes BiMEET
                        </p>
                    </div>
                </div>

                {/* Estado de conexión */}
                <ConnectionStatus />
            </div>
        </div>
    );
};

export default DashboardHeader;
