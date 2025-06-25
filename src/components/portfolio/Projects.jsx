import React from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="min-sm:w-106 min-sm:h-119 overflow-hidden rounded-[8px] outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="min-sm:h-[360px] p-8">
        <div className="min-sm:h-11 mb-3">
          <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
          <p className="text-gray-900 text-lg font-semibold ">{data?.title}</p>
        </div>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="btn hover:border-[#A53DFF] hover:text-[#A53DFF] bg-white text-[16px] font-semibold hover:gap-4 transition-all duration-300 w_43.25 h-[48px] mt-5 py-3 px-6"
        >
          Case Study
          <span className="ms-3">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="l"
              className=""
              //   style={{ color: "#A53DFF" }}
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
