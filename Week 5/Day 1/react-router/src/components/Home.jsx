import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-5 py-14 min-[480px]:px-8 min-[480px]:py-16 min-[768px]:px-[6%] min-[768px]:py-20 lg:px-[8%]"
        >
            <div className="absolute -right-24 -top-44 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-sm min-[768px]:h-[450px] min-[768px]:w-[450px]" />
            <div className="absolute -bottom-36 -left-24 h-[250px] w-[250px] rounded-full bg-blue-500/5 min-[768px]:h-[300px] min-[768px]:w-[300px]" />

            <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 min-[768px]:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <div className="mx-auto max-w-[680px] text-center lg:mx-0 lg:text-left">
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[2px] opacity-70 min-[480px]:text-sm">
                        Hello, I'm
                    </span>

                    <h1 className="text-[clamp(2.5rem,10vw,4rem)] font-extrabold leading-[1.05] min-[480px]:text-[clamp(3rem,8vw,4.5rem)] lg:text-[clamp(3rem,6vw,5.5rem)]">
                        Muhammad Saad{" "}
                        <span className="text-[var(--accent-color)]">
                            Sultan
                        </span>
                    </h1>

                    <h2 className="my-4 text-[clamp(1.25rem,5vw,1.8rem)] font-semibold min-[768px]:my-5 lg:text-[clamp(1.4rem,3vw,2.2rem)]">
                        Full-Stack Web Developer
                    </h2>

                    <p className="mb-7 text-[0.95rem] leading-[1.8] opacity-75 min-[480px]:mb-9 min-[480px]:text-[1rem] min-[768px]:text-[1.05rem]">
                        I build modern, scalable and user-focused web
                        applications using React.js, Node.js, Express.js,
                        PHP, MongoDB and MySQL. I also explore AI-powered
                        solutions to turn real-world ideas into practical
                        digital experiences.
                    </p>

                    <div className="flex flex-col justify-center gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-4 lg:justify-start">
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent-color)] px-[22px] py-[14px] text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:shadow-lg min-[480px]:text-base"
                        >
                            View My Projects
                            <i className="fa-solid fa-arrow-right" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-current px-[22px] py-[14px] text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black min-[480px]:text-base"
                        >
                            Let's Work Together
                            <i className="fa-solid fa-paper-plane" />
                        </Link>
                    </div>

                    <div className="mt-7 flex justify-center gap-[18px] min-[480px]:mt-9 lg:justify-start">
                        <a
                            href="https://github.com/Muhammad-Saad-Sultan"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-gray-400/35 transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:text-white"
                        >
                            <i className="fa-brands fa-github text-lg" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/muhammadsaadsultan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-gray-400/35 transition duration-300 hover:-translate-y-1 hover:bg-[var(--accent-hover)] hover:text-white"
                        >
                            <i className="fa-brands fa-linkedin text-lg" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center px-2 min-[480px]:px-4 lg:px-0">
                    <div className="w-full max-w-[480px] rotate-1 overflow-hidden rounded-[14px] bg-gray-900 text-gray-200 shadow-2xl transition duration-500 hover:rotate-0 hover:-translate-y-2 min-[768px]:rotate-2">
                        <div className="flex h-[38px] items-center gap-2 bg-gray-800 px-3 min-[480px]:h-[42px] min-[480px]:px-4">
                            <span className="h-[9px] w-[9px] rounded-full bg-gray-500 min-[480px]:h-[11px] min-[480px]:w-[11px]" />
                            <span className="h-[9px] w-[9px] rounded-full bg-gray-500 min-[480px]:h-[11px] min-[480px]:w-[11px]" />
                            <span className="h-[9px] w-[9px] rounded-full bg-gray-500 min-[480px]:h-[11px] min-[480px]:w-[11px]" />
                        </div>

                        <div className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-7 min-[480px]:p-6 min-[480px]:text-[0.85rem] min-[480px]:leading-8 min-[768px]:p-7 min-[768px]:text-[0.95rem]">
                            <p>
                                <span className="font-bold text-blue-400">
                                    const
                                </span>{" "}
                                developer =
                            </p>

                            <p className="pl-4 min-[480px]:pl-6">
                                {"{"}
                            </p>

                            <p className="pl-8 min-[480px]:pl-12">
                                name:{" "}
                                <span className="text-green-400">
                                    "Saad Sultan"
                                </span>
                                ,
                            </p>

                            <p className="pl-8 min-[480px]:pl-12">
                                role:{" "}
                                <span className="text-green-400">
                                    "Full-Stack Developer"
                                </span>
                                ,
                            </p>

                            <p className="pl-8 min-[480px]:pl-12">
                                stack:{" "}
                                <span className="text-green-400">
                                    "MERN"
                                </span>
                                ,
                            </p>

                            <p className="pl-8 min-[480px]:pl-12">
                                passion:{" "}
                                <span className="text-green-400">
                                    "Building"
                                </span>
                            </p>

                            <p className="pl-4 min-[480px]:pl-6">
                                {"}"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;