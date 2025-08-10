import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-159.25 mx-auto px-2">
      <div className="text-center">
        <p className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have Project Idia? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        {/* btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold */}
        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
