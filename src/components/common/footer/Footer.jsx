import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4 mt-4">
      <div className="flex bg-whit border-0 gap-1 lg:pe-10">
        <img src={logo} className="h-14 rounded-2xl" alt="logo" />
        <p className="text-4xl font-semibold my-auto text-white">Brooklyn</p>
      </div>
    </div>
  );
};

export default Footer;
