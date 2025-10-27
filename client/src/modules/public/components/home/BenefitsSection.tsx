import { Ruler, Zap, Building, Settings } from "lucide-react";

const BenefitsSection = () => {
    const benefits = [
        {
            category: "Energía Utilizable", // <-- Modificar aquí el título
            items: [
                "Alimentación de LEDs de estado", // <-- Modificar aquí los items
                "Carga de sensores de monitoreo",
                "Puerto USB de emergencia",
                "Iluminación de bajo consumo",
            ],
            color: "from-[var(--color-accent)] to-[var(--color-accent-warm)]", // <-- Modificar aquí el color
        },
        {
            category: "Datos y Telemetría", // <-- Modificar aquí el título
            items: [
                "Conteo de pisadas en tiempo real", // <-- Modificar aquí los items
                "Medición de energía instantánea",
                "Registro de energía total acumulada",
                "Estado del sistema y diagnósticos",
            ],
            color: "from-[var(--color-info)] to-[var(--color-info-dark)]", // <-- Modificar aquí el color
        },
        {
            category: "Impacto Social", // <-- Modificar aquí el título
            items: [
                "Educación ambiental ciudadana", // <-- Modificar aquí los items
                "Conciencia sobre energías renovables",
                "Datos para ciudades inteligentes",
                "Sostenibilidad urbana",
            ],
            color: "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-[var(--color-neutral-light)] to-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary-dark)]">
                    Beneficios del Sistema {/* <-- Modificar aquí el título */}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${benefit.color} text-white rounded-lg p-6 shadow-lg`}
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-center">
                                {benefit.category}
                            </h3>
                            <ul className="space-y-3">
                                {benefit.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="flex items-start"
                                    >
                                        <span className="text-white/80 mr-3 mt-1">
                                            •
                                        </span>
                                        <span className="text-white/90">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-[var(--color-primary-dark)]">
                        Especificaciones Técnicas
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-[var(--color-info)] to-[var(--color-info-dark)] text-white rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Ruler className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-center">
                                Dimensiones
                            </h4>
                            <ul className="space-y-2 text-white/90">
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Baldosa estándar 30×30 cm</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Modular y fácil instalación</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Encapsulado IP resistente</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-warm)] text-white rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-center">
                                Potencia
                            </h4>
                            <ul className="space-y-2 text-white/90">
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Generación por pisada: 2-5W</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>
                                        Almacenamiento: Supercondensador
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Eficiencia: 60-80%</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Building className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-center">
                                Aplicaciones
                            </h4>
                            <ul className="space-y-2 text-white/90">
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Parques públicos</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Espacios de alto tráfico</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Centros educativos</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-info-dark)] to-[var(--color-neutral-dark)] text-white rounded-lg p-6 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-center">
                                Tecnología
                            </h4>
                            <ul className="space-y-2 text-white/90">
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Controlador ESP32</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Conectividad BLE/WiFi</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white/80 mr-2 mt-1">
                                        •
                                    </span>
                                    <span>Monitoreo en tiempo real</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
