import ContactForm from "../../../modules/public/components/contact/ContactForm";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[var(--color-neutral-light)]">
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Contact;
