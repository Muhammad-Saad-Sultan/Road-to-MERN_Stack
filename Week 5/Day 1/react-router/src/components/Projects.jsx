import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
    return (
        <section id="projects">
            <div className="mb-9 text-center min-[768px]:mb-12">
                <h2 className="mb-2 text-[1.8rem] font-bold text-white min-[480px]:text-[2rem] min-[768px]:text-[2.2rem]">
                    Featured <span className="text-[#808184]">Projects</span>
                </h2>

                <div className="mx-auto mb-4 h-1 w-[60px] rounded-[2px] bg-[#808184] shadow-[0_0_10px_rgba(119,119,130,0.35)]" />

                <p className="mx-auto max-w-[650px] px-4 text-[0.95rem] text-[#dce0e6] min-[480px]:text-[1rem] min-[768px]:text-[1.05rem]">
                    Explore a highlight of my recent full-stack, AI, and frontend engineering projects.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2 min-[768px]:gap-6 min-[1025px]:grid-cols-3 min-[1025px]:gap-7">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col justify-between rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#151c2e] p-6 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-[rgba(92,93,98,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.15)] min-[480px]:p-7 min-[768px]:px-6 min-[1025px]:p-7"
                    >
                        <div className="mb-[14px]">
                            <span className="mb-[10px] inline-block rounded-[20px] bg-[rgba(99,102,241,0.12)] px-[10px] py-1 text-[0.7rem] font-semibold uppercase tracking-[0.5px] text-[#808184] min-[480px]:text-[0.75rem]">
                                {project.badge}
                            </span>

                            <h3 className="text-[1.15rem] text-white min-[480px]:text-[1.3rem]">
                                {project.title}
                            </h3>
                        </div>

                        <div>
                            <p className="mb-5 text-[0.88rem] leading-[1.6] text-[#dce0e6] min-[480px]:text-[0.93rem]">
                                {project.description}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded border border-[rgba(255,255,255,0.08)] bg-[#1e293b] px-[10px] py-[3px] text-[0.75rem] text-[#dce0e6] min-[480px]:text-[0.78rem]"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto">
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center gap-2 rounded-md bg-[#808184] px-[18px] py-2.5 text-[0.85rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-0.5 hover:bg-[#585b5f] hover:shadow-[0_0_15px_rgba(119,119,130,0.35)] min-[480px]:text-[0.9rem]"
                            >
                                View Details
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;