import React from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="w-106 h-119 overflow-hidden rounded-[8px] outline-[#FFFFFF] shadow-lg ">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-8">
        <div className="h-11 mb-3">
          <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
          <p className="text-gray-900 text-lg font-semibold">{data?.title}</p>
        </div>
        <p className="text-gray-600 text-[14px] font-normal">
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="btn border-[#A53DFF] text-[#A53DFF] bg-white text-[16px] font-semibold w-43.25 mt-5"
        >
          Case Study
          <span className="ms-3">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="l"
              style={{ color: "#A53DFF" }}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
