const FeaturesSection = () => {
    const features = [
        {
            title: "Generación Piezoeléctrica", // <-- Modificar aquí el título
            description:
                "Transforma energía mecánica de las pisadas en señales eléctricas AC mediante elementos piezoeléctricos", // <-- Modificar aquí la descripción
            icon: "⚡",
        },
        {
            title: "Condicionamiento de Señal", // <-- Modificar aquí el título
            description:
                "Rectificación y limitación de tensión, filtrado de picos y protección contra sobretensiones", // <-- Modificar aquí la descripción
            icon: "🔧",
        },
        {
            title: "Gestión de Energía", // <-- Modificar aquí el título
            description:
                "Control de carga al almacenamiento, reguladores DC-DC y estrategias para maximizar energía útil", // <-- Modificar aquí la descripción
            icon: "🔋",
        },
        {
            title: "Almacenamiento Inteligente", // <-- Modificar aquí el título
            description:
                "Acumulación de energía en supercondensador o batería con gestión de carga/descarga", // <-- Modificar aquí la descripción
            icon: "💾",
        },
        {
            title: "Control ESP32", // <-- Modificar aquí el título
            description:
                "Microcontrolador que mide variables eléctricas, cuenta pisadas y procesa datos en tiempo real", // <-- Modificar aquí la descripción
            icon: "📱",
        },
        {
            title: "Conectividad", // <-- Modificar aquí el título
            description:
                "Comunicación inalámbrica mediante Bluetooth Low Energy (BLE) o Wi-Fi para telemetría", // <-- Modificar aquí la descripción
            icon: "📡",
        },
    ];

    return (
        <section className="py-16 px-4 bg-[var(--color-neutral-light)]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary-dark)]">
                    {/* <-- Modificar aquí el título */}
                    Características Técnicas del Sistema
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[var(--color-primary)]"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary-dark)]">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
