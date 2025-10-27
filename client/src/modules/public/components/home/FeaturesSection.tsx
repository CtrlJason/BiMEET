import { Zap, Wrench, Battery, HardDrive, Cpu, Wifi } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
            title: "Generación Piezoeléctrica",
            description:
                "Transforma energía mecánica de las pisadas en señales eléctricas AC mediante elementos piezoeléctricos",
            icon: Zap,
        },
        {
            title: "Condicionamiento de Señal",
            description:
                "Rectificación y limitación de tensión, filtrado de picos y protección contra sobretensiones",
            icon: Wrench,
        },
        {
            title: "Gestión de Energía",
            description:
                "Control de carga al almacenamiento, reguladores DC-DC y estrategias para maximizar energía útil",
            icon: Battery,
        },
        {
            title: "Almacenamiento Inteligente",
            description:
                "Acumulación de energía en supercondensador o batería con gestión de carga/descarga",
            icon: HardDrive,
        },
        {
            title: "Control ESP32",
            description:
                "Microcontrolador que mide variables eléctricas, cuenta pisadas y procesa datos en tiempo real",
            icon: Cpu,
        },
        {
            title: "Conectividad",
            description:
                "Comunicación inalámbrica mediante Bluetooth Low Energy (BLE) o Wi-Fi para telemetría",
            icon: Wifi,
        },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-white to-[var(--color-neutral-light)]">
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
                            <div className="flex justify-center mb-4">
                                <feature.icon className="w-10 h-10 text-[var(--color-primary)]" />
                            </div>
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
