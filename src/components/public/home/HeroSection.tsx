const HeroSection = () => {
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
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-3">
                            {/* <-- Modificar aquí el título */}
                            Energía Renovable
                        </h3>
                        <p className="text-lg">
                            {/* <-- Modificar aquí la descripción */}
                            Cada paso genera electricidad limpia a través de
                            elementos piezoeléctricos
                        </p>
                    </div>
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-3">
                            {/* <-- Modificar aquí el título */}
                            Monitoreo Inteligente
                        </h3>
                        <p className="text-lg">
                            {/* <-- Modificar aquí la descripción */}
                            Sistema de telemetría que registra pisadas y energía
                            generada en tiempo real
                        </p>
                    </div>
                    <div className="bg-white/10 shadow-md hover:shadow-lg transition-all cursor-default rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-3">
                            Espacios Públicos{" "}
                            {/* <-- Modificar aquí el título */}
                        </h3>
                        {/* <-- Modificar aquí la descripción */}
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
