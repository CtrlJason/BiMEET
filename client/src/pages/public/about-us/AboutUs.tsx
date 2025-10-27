import WhoWeAreSection from "../../../modules/public/components/about-us/WhoWeAreSection";
import TeamSection from "../../../modules/public/components/about-us/TeamSection";

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-b from-white to-[var(--color-neutral-light)]">
            <section className="py-16 px-4 ">
                <div className="max-w-6xl mx-auto">
                    <WhoWeAreSection />
                </div>
            </section>
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <TeamSection />
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
