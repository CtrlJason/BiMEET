import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const FootstepsChart = () => {
    const data = {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        datasets: [
            {
                label: "Pisadas por día",
                data: [45, 78, 92, 67, 89, 156, 134],
                backgroundColor: "rgba(59, 130, 246, 0.8)",
                borderColor: "rgb(59, 130, 246)",
                borderWidth: 1,
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
                text: "Actividad Semanal - Pisadas por Día", // <-- Puede modificar los textos entre comillas
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Número de pisadas", // <-- Puede modificar los textos entre comillas
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Día de la semana", // <-- Puede modificar los textos entre comillas
                },
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <Bar data={data} options={options} />
        </div>
    );
};

export default FootstepsChart;
