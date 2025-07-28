import React from "react";
import "./workProcess.css";
import WorkSteps from "./WorkSteps";
import {
  faCalendar,
  faCalendarPlus,
  faHardDrive,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const workStepData = [
  {
    id: 1,
    title: "Research",
    description:
      "Design meets function in every pixel, blending clarity with intuitive motion.",
    icon: faCalendar,
  },
  {
    id: 2,
    title: "Analyze",
    description:
      "Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.",
    icon: faCalendarPlus,
  },
  {
    id: 3,
    title: "Design",
    description:
      "I design seamless digital experiences with precision, purpose, and a touch of elegance.",
    icon: faPenToSquare,
  },
  {
    id: 4,
    title: "Launch",
    description:
      "I craft digital products where thoughtful design meets performance-driven, responsive development.",
    icon: faHardDrive,
  },
];

const WorkProcess = () => {
  return (
    <div className="content grid min-xl:grid-cols-2 min-xl:items-center px-2 bg-red-300">
      <div className="min-lg:pe-10 min-xl:pe-35.75 bg-green-300">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 min-md:text-[18px] text-sm font-normal text-center text-gray-500">
          Driven by design and powered by code, I create digital interfaces that
          feel intuitive and perform seamlessly. Every layout, animation, and
          component is crafted with intention — merging usability with visual
          clarity,
        </p>
        <p className="mt-6 min-md:text-[18px] text-sm font-normal text-center text-gray-500">
          I blend clean design with efficient code to build engaging,
          user-friendly web experiences that stand out.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 gap-x-3 justify-end mt-2">
        {workStepData.map((data, index) => {
          return (
            /*  min-[440px]:w-52 min-[440px]:h-46 min-xs:w-65 min-xs:h-57.5 min-sm:w-78 min-sm:h-69 */
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-2 bg-white xs:bg-red-200 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
