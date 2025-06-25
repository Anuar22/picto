import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="p-6 flex h-24 my-3 rounded-[10px] bg-white  hover:scale-[1] duration-450  cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200"
      /* Scale effect:  */
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        } center rounded-[4px]`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          color={hover ? "#ffffff" : "#A53DFF"}
          size="xl"
        />
      </div>
      <div className="ms-3.25 h-12">
        <p className="text-[14px] text-[#424E60] font-normal">{item?.title}:</p>
        <p className="text-[16px] text-[#132238] font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
