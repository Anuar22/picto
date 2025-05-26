import React from "react";
import "./workProcess.css";
import WorkSteps from "./WorkSteps";
import { faCalendar, faCalendarPlus, faHardDrive, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const WorkProcess = () => {
    const workStepData =[
        {
            id: 1,
            title: "Research",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: faCalendar,
            background: "bg-[#A53DFF]"
        },
        {
            id: 2,
            title: "Analyze",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: faCalendarPlus,
            background: "bg-[#EDD8FF80]"
        },
        {
            id: 3,
            title: "Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: faPenToSquare,
            background: "bg-[#EDD8FF80]"
        },
        {
            id: 4,
            title: "Launch",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            icon: faHardDrive,
            background: "bg-[#EDD8FF80]"
        }
    ]
  return (
    <div className="w-330 h-150 flex justify-between items-center mx-auto">
      <div className="w-132.25">
        <p className="text-5xl font-semibold">Work Process</p>
        <p className="mt-6 mb-4 text-[18px] font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
        <p className="mt-6 text-[18px] font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
      </div>
      <div className="flex flex-wrap w-162 justify-end">
        {
            workStepData.map((data,index)=>{
                return<WorkSteps data={data} style={`${index%2==1 && 'ms-6 mt-6'}`} key={index} />
            })
        }
      </div>
    </div>
  );
};

export default WorkProcess;
