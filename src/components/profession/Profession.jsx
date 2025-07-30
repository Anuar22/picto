import React from "react";
import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content flex max-md:flex-col items-center justify-between h-full"
      id="services"
    >
      <div className="w-full h-84.5 flex flex-col justify-between px-3">
        <div className="w-full">
          {" "}
          {/* h-67 */}
          {/* NOTE: required height: 268px */}
          <p className="section-title max-md:text-center">What I do?</p>
          <div className="mt-6 w-full text-[14px]">
            <p className="min-sm:text-lg font-normal text-gray-400 mb-4">
              I specialize in designing user experiences, crafting engaging
              interfaces, and building robust web applications that deliver
              value and usability.
            </p>
            <p className=" min-sm:text-lg font-normal text-gray-400">
              My approach combines creativity and technical expertise to deliver
              solutions that are both visually appealing and highly functional
              for users.
            </p>
          </div>
        </div>
        <a
          href="#!"
          className="btn btn-primary text-white  h-8 text-sm min-sm:w-31.5 min-sm:h-12 min-sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {/* NOTE: Required height: 600px */}
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
