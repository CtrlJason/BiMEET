import { useState, type ChangeEvent, type FormEvent } from "react";

// Icons
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Types
import type { FormData } from "../../../../shared/types/contact/contact.ds";

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log(formData);
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-8 text-[var(--color-primary-dark)]">
                Contáctanos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                ¿Tienes alguna pregunta o comentario sobre nuestro proyecto? No
                dudes en contactarnos. Estamos aquí para ayudarte.
            </p>
            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-lg p-8 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Mail className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">
                                Información de Contacto
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-white/80" />
                                    <span>contacto@bimeet.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3 text-white/80" />
                                    <span>+57 (1) 234-5678</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-3 text-white/80" />
                                    <span>Bogotá, Colombia</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-info)] to-[var(--color-info-dark)] text-white rounded-lg p-8 shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Clock className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">
                                Horarios de Atención
                            </h3>
                            <div className="space-y-2 text-white/90">
                                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                                <p>Sábados: 9:00 AM - 2:00 PM</p>
                                <p>Domingos: Cerrado</p>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary-dark)] text-center">
                            Envíanos un Mensaje
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 resize-none"
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-lg hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
