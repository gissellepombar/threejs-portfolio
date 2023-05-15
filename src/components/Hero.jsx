import { motion } from "framer-motion";

import { styles } from "../styles";
import { githubs, linked } from "../assets";

import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#6bffee]" />
                    <div className="w-1 sm:h-80 h-40 teal-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm{" "}
                        <span className="text-[transparent] bg-clip-text bg-gradient-to-r from-[#a2fa9d] to-[#6bffee]">
                            Gisselle
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-3 text-white-100`}>
                        Software Developer <br className="sm:block hidden" />
                        {/* interfaces and web applications */}
                    </p>
                    <div className="w-full flex mt-5">
                        <motion.p
                            variants={fadeIn("", "", 0.1, 1)}
                            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                        >
                            I'm a software engineer and former chemist. I have
                            great interest in full-stack development, artificial
                            intelligence, and 3D web design.
                        </motion.p>
                    </div>
                    <div className="flex justify-start mt-5 gap-4">
                        <motion.div
                            whileHover={{ color: "#6bffee" }}
                            className="w-6 h-6 cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "mailto:gissellepombar@gmail.com",
                                    "_blank"
                                )
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </motion.div>
                        <motion.div
                            whileHover={{ color: "#6bffee" }}
                            className="w-6 h-6 cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://github.com/gissellepombar",
                                    "_blank"
                                )
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </motion.div>
                        <motion.div
                            whileHover={{ color: "#6bffee" }}
                            className="w-6 h-6 cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/gisselle-pombar/",
                                    "_blank"
                                )
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>LinkedIn</title>
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </motion.div>
                        <motion.div
                            whileHover={{ color: "#6bffee" }}
                            className="w-6 h-6 cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://bocacode.com/candidates/software-engineer/gisselle-pombar",
                                    "_blank"
                                )
                            }
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>Star</title>
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* github */}
            {/* <div
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/gisselle-pombar/",
                        "_blank"
                    )
                }
                // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </div> */}
            {/* linkedin */}
            <div
                onClick={() =>
                    window.open("https://www.youtube.com/", "_blank")
                }
                // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </div>
            {/* mail */}
            <div
                onClick={() =>
                    window.open("https://www.youtube.com/", "_blank")
                }
                // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
            </div>
            {/* star */}
            <div
                onClick={() =>
                    window.open("https://www.youtube.com/", "_blank")
                }
                // className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <title>Star</title>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </div>

            {/* <ComputersCanvas /> */}

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[32px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
