// Componentes del módulo BiMeet
import DashboardHeader from "../../../modules/bimeet/components/home/DashboardHeader";
import Counters from "../../../modules/bimeet/components/home/graphics/Counters";
import RealtimePisadasChart from "../../../modules/bimeet/components/home/graphics/RealtimePisadasChart";
import PisadasTable from "../../../modules/bimeet/components/home/PisadasTable";
// import PisadasChart from "../../../modules/bimeet/components/home/graphics/PisadasChart"; // TODO: Crear
// import VoltajeChart from "../../../modules/bimeet/components/home/graphics/VoltajeChart"; // TODO: Crear

const Dashboard = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header profesional */}
            <DashboardHeader />

            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto p-8">
                {/* Contadores - Métricas principales */}
                <Counters />

                {/* Gráficas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* TODO: Gráfica de pisadas por hora */}
                    {/* <PisadasChart /> */}

                    {/* TODO: Gráfica de voltaje (hardcoded) */}
                    {/* <VoltajeChart /> */}
                </div>

                {/* Gráfica de pisadas en tiempo real */}
                <div className="mb-6">
                    <RealtimePisadasChart />
                </div>

                {/* Historial de pisadas con tabla paginada */}
                <PisadasTable />
            </div>
        </div>
    );
};

export default Dashboard;
