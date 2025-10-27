// Gráfica de pisadas en tiempo real con Chart.js
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Activity } from "lucide-react";
import { useSocket } from "../../../../../shared/hooks/socket/useSocket";

// Registrar componentes de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const RealtimePisadasChart = () => {
    const { allPisadas } = useSocket();
    const chartRef = useRef<ChartJS<"line">>(null);
    const [intensityData, setIntensityData] = useState<number[]>(Array(60).fill(0));
    const [labels, setLabels] = useState<string[]>(Array(60).fill(""));
    const lastPulseRef = useRef<number>(0);
    const [showPulseAnimation, setShowPulseAnimation] = useState(false);

    // Efecto de pico: cada pisada genera una onda muy delgada tipo pirámide
    useEffect(() => {
        if (allPisadas.length > 0) {
            // Marcar que hubo un pulso reciente - solo 1 pico
            lastPulseRef.current = 1; // Solo 1 intervalo (50ms) - muy delgado

            // Activar animación visual
            setShowPulseAnimation(true);
            setTimeout(() => setShowPulseAnimation(false), 500);
        }
    }, [allPisadas.length]);

    // Efecto continuo: la gráfica se mueve constantemente hacia la izquierda
    useEffect(() => {
        const updateInterval = setInterval(() => {
            const now = new Date();
            const timeLabel = now.toLocaleTimeString("es-CO", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });

            // Determinar el valor: 100 si hay pulso, 0 si no
            let newValue = 0;
            if (lastPulseRef.current > 0) {
                newValue = 100;
                lastPulseRef.current--;
            }

            // Mover la gráfica hacia la izquierda y agregar nuevo punto
            setLabels(prev => [...prev.slice(1), timeLabel]);
            setIntensityData(prev => [...prev.slice(1), newValue]);
        }, 50); // Actualizar cada 50ms para movimiento más suave y fluido

        return () => clearInterval(updateInterval);
    }, []);

    const getChartData = () => {
        // Crear gradiente para el fondo
        const ctx = chartRef.current?.ctx;
        let gradient;
        if (ctx) {
            gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "rgba(34, 197, 94, 0.4)");
            gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.2)");
            gradient.addColorStop(1, "rgba(34, 197, 94, 0.05)");
        }

        return {
            labels,
            datasets: [
                {
                    label: "Intensidad",
                    data: intensityData,
                    borderColor: "rgb(34, 197, 94)",
                    backgroundColor: gradient || "rgba(34, 197, 94, 0.2)",
                    fill: true,
                    tension: 0,
                    borderWidth: 2,
                    pointRadius: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 10,
                    shadowColor: "rgba(34, 197, 94, 0.5)",
                },
            ],
        };
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                backgroundColor: "rgba(34, 197, 94, 0.95)",
                padding: 12,
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "rgb(34, 197, 94)",
                borderWidth: 2,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    title: (context: any) => {
                        return `Hora: ${context[0].label}`;
                    },
                    label: (context: any) => {
                        return context.parsed.y > 0 ? "Pisada detectada ✓" : "Sin actividad";
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: "rgba(34, 197, 94, 0.08)",
                    lineWidth: 1,
                },
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        size: 10,
                        family: "'Inter', sans-serif",
                    },
                    color: "rgba(0, 0, 0, 0.5)",
                    maxTicksLimit: 8,
                },
                border: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 100,
                grid: {
                    color: "rgba(34, 197, 94, 0.1)",
                    lineWidth: 1,
                },
                ticks: {
                    stepSize: 25,
                    font: {
                        size: 11,
                        family: "'Inter', sans-serif",
                    },
                    color: "rgba(0, 0, 0, 0.6)",
                    callback: (value: any) => `${value}%`,
                },
                border: {
                    display: false,
                },
            },
        },
        animation: false,
        transitions: {
            active: {
                animation: {
                    duration: 0
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index' as const,
        },
        elements: {
            line: {
                borderCapStyle: 'round' as const,
                borderJoinStyle: 'round' as const,
            },
            point: {
                hitRadius: 0,
                hoverRadius: 0,
            }
        },
    };

    // Actualizar la gráfica de forma más eficiente
    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.update('none'); // Actualización sin animación para mayor fluidez
        }
    }, [intensityData]);

    return (
        <div className={`bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg border border-green-200 p-6 transition-all duration-300 hover:shadow-xl ${showPulseAnimation ? 'ring-2 ring-green-400 ring-opacity-50' : ''}`}>
            {/* Encabezado */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className={`w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md transition-all duration-200 ${showPulseAnimation ? 'scale-110 shadow-lg shadow-green-400/50' : ''}`}>
                            <Activity className={`w-6 h-6 text-white transition-all duration-200 ${showPulseAnimation ? 'scale-125' : ''}`} />
                        </div>
                        {/* Indicador de pulso */}
                        {showPulseAnimation && (
                            <div className="absolute -top-1 -right-1">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            Pisadas en Tiempo Real
                        </h3>
                        <p className="text-sm text-gray-600">
                            Monitor de actividad en vivo
                        </p>
                    </div>
                </div>
            </div>

            {/* Gráfica */}
            <div className="h-[320px] bg-white rounded-lg p-4 shadow-inner border border-gray-100">
                <Line ref={chartRef} data={getChartData()} options={options} />
            </div>

            {/* Footer con estadística */}
            <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Actualizando en tiempo real</span>
                </div>
                <div className="text-gray-500">
                    {allPisadas.length > 0 ? `${allPisadas.length} pisadas registradas` : 'Esperando datos...'}
                </div>
            </div>
        </div>
    );
};

export default RealtimePisadasChart;
