import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const heightWidth = (w) => {
  const ratio = { w: 26, h: 23 };
  return `w-${w * ratio?.w} h-${w * ratio?.h}`;
};

const WorkSteps = ({ data, style }) => {
  return (
    <div
      className={`${heightWidth(3)} p-8 bg-white rounded-xl ${style && style}`}
    >
      <div
        className={`w-18 h-18 ${data?.background} text-center center rounded-md`}
      >
        <p className="">
          <FontAwesomeIcon
            icon={data?.icon}
            size="2xl"
            style={{
              color: data?.background == "bg-[#A53DFF]" ? "#ffffff" : "#A53DFF",
            }}
          />
        </p>
      </div>
      <div className="mt-8">
        <p className="font-semibold text-xl">{`${data?.id} ${data?.title}`}</p>
        <p className="mt-3 text-[16px]">{data?.description}</p>
      </div>
    </div>
  );
};

export default WorkSteps;
