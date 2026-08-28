const Contact = () => {
    return (
        <section id="contact">
            <div className="max-w-[750px] mx-auto bg-[#151c2e] p-6 px-[18px] rounded-[14px] border border-[rgba(255,255,255,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.3)] min-[768px]:p-10">
                <form className="flex flex-col gap-[22px]" action="#" method="post">
                    <div className="flex flex-col gap-[22px] min-[768px]:flex-row min-[768px]:gap-5">
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="name" className="text-[0.9rem] font-medium text-white">
                                Name
                            </label>
                            <div className="relative flex items-center">
                                <i className="fa-solid fa-user absolute left-4 text-[#64748b] text-[0.95rem] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"></i>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full Name"
                                    required
                                    className="w-full py-3 px-4 pl-11 bg-[#1e293b] border border-[rgba(255,255,255,0.08)] rounded-lg text-white text-[0.95rem] outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-[#808184] focus:shadow-[0_0_10px_rgba(119,119,130,0.35)]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="email" className="text-[0.9rem] font-medium text-white">
                                Email
                            </label>
                            <div className="relative flex items-center">
                                <i className="fa-solid fa-envelope absolute left-4 text-[#64748b] text-[0.95rem] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    required
                                    className="w-full py-3 px-4 pl-11 bg-[#1e293b] border border-[rgba(255,255,255,0.08)] rounded-lg text-white text-[0.95rem] outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-[#808184] focus:shadow-[0_0_10px_rgba(119,119,130,0.35)]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="subject" className="text-[0.9rem] font-medium text-white">
                            Subject
                        </label>
                        <div className="relative flex items-center">
                            <i className="fa-solid fa-paper-plane absolute left-4 text-[#64748b] text-[0.95rem] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"></i>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry / Opportunity"
                                required
                                className="w-full py-3 px-4 pl-11 bg-[#1e293b] border border-[rgba(255,255,255,0.08)] rounded-lg text-white text-[0.95rem] outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-[#808184] focus:shadow-[0_0_10px_rgba(119,119,130,0.35)]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="message" className="text-[0.9rem] font-medium text-white">
                            Message
                        </label>
                        <div className="relative flex items-start">
                            <i className="fa-solid fa-comment absolute left-4 top-4 text-[#64748b] text-[0.95rem] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"></i>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message details here..."
                                required
                                className="w-full py-3 px-4 pl-11 bg-[#1e293b] border border-[rgba(255,255,255,0.08)] rounded-lg text-white text-[0.95rem] outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:border-[#808184] focus:shadow-[0_0_10px_rgba(119,119,130,0.35)] resize-y"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="self-start inline-flex items-center gap-2.5 py-3 px-7 bg-[#808184] text-white text-base font-semibold border-0 rounded-lg cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_15px_rgba(119,119,130,0.35)] hover:bg-[#585b5f] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(119,119,130,0.35)] w-full justify-center min-[768px]:w-auto"
                    >
                        Submit Message <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;