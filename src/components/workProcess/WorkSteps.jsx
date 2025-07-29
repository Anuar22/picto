import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  /* 
  make a component that will take data as props and display the icon, title, and description
  the component should have a hover effect that changes the background color of the icon and the text
  the component should be responsive and have a minimum width and height of 52px and 46px respectively
  the component should have a rounded border and a shadow effect
  the component should have a minimum width and height of 11px and 11px respectively
  
  */
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
