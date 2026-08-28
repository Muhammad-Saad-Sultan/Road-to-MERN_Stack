import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 left-0 z-[1000] w-full border-b border-[var(--border-color)] bg-[var(--bg-header)] shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-[12px]">
            <div className="mx-auto flex min-h-[80px] max-w-[var(--max-width)] items-center justify-between px-6 py-3 min-[768px]:py-0 max-[767px]:flex-col max-[767px]:justify-center max-[767px]:gap-3">
                
                <div className="flex flex-col max-[767px]:items-center max-[767px]:text-center">
                    <Link
                        to="/"
                        className="text-[1.3rem] font-bold tracking-[-0.5px] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-[1px] min-[480px]:text-[1.4rem]"
                    >
                        Muhammad Saad{" "}
                        <span className="text-[var(--accent-color)]">
                            Sultan
                        </span>
                    </Link>

                    <span className="text-[0.72rem] font-normal tracking-[0.5px] text-[var(--text-muted)] min-[480px]:text-[0.78rem]">
                        Full-Stack Web Developer
                    </span>
                </div>

                <nav className="flex items-center">
                    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 min-[480px]:gap-x-6 min-[768px]:gap-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="relative block py-1 text-[0.8rem] font-medium text-[var(--text-secondary)] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-[var(--accent-color)] after:transition-all after:duration-300 hover:text-[var(--text-primary)] hover:after:w-full min-[480px]:text-[0.9rem] min-[768px]:text-[0.95rem]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;