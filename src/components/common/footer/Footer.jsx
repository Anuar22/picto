import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  const navItems = [
    { id: 1, name: "Home", url: "Home" },
    { id: 2, name: "About", url: "About" },
    { id: 3, name: "Process", url: "Process" },
    { id: 4, name: "Portfolio", url: "Portfolio" },
    { id: 5, name: "Blog", url: "Blog" },
    { id: 6, name: "Services", url: "Services" },
  ];

  return (
    <div>
      <div className="bg-gray-800 p-4 mt-4">
        <div className="flex bg-whit border-0 gap-1 lg:pe-10">
          <img src={logo} className="h-14 rounded-2xl" alt="logo" />
          <p className="text-4xl font-semibold my-auto text-white">Brooklyn</p>
        </div>
      </div>
      <div>
        {navItems.map((item) => (
          <a
            key={item.id}
            className="text-black hover:text-purple-700 mx-2"
            href={`#${item.url.toLowerCase()}`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
