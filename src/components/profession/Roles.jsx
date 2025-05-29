import React, { useEffect } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = React.useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-8 bg-white shadow-xl hover:drop-shadow-2xl shadow-gray-100 hover:shadow-gray-200 hover:scale-[1.01] ease-out duration-800 rounded-lg mb-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-primary absolute start-0 w-0 h-full mt-[-32px] scale-0 ${
          mouseHover && "scale-120 duration-200 w-[5px]"
        }`}
      />
      <div>
        <p className="text-2xl font-semibold text-gray-900 pb-4">
          {role?.title}
        </p>
        <p className="text-[16px] font-normal text-gray-700">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
