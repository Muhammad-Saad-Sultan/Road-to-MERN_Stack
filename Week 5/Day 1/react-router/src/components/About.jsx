import profile from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-12 min-[768px]:py-17">
            <div className="flex flex-col items-center gap-8 text-center min-[768px]:gap-8 lg:flex-row lg:items-center lg:gap-[50px] lg:text-left">
                <div className="flex justify-center lg:flex-[0_0_320px]">
                    <img
                        src={profile}
                        alt="Muhammad Saad Sultan"
                        className="h-[220px] w-[220px] rounded-full border-[3px] border-[#808184] object-cover shadow-[0_0_30px_rgba(119,119,130,0.35)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(119,119,130,0.35)] min-[480px]:h-[240px] min-[480px]:w-[240px] lg:h-[400px] lg:w-[400px]"
                    />
                </div>

                <div className="w-full flex-1">
                    <h3 className="mb-4 text-[1.35rem] text-white min-[480px]:text-[1.5rem] lg:text-[1.6rem]">
                        Hello! I'm{" "}
                        <span className="text-[#808184]">
                            Muhammad Saad Sultan
                        </span>
                    </h3>

                    <p className="mb-7 text-[0.95rem] leading-[1.7] text-[#dce0e6] min-[480px]:text-[1rem] lg:text-[1.02rem]">
                        I am a results-driven Full-Stack Web Developer and Computer Science student at the University of Central Punjab. I specialize in building modern, scalable web applications using React.js, Node.js, Express.js, PHP, MongoDB, and MySQL. Passionate about solving real-world problems through clean code, I craft intuitive user interfaces, integrate intelligent AI solutions, and deploy seamless web experiences across desktop and mobile devices.
                    </p>

                    <div className="mb-8 grid grid-cols-1 gap-4 min-[768px]:grid-cols-2 min-[768px]:gap-x-6 min-[768px]:gap-y-4">
                        <div className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#151c2e] px-4 py-3 text-left">
                            <i className="fa-solid fa-envelope text-[1.1rem] text-[#808184]" />
                            <div>
                                <span className="mr-1 text-[0.85rem] font-semibold text-white min-[480px]:text-[0.9rem]">
                                    Email:
                                </span>
                                <span className="text-[0.85rem] text-[#dce0e6] min-[480px]:text-[0.9rem]">
                                    saad.devhub@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#151c2e] px-4 py-3 text-left">
                            <i className="fa-solid fa-phone text-[1.1rem] text-[#808184]" />
                            <div>
                                <span className="mr-1 text-[0.85rem] font-semibold text-white min-[480px]:text-[0.9rem]">
                                    Phone:
                                </span>
                                <span className="text-[0.85rem] text-[#dce0e6] min-[480px]:text-[0.9rem]">
                                    +92 324 5054711
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#151c2e] px-4 py-3 text-left">
                            <i className="fa-solid fa-location-dot text-[1.1rem] text-[#808184]" />
                            <div>
                                <span className="mr-1 text-[0.85rem] font-semibold text-white min-[480px]:text-[0.9rem]">
                                    Location:
                                </span>
                                <span className="text-[0.85rem] text-[#dce0e6] min-[480px]:text-[0.9rem]">
                                    Lahore, Pakistan
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#151c2e] px-4 py-3 text-left">
                            <i className="fa-solid fa-graduation-cap text-[1.1rem] text-[#808184]" />
                            <div>
                                <span className="mr-1 text-[0.85rem] font-semibold text-white min-[480px]:text-[0.9rem]">
                                    Degree:
                                </span>
                                <span className="text-[0.85rem] text-[#dce0e6] min-[480px]:text-[0.9rem]">
                                    BS Computer Science
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <a
                            href="https://github.com/Muhammad-Saad-Sultan"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(92,93,98,0.4)] bg-[#151c2e] px-5 py-2.5 text-[0.9rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-[#808184] hover:text-white hover:shadow-[0_0_15px_rgba(119,119,130,0.35)] min-[480px]:text-[0.95rem]"
                            aria-label="GitHub Profile"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github" />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/muhammadsaadsultan/"
                            target="_blank"
                            className="inline-flex items-center gap-2 rounded-lg border border-[rgba(92,93,98,0.4)] bg-[#151c2e] px-5 py-2.5 text-[0.9rem] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-[#808184] hover:text-white hover:shadow-[0_0_15px_rgba(119,119,130,0.35)] min-[480px]:text-[0.95rem]"
                            aria-label="LinkedIn Profile"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;