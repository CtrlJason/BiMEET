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
        <section className="py-16 px-4 bg-white">
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

                <div className="mt-16 bg-[var(--color-neutral-light)] rounded-lg p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--color-primary-dark)]">
                        Especificaciones Técnicas{" "}
                        {/* <-- Modificar aquí el título */}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                                Dimensiones {/* <-- Modificar aquí el título */}
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                {/* <-- Modificar aquí los items */}
                                <li>• Baldosa estándar 30×30 cm</li>{" "}
                                <li>• Modular y fácil instalación</li>
                                <li>• Encapsulado IP resistente</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
                                {/* <-- Modificar aquí el título */}
                                Aplicaciones
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                {/* <-- Modificar aquí los items */}
                                <li>• Parques públicos</li>
                                <li>• Espacios de alto tráfico</li>
                                <li>• Áreas recreativas</li>
                                <li>• Centros educativos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
