import { motion } from "framer-motion";

import { styles } from "../styles";
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
                        Software Developer{" "}
                        <br className="sm:block hidden" />
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
                </div>
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
