import { Zap, Monitor, MapPin, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-primary text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6">
                    {/* <-- Modificar aquí el título */}
                    Baldosa Inteligente para Micro-Generación Energética
                </h1>
                <p className="text-xl mb-8 max-w-4xl mx-auto">
                    {/* <-- Modificar aquí la descripción */}
                    Transforma cada pisada en energía limpia. Nuestro prototipo
                    de baldosa piezoeléctrica convierte el tráfico peatonal en
                    electricidad utilizable para espacios públicos.
                </p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
                >
                    <BarChart3 className="w-6 h-6" />
                    Ir al Dashboard
                </button>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <Zap className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Energía Renovable
                        </h3>
                        <p className="text-lg">
                            Cada paso genera electricidad limpia a través de
                            elementos piezoeléctricos
                        </p>
                    </div>
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <Monitor className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Monitoreo Inteligente
                        </h3>
                        <p className="text-lg">
                            Sistema de telemetría que registra pisadas y energía
                            generada en tiempo real
                        </p>
                    </div>
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <MapPin className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Espacios Públicos
                        </h3>
                        <p className="text-lg">
                            Diseñado para parques y áreas de alto tráfico
                            peatonal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
