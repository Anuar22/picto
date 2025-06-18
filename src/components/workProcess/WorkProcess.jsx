import React from "react";
import "./workProcess.css";
import WorkSteps from "./WorkSteps";
import {
  faCalendar,
  faCalendarPlus,
  faHardDrive,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
const WorkProcess = () => {
  const workStepData = [
    {
      id: 1,
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: faCalendar,
      background: "bg-[#A53DFF]",
    },
    {
      id: 2,
      title: "Analyze",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: faCalendarPlus,
      background: "bg-[#EDD8FF80]",
    },
    {
      id: 3,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: faPenToSquare,
      background: "bg-[#EDD8FF80]",
    },
    {
      id: 4,
      title: "Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
      icon: faHardDrive,
      background: "bg-[#EDD8FF80]",
    },
  ];

  return (
    <div
      className="content min-lg:h-150 h-200 flex max-lg:flex-col justify-between items-center bg-red-500"
      id="work-process"
    >
      <div className="min-lg:w-132.25 max-lg:px-10 text-center">
        <p className="min-md:text-5xl text-2xl font-semibold">Work Process</p>
        <p className="mt-6 mb-4 text-[18px] font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendis imperdiet,
        </p>
        <p className="mt-6 text-[18px] font-normal text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non.
        </p>
      </div>

      <div className="flex flex-wrap w-162 min-lg:w-fit justify-end">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`${index % 2 == 1 ? "ms-6 mt-6" : "mb-6"}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
