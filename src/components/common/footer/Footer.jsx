import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  /* Footer nabLinks */
  const navItems = [
    { id: 1, name: "Home", url: "Home" },
    { id: 2, name: "About", url: "About" },
    { id: 3, name: "Process", url: "Process" },
    { id: 4, name: "Portfolio", url: "Portfolio" },
    { id: 5, name: "Blog", url: "Blog" },
    { id: 6, name: "Services", url: "Services" },
    { id: 7, name: "Contact", url: "Contact" },
  ];

  return (
    <div className="bg-[#2A374A] p-4 mt-4 h-[320px] flex justify-between relative">
      <div className="flex justify-between mx-0 lg:px-[15%] items-center h-full w-full text-neutral-200 absolute">
        <div className="flex bg-whit border-0 gap-1 lg:me-10 shrink-0">
          <img src={logo} className="h-14 rounded-2xl" alt="logo" />
          <p className="text-4xl font-semibold my-auto">Brooklyn</p>
        </div>
        <div className="mx-3 flex lg:bg-red-300 flex-wrap row col-span-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              className=" hover:text-purple-700 mx-4"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="shrink-0">
          <p className="">Copyright &copy; {copyrightYear} Picto.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
