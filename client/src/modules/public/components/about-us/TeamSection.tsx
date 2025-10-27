import { team } from "../../constants/about-us/team";

const TeamSection = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary-dark)]">
                Nuestro Equipo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, idx) => {
                    const gradientColors = [
                        "from-[var(--color-primary)] to-[var(--color-primary-dark)]",
                        "from-[var(--color-accent)] to-[var(--color-accent-warm)]",
                        "from-[var(--color-info)] to-[var(--color-info-dark)]",
                    ];

                    return (
                        <div
                            key={idx}
                            className={`bg-gradient-to-br ${
                                gradientColors[idx % gradientColors.length]
                            } text-white rounded-lg p-8 shadow-lg flex flex-col items-center relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-default`}
                        >
                            {member.photo ? (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-white/20 shadow-lg"
                                />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-6 text-4xl text-white shadow-lg border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    {member.name[0]}
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mb-3 text-center">
                                {member.name}
                            </h3>
                            <p className="text-md font-medium text-white/80 mb-4 text-center">
                                {member.role}
                            </p>
                            {member.bio && (
                                <p className="text-white/90 text-center leading-relaxed">
                                    {member.bio}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection;
