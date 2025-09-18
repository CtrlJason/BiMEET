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
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const EnergyChart = () => {
    const data = {
        labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
        datasets: [
            {
                label: "Energía Generada (mWh)",
                data: [0, 0, 15, 45, 38, 22, 8],
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Generación de Energía por Hora", // <-- Puede modificar los textos entre comillas
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Energía (mWh)", // <-- Puede modificar los textos entre comillas
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Hora del día", // <-- Puede modificar los textos entre comillas
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <Line data={data} options={options} />
        </div>
    );
};

export default EnergyChart;
