import { Target, Eye } from "lucide-react";
import { ourValues } from "../../constants/about-us/values";

const WhoWeAreSection = () => {
    const { mission, vision } = ourValues();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary-dark)]">
                Quiénes Somos
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-lg p-8 shadow-lg">
                    <div className="flex justify-center mb-4">
                        <Target className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Misión
                    </h2>
                    <p className="text-white/90 leading-relaxed text-center">
                        {mission}
                    </p>
                </div>
                <div className="bg-gradient-to-br from-[var(--color-info)] to-[var(--color-info-dark)] text-white rounded-lg p-8 shadow-lg">
                    <div className="flex justify-center mb-4">
                        <Eye className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Visión
                    </h2>
                    <p className="text-white/90 leading-relaxed text-center">
                        {vision}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAreSection;
