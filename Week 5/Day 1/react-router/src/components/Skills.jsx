import skills from '../data/skills'

const Skills = () => {
    return (
        <section id="skills">
            <div className="mb-9 text-center min-[768px]:mb-12">
                <h2 className="mb-2 text-[1.8rem] font-bold text-white min-[480px]:text-[2rem] min-[768px]:text-[2.2rem]">
                    Technical <span className="text-[#808184]">Skills</span>
                </h2>

                <div className="mx-auto mb-4 h-1 w-[60px] rounded-[2px] bg-[#808184] shadow-[0_0_10px_rgba(119,119,130,0.35)]" />

                <p className="mx-auto max-w-[650px] px-4 text-[0.95rem] text-[#dce0e6] min-[480px]:text-[1rem] min-[768px]:text-[1.05rem]">
                    Core technologies and frameworks I use to build scalable web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[768px]:gap-6 min-[1025px]:grid-cols-3 min-[1025px]:gap-7">
                {skills.map((skill) => (
                    <div
                        key={skill.title}
                        className="flex flex-col items-start rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#151c2e] p-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-[rgba(92,93,98,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.15)] min-[480px]:p-7 min-[768px]:px-6 min-[1025px]:p-7"
                    >
                        <div className="mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[rgba(99,102,241,0.12)] min-[480px]:h-[54px] min-[480px]:w-[54px]">
                            <i className={`${skill.icon} text-[1.5rem] text-[#808184] min-[480px]:text-[1.7rem]`} />
                        </div>

                        <h3 className="mb-[10px] text-[1.15rem] text-white min-[480px]:text-[1.25rem]">
                            {skill.title}
                        </h3>

                        <p className="text-[0.88rem] leading-[1.6] text-[#dce0e6] min-[480px]:text-[0.93rem]">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;