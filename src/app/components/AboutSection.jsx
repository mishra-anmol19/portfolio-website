"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
    title: "Technical Skills",
    id: "technical",
    image: "/images/technical-image.png",
    content: (
      <ul className="list-disc pl-2">
        <li>React.js</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>jQuesry</li>
        <li>Bootstrap</li>
        <li>CSS Preprocessors - SASS or LESS</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Version Control</li>
        <li>Testing and Debugging</li>
        <li>API/RESTful Services</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft",
    image: "/images/softSkilles-image.png",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem-Solving</li>
        <li>Teamwork & Collaboration</li>
        <li>Time Management</li>
        <li>Adaptability & Willingness to Learn</li>
        <li>Attention to Detail</li>
        <li>Creativity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    image: "/images/education-image.png",
    content: (
      <ul className="list-disc pl-2">
        <li>MCA - 
          <br/>GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY, 
          <br/><span>NOIDA, UTTAR PRADESH</span>
          <br/><span>2016- 2018</span>
        </li>
        <li>BCA - 
          <br/>SSPG COLLAGE, 
          <br/><span>SHAHJAHANPUR, UTTAR PRADESH</span>
          <br/><span>2014- 20116</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    image: "/images/certification-image.png",
    content: (
      <ul className="list-disc pl-2">
        <li>ChatGPT Learning</li>
        <li>React Js Advance</li>
        <li>React hooks</li>
        <li>Mastring RESTFul API</li>
        <li>javascript Unit Testing</li>
        <li>Professinal Diploma in Pricing Analysis and Management</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("technical");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-4 xl:px-6 min-h-[730px]">
        <Image src={TAB_DATA.find((t) => t.id === tab).image} alt={TAB_DATA.find((t) => t.id === tab).title} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I am a frontend developer passionate about building interactive and responsive web applications that provide excellent user experiences. I have solid experience working with JavaScript, React, Redux, HTML, CSS, and Git. I am a fast learner, eager to continually improve my skills and stay updated with the latest frontend technologies and best practices. I enjoy collaborating with teams to create beautiful, user-friendly interfaces and seamless web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("technical")}
              active={tab === "technical"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
             <TabButton
              selectTab={() => handleTabChange("soft")}
              active={tab === "soft"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
