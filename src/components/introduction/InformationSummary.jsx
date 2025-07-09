import React, { useContext } from "react";
import { ThemeContext } from "../../layouts/Main";

const InformationSummary = ({ item }) => {
  const [theme] = useContext(ThemeContext);
  const lightTheme = theme === "dark" ? false : true;
  // const darkTheme = theme === "dark" ? "bg-[#1F2937]" : "bg-[#F6EBFE]";
  return (
    <div
      className={`${
        lightTheme ? "bg-[#F6EBFE]" : "bg-[#323d4c]"
      } mx-0.5 text-center `}
    >
      {/* TODO: make responsive cards */}
      <div className="w-auto h-auto max-w-50 max-h-18 mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <p
          className={`text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold ${
            lightTheme ? "text-gray-700" : "text-amber-10"
          }`}
        >
          {item.description}
        </p>
        <p
          className={`text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[1rem] text-nowrap ${
            lightTheme ? "text-gray-500" : "text-gray-300"
          }`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
