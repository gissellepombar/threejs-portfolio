import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const [active, setActive] = useState("");

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className="flex">
                <div className="w-1/3">
                    <ul>
                        {experiences.map((experience, index) => (
                            <li key={index} onClick={() => setSelectedExperience(experience) || setActive(experience.title)} 
                            className={`p-4 ${
                                active === experience.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-[transparent] bg-clip-text bg-gradient-to-r from-[#a2fa9d] to-[#6bffee] text-[24px] font-medium cursor-pointer`}
                            // onClick={() => setActive(experience.title)}
                            // className="cursor-pointer relative hover:text-pink-500 md:text-base md:text-white text-transparent text-[24px] font-medium p-4"
                            >
                                {experience.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-2/3 p-4">   
                    <h3 className="text-[transparent] bg-clip-text bg-gradient-to-r from-[#a2fa9d] to-[#6bffee] text-[24px] font-bold">{selectedExperience.title}</h3>
                    <h4 className="text-white text-[16px] font-semibold"
                    style={{ margin: 0 }}>{selectedExperience.company_name}</h4>
                    <p className="text-secondary">{selectedExperience.date}</p>
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                        {selectedExperience.points.map((point, index) => (
                            <li key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
// const Experience = () => {
//     const [work, setWork] = useState("React.js Developer");
//     return (
//         <>
//             <motion.div variants={textVariant()}>
//                 <p className={styles.sectionSubText}>What I have done so far</p>
//                 <h2 className={styles.sectionHeadText}>Work Experience.</h2>
//             </motion.div>

//             <div>
//                 <div className="flex-[1] display-flex items-center">
//                     <ul>
//                         {experiences.map((experience, item) => (
//                             <li key={experience} text={item} onClick={() => setWork(item)}>
//                                 {experience.title}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>   
//                         {work === "React.js Developer" ? (
//                             <p>Test</p>    
//                         ) : work === {experiences.point}}
//                 </div>
//             </div>

//             {/* <div className="mt-20 flex flex-col">
//                 <VerticalTimeline>
//                     {experiences.map((experience, index) => (
//                         <ExperienceCard key={index} experience={experience} />
//                     ))}
//                 </VerticalTimeline>
//             </div> */}
//         </>
//     );
// };

export default SectionWrapper(Experience, "work");
