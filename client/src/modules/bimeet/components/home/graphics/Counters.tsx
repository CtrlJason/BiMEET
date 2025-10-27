import { useEffect, useState } from "react";
import { Zap, Footprints, TrendingUp } from "lucide-react";
import { useStatsQuery } from "../../../hooks/queries";
import { useSocket } from "../../../../../shared/hooks/socket/useSocket";

const Counters = () => {
    const [frecuenciaPorMinuto, setFrecuenciaPorMinuto] = useState(0);

    // Obtener estadísticas del backend
    const { data: stats } = useStatsQuery(5000); // Refetch cada 5 segundos

    // Socket para calcular frecuencia en tiempo real
    const { allPisadas } = useSocket();

    // Calcular frecuencia de pisadas por minuto (últimas pisadas en el último minuto)
    useEffect(() => {
        if (allPisadas.length > 0) {
            const now = new Date();
            const oneMinuteAgo = new Date(now.getTime() - 60000);

            const pisadasUltimoMinuto = allPisadas.filter(pisada => {
                const pisadaDate = new Date(pisada.timestamp);
                return pisadaDate >= oneMinuteAgo;
            }).length;

            setFrecuenciaPorMinuto(pisadasUltimoMinuto);
        } else {
            setFrecuenciaPorMinuto(0);
        }
    }, [allPisadas]);

    const totalPisadas = stats?.totalPisadas || 0;

    // Calcular energía estimada (ejemplo: 0.002 Wh por pisada)
    const energiaGenerada = (totalPisadas * 0.002).toFixed(2);

    return (
        <div className="mb-8">

            {/* Cards de métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frecuencia de Pisadas */}
                <div className="bg-blue-50 border-blue-200 border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-blue-500 p-2 rounded-lg bg-white">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-blue-500 transition-all duration-300">
                                {frecuenciaPorMinuto}
                            </div>
                            <div className="text-sm text-gray-500">por min</div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Frecuencia Actual
                    </h3>
                    <p className="text-xs text-gray-500 mt-2">
                        Pisadas en el último minuto
                    </p>
                </div>

                {/* Pisadas Totales - Contador en tiempo real */}
                <div className="bg-green-50 border-green-200 border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-green-500 p-2 rounded-lg bg-white">
                            <Footprints className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-green-500 transition-all duration-300">
                                {totalPisadas.toLocaleString('es-CO')}
                            </div>
                            <div className="text-sm text-gray-500">pasos</div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Pisadas Totales
                    </h3>
                </div>

                {/* Energía Generada */}
                <div className="bg-yellow-50 border-yellow-200 border rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-yellow-500 p-2 rounded-lg bg-white">
                            <Zap className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-yellow-500">
                                {energiaGenerada}
                            </div>
                            <div className="text-sm text-gray-500">Wh</div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Energía Generada
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Counters;
