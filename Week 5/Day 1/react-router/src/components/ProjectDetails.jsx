import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((project) => project.id === Number(id));

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            {!project ? (
                <section className="min-h-[69.5vh] max-w-[1200px] mx-auto px-4 py-8 min-[480px]:px-6 min-[768px]:py-10">
                    <button onClick={handleBack}>
                        <i className="fa-solid fa-arrow-left text-lg rounded-full border border-[#808184] bg-[var(--accent-color)] p-2 text-black/70 hover:cursor-pointer hover:bg-[var(--accent-hover)] hover:text-white" />
                    </button>

                    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                        <h2 className="text-xl font-bold text-white min-[480px]:text-2xl">
                            Project Not Found!
                        </h2>

                        <p className="mt-2 text-sm text-[#dce0e6] min-[480px]:text-base">
                            The project you're looking for doesn't exist.
                        </p>
                    </div>
                </section>
            ) : (
                <section className="mx-auto max-w-[1200px] px-4 py-8 min-[480px]:px-6 min-[768px]:py-10">
                    <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#151c2e] p-5 min-[480px]:p-6 min-[768px]:p-10">
                        <button onClick={handleBack}>
                            <i className="fa-solid fa-arrow-left mb-6 rounded-full border border-[#808184] bg-[var(--accent-color)] p-2 text-lg text-black/70 hover:cursor-pointer hover:bg-[var(--accent-hover)] hover:text-white" />
                        </button>

                        <div className="mb-8">
                            <span className="mb-3 inline-block rounded-[20px] bg-[rgba(99,102,241,0.12)] px-[10px] py-1 text-[0.7rem] font-semibold uppercase tracking-[0.5px] text-[#808184] min-[480px]:text-[0.75rem]">
                                {project.badge}
                            </span>

                            <h1 className="mb-4 text-[1.8rem] font-bold leading-tight text-white min-[480px]:text-[2rem] min-[768px]:text-[2.2rem]">
                                {project.title}
                            </h1>

                            <p className="max-w-[850px] text-[0.95rem] leading-[1.7] text-[#dce0e6] min-[480px]:text-[1rem] min-[768px]:text-[1.05rem]">
                                {project.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="mb-3 text-[1.3rem] font-bold text-white min-[480px]:text-[1.4rem] min-[768px]:text-[1.5rem]">
                                Project Overview
                            </h2>

                            <p className="text-[0.9rem] leading-[1.7] text-[#dce0e6] min-[480px]:text-[0.95rem]">
                                {project.overview}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="mb-4 text-[1.3rem] font-bold text-white min-[480px]:text-[1.4rem] min-[768px]:text-[1.5rem]">
                                Key Features
                            </h2>

                            <ul className="grid grid-cols-1 gap-3 min-[768px]:grid-cols-2">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1e293b] px-4 py-3 text-[0.85rem] text-[#dce0e6] min-[480px]:text-[0.9rem]"
                                    >
                                        <i className="fa-solid fa-check mr-2 text-[#808184]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="mb-4 text-[1.3rem] font-bold text-white min-[480px]:text-[1.4rem] min-[768px]:text-[1.5rem]">
                                Technologies Used
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded border border-[rgba(255,255,255,0.08)] bg-[#1e293b] px-3 py-1.5 text-[0.75rem] text-[#dce0e6] min-[480px]:text-[0.8rem]"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="mb-4 text-[1.3rem] font-bold text-white min-[480px]:text-[1.4rem] min-[768px]:text-[1.5rem]">
                                Challenges
                            </h2>

                            <ul className="space-y-3">
                                {project.challenges.map((challenge) => (
                                    <li
                                        key={challenge}
                                        className="text-[0.9rem] leading-[1.6] text-[#dce0e6] min-[480px]:text-[0.95rem]"
                                    >
                                        <i className="fa-solid fa-arrow-right mr-2 text-[#808184]" />
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-3 min-[480px]:gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md bg-[#808184] px-4 py-2.5 text-[0.85rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-0.5 hover:bg-[#585b5f] hover:shadow-[0_0_15px_rgba(119,119,130,0.35)] min-[480px]:px-5 min-[480px]:text-[0.9rem]"
                            >
                                <i className="fa-brands fa-github" />
                                GitHub
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-[rgba(92,93,98,0.4)] bg-[#151c2e] px-4 py-2.5 text-[0.85rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-0.5 hover:bg-[#808184] hover:shadow-[0_0_15px_rgba(119,119,130,0.35)] min-[480px]:px-5 min-[480px]:text-[0.9rem]"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                                Live Demo
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default ProjectDetails;