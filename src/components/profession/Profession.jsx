import React from "react";
import Roles from "./Roles";

const Profession = () => {
  const rolesData = [
    {
      id: 1,
      title: "User Experience (UX)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      id: 2,
      title: "User Interface (UI)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
  ];

  return (
    <div
      className="content flex max-md:flex-col items-center justify-between h-full"
      id="services"
    >
      <div className="w-full min-md:w-132.25 h-84.5 flex flex-col justify-between px-3">
        <div className="w-full">
          {" "}
          {/* h-67 */}
          {/* NOTE: required height: 268px */}
          <p className="section-title max-md:text-center">What I do?</p>
          <div className="mt-6 w-full text-[14px]">
            <p className="min-sm:text-lg font-normal text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className=" min-sm:text-lg font-normal text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
        </div>
        <a
          href="#!"
          className="btn btn-primary text-white w-25.5 h-8 text-sm min-sm:w-31.5 min-sm:h-12 min-sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="min-sm:w-162">
        {/* NOTE: Required height: 600px */}
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
