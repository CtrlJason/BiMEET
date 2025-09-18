import { Zap, Footprints, Battery, Activity } from "lucide-react";

const Counters = () => {
    const metrics = [
        {
            title: "Energía Generada", // <-- Puede modificar los textos entre comillas
            value: "2.4",
            unit: "Wh",
            icon: <Zap className="w-8 h-8" />, // <-- *** NO TOCAR! ***
            color: "text-yellow-500",
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200",
        },
        {
            title: "Pisadas Totales",
            value: "1,247",
            unit: "pasos",
            icon: <Footprints className="w-8 h-8" />,
            color: "text-green-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
        },
        {
            title: "Nivel de Batería",
            value: "78",
            unit: "%",
            icon: <Battery className="w-8 h-8" />,
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            title: "Eficiencia",
            value: "85",
            unit: "%",
            icon: <Activity className="w-8 h-8" />,
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
                <div
                    key={index}
                    className={`${metric.bgColor} ${metric.borderColor} border rounded-lg p-6 shadow-sm`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div
                            className={`${metric.color} p-2 rounded-lg bg-white`}
                        >
                            {metric.icon}
                        </div>
                        <div className="text-right">
                            <div
                                className={`text-3xl font-bold ${metric.color}`}
                            >
                                {metric.value}
                            </div>
                            <div className="text-sm text-gray-500">
                                {metric.unit}
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        {metric.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Counters;
