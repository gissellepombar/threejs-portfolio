import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    const two = (
        <p>
          Outside of work, I'm interested in following the advancement of
          technology. I also play a lot of video games and make TikToks while
          participating in Hackathons from time to time
        </p>
      );
    const tech_stack = [
        "Javascript ES6+",
        "Python",
        "React.js",
        "Java",
        "Node.js",
        "React Native",
        "Typescript",
        "Three JS",
        "SQL",
        "Next JS",
      ];
    
      const tech_items = tech_stack.map((stack) => <li>{stack}</li>);
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a skilled software developer with experience in Typescript
                and Javascript, and expertise in frameworks like React, React Native, and Node.js,
                I'm a quick learner and collaborate closely
                with clients to create efficient, scalable, and user-friendly
                solutions that solve real-world problems. Let's work together to
                bring your ideas to life!
            </motion.p>
            <div className="container">
        <p className="about-text">
          <div className="about-description">
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <div>
                    <li>{tech_item}</li>
                  </div>
                );
              })}
            </ul>
            {[two]}
          </div>
        </p>
      </div>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
