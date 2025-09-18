import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EfficiencyChart = () => {
    const data = {
        labels: ["Energía Utilizada", "Energía Perdida", "Energía Almacenada"], // <-- Puede modificar los textos entre comillas que son los titulos de las secciones
        datasets: [
            {
                data: [65, 20, 15],
                backgroundColor: [
                    "rgba(34, 197, 94, 0.8)",
                    "rgba(239, 68, 68, 0.8)",
                    "rgba(59, 130, 246, 0.8)",
                ],
                borderColor: [
                    "rgb(34, 197, 94)",
                    "rgb(239, 68, 68)",
                    "rgb(59, 130, 246)",
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
            },
            title: {
                display: true,
                text: "Distribución de Energía del Sistema", // <-- Puede modificar los textos entre comillas
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default EfficiencyChart;
