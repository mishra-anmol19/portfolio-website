import { NextResponse } from "next/server";

const projectsData = [
  {
    id: 1,
    title: "CLIENT - BHARTI AXA",
    period: "July 2024 - Till Now",
    description: "PROJECT NAME - M-CUSTOMER, APP-TRACKER, CUSTOMER-PORTAL",
    responsibility: [
      "Built user-friendly web apps with React.js, aligned with project goals",
      "Enhanced UX by developing responsive, accessible interfaces",
      "Participated in code reviews to ensure quality and consistency",
      "Led client-side requirements and successfully delivered multiple projects"
    ],
    content: [
      "React.js",
      "Redux",
      "Next.js",
      "JavaScript",
      "API/RESTful Services",
      "jQuery",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/axa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "CLIENT - NASCO DUBAI",
    description: "PROJECT NAME - NASCO SALES CONNECT PORTAL",
    period: "Nov 2023 - July 2024",
    responsibility: [
      "Provides a centralized platform for managing sales activities, making it easier for agents to track and organize their tasks.",
      "Features an intuitive and easy-to-navigate interface, ensuring a seamless experience for users.",
      "Offers real-time updates and notifications, keeping users informed about the latest developments and activities.",
      "Includes detailed reporting tools that help agents and managers analyze performance and make informed decisions.",
      "Designing and Development of website and API's Integration."
    ],
    content: [
      "React.js",
      "Redux",
      "React Native",
      "JavaScript",
      "API/RESTful Services",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/nasco.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "CLIENT - TATA PLAY",
    description: "PROJECT NAME - TATA PLAY OTT WEB APPLICATION",
    period: "Feb 2022 - Nov 2023",
    responsibility: [
      "Responsible for designing the Front-End of Tata Play OTT web application.",
      "Collaborated with cross-functional teams to ensure seamless integration of frontend components with backend systems.",
      "Optimized the user experience by creating responsive and accessible interfaces across various devices and browsers.",
      "Worked on implementing the new requirements and modifications as per client request."
    ],
    content: [
      "React.js",
      "Redux",
      "JavaScript",
      "API/RESTful Services",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/tataPlay.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "CLIENT - TATA PLAY",
    description: "PROJECT NAME - TATA PLAY SEGMENTATION",
    period: "Nov 2021 - Feb 2022",
    responsibility: [
      "Worked on implementing the new requirements and modifications as per client request.",
      "Responsible for strategic transition from Tata SKY to Tata Play OTT during the rebranding initiative.",
      "Engaged in debugging, bug resolution and bug-fixing efforts.",
      "Contributed to code refinement initiatives by optimizing and refactoring the code for improved efficiency, readability, and maintainability."
    ],
    content: [
      "React.js",
      "Redux",
      "JavaScript",
      "API/RESTful Services",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/TataPlay1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "CLIENT - THE ANIME TIMES",
    period: "May 2023 - Aug 2023",
    description: "PROJECT NAME - AVEX CHANNEL GRIEVANCE PORTAL",
    responsibility: [
      "Developed and implemented a user-friendly grievance portal to streamline issue reporting and resolution.",
      "Worked on form validations, data handling, and secure submission process for grievance records.",
      "Collaborated with the team to deliver a scalable and efficient web solution aligned with client requirements.",
      "Optimized the portal for performance, cross-browser compatibility, and responsive design to ensure accessibility across devices."
    ],
    content: [
      "React.js",
      "Redux",
      "JavaScript",
      "API/RESTful Services",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/animea.png",
    tag: ["All", "Project Contribution"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "CLIENT - EMAIL TEMPLATE",
    description: "PROJECT NAME - EMAIL TEMPLATE",
    period: "Feb 2023 - Mar 2023",
    responsibility: [
      "Designed and developed responsive email templates compatible with major email clients and devices.",
      "Ensured cross-browser and cross-platform compatibility for seamless rendering.",
      "Implemented clean and reusable HTML/CSS code for easy customization.",
      "Created visually appealing layouts aligned with brand guidelines and marketing needs."
    ],
    content: [
      "JavaScript",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/temp.png",
    tag: ["All", "Project Contribution"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "CLIENT - AMC STUDIO",
    description: "PROJECT NAME - AMC PLUS WEB",
    period: "Aug 2023 - Dec 2023",
    responsibility: [
      "Developed and maintained the AMC Plus Web application with modern front-end technologies.",
      "Built interactive and responsive UI components for better user experience.",
      "Implemented form handling, validations, and secure data management within the application.",
      "Optimized performance, cross-browser compatibility, and responsive design.",
      "Collaborated with the team to deliver a scalable and client-focused web solution."
    ],
    content: [
      "JSX",
      "JavaScript",
      "API/RESTful Services",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/amc.png",
    tag: ["All", "Project Contribution"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 8,
    title: "CLIENT - CARIBBEAN COUNTRIES",
    period: "Oct 2018 - Oct 2021",
    description: "PROJECT NAME - E-LEARNING SOFTWARE",
    responsibility: [
      "Responsible for developing computer based training programs.",
      "Developed e-courses, e-quizzes and various other e-solutions.",
      "Usage of animations and graphics in the learning content for better understanding of the user.",
      "Created dynamic test materials and other e-learning contents for mathematics.",
      "Collaborated with the team to deliver a scalable and client-focused web solution."
    ],
    content: [
      "JSX",
      "JavaScript",
      "API/RESTful Services",
      "Bootstrap",
      "CSS Preprocessors - SASS or LESS",
      "CSS",
      "HTML",
      "Version Control"
    ],
    image: "/images/projects/elar.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  }
];

export async function GET() {
  return NextResponse.json(projectsData);
}
