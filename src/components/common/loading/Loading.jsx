import React, { useState } from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  document.addEventListener("readystatechange", () => {
    setLoading(document.readyState !== "complete");
  });

  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 bg-white h-[100vh] w-[100vw] mx-auto z-50 ${
        !loading && "hidden"
      }`}
    >
      <HashLoader color="#A53DFF" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
