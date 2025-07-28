import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  /* w-52 h-46 */
  return (
    <div
      className={`rounded-xl ${style && style}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 min-sm:w-18 min-sm:h-18 ${
          hover ? "bg-[#A53DFF]" : "bg-soft-white"
        } text-center center rounded-md`}
      >
        <p className="">
          <FontAwesomeIcon
            icon={data?.icon}
            className="text-xl min-sm:text-3xl"
            style={{
              color: hover ? "#ffffff" : "black",
            }}
          />
        </p>
      </div>
      <div className="mt-3 min-xs:mt-8 min-sm:mt-8">
        <p className="font-semibold min-sm:text-xl">{`${data?.id} ${data?.title}`}</p>
        <p className="mt-3 text-[13px] min-sm:text-[16px]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
