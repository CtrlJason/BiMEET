import Counters from "../../../components/bimeet/home/graphics/Counters";
import EnergyChart from "../../../components/bimeet/home/graphics/EnergyChart";
import FootstepsChart from "../../../components/bimeet/home/graphics/FootstepsChart";
import EfficiencyChart from "../../../components/bimeet/home/graphics/EfficiencyChart";

const Dashboard = () => {
    return (
        <div className="bg-[var(--color-neutral-light)] min-h-screen p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-8">
                    {/* <-- Modificar aquí el título */}
                    Dashboard - Monitoreo de Baldosa Inteligente
                </h1>

                <Counters />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <EnergyChart />
                    <FootstepsChart />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <EfficiencyChart />
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                        <h3 className="text-xl font-semibold text-[var(--color-primary-dark)] mb-4">
                            {/* <-- Modificar aquí el título */}
                            Estado del Sistema
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">
                                    {/* <-- Modificar aquí la descripción */}
                                    Estado de la Baldosa
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Activa
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">
                                    {/* <-- Modificar aquí la descripción */}
                                    Última Actualización
                                </span>
                                <span className="text-sm text-gray-500">
                                    {/* <-- Modificar aquí la descripción */}
                                    Hace 2 minutos
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">
                                    {/* <-- Modificar aquí la descripción */}
                                    Temperatura
                                </span>
                                <span className="text-sm text-gray-500">
                                    {/* <-- Modificar aquí la descripción */}
                                    24°C
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">
                                    {/* <-- Modificar aquí el título */}
                                    Humedad
                                </span>
                                <span className="text-sm text-gray-500">
                                    {/* <-- Modificar aquí la descripción */}
                                    45%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
