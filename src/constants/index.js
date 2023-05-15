import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Software Developer Boot Camp",
      company_name: "Boca Code",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2023- March 2023",
      points: [
        "Gained comprehensive training in full-stack software development at Boca Code, with a strong emphasis on real-world application by working on actual projects for tech industry companies.",
        "Acquired a robust set of skills, including but not limited to JavaScript, Node.js, HTML/CSS, React, React Native, SQL/NoSQL, and Python. Additionally, learned industry best practices such as Agile/Scrum methodology, version control using Git, REST principles, and clean coding.",
        "Honed problem-solving abilities, particularly in data structures, algorithms, and software design principles, such as DRY and SOLID. Became proficient in handling DOM events, routing, hooks, and SASS in a React environment.",
        "Gained hands-on experience with DevOps tools, including Docker, AWS, and Google Cloud Platform, and learned to manage software development processes with tools like VS Code, MySQL, MongoDB, Firebase, and Postman.",
      ],
    },
    {
      title: "Freelance Developer",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Assisted in writing clean, efficient, and maintainable code for a variety of client and internal projects.",
        "Gained hands-on experience working with JavaScript, HTML, and CSS across various platforms and frameworks, including some experience with React.",
        "Regularly communicated with clients to understand their needs and provide technical support.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "MIT Chemistry PhD Candidate",
      company_name: "MIT",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2019 - September 2022",
      points: [
        "Optimize novel organophosphorus-catalyzed reductive O-atom reactivity for C(sp3)-H functionalization", 
        "Leveraged advanced chemistry software such as ORCA and Gaussian in my research, enabling efficient molecular modeling and computational chemistry tasks, leading to improved outcomes in experiments and studies.",
        "Gained a deep understanding of data analytics through extensive use of Python, successfully analyzing and interpreting complex data sets to drive research conclusions and insights.", 
        "Applied Python scripting for automating routine tasks, enhancing productivity and accuracy while reducing time spent on manual data processing and analysis.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "Princeton University",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "August 2017 & August 2018",
      points: [
        "Conducted meticulous synthesis and characterization of bis(imino)pyridine iron methyl complexes.",
        "Applied computational chemistry tools for detailed analysis and testing of chiral iron catalysts.",
        "Mastered the use of MATLAB for Electron Paramagnetic Resonance (EPR) simulations, providing valuable insights into molecular structures and reaction mechanisms.",
        "Employed advanced data analysis techniques using MATLAB, facilitating an efficient examination of experimental results and leading to impactful contributions to the field of organometallic chemistry.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Echo",
      description:
      "Flash card app that uses spaced repetition for efficient learning. It streamlines study sessions, enhances memory retention, and makes studying fun. Its user-friendly interface lets users easily create, review, and rate flash cards, promoting success in their studies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://echo-cards.web.app/",
    },
    {
      name: "Portfolio",
      description:
      "Portfolio website featuring captivating 3D visuals, showcasing a dynamic collection of work, demonstrating skills, experience, and accomplishments across diverse projects and industries.",      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/gissellepombar/threejs-portfolio",
    },
    {
      name: "SocialQ",
      description:
        "SocialQ is a front-end React Native mobile application for social media. It allows users to connect with friends, share updates, and explore engaging content.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/gissellepombar/affirmation-frontend",
    },
    {
      name: "ToDew 🌱",
      description:
      "Full-stack mobile to-do app seamlessly integrating task management, intuitive user interface, and robust backend functionality, empowering users to efficiently organize, prioritize, and track their tasks on the go.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Daily Lift",
      description:
      "A full-stack web app that generates random affirmations dynamically updates background and promotes positivity and motivation. Experience an interactive interface with visually engaging elements.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };