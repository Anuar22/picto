import React from "react";
import logo from "../../../assets/logo.png";
import "./footer.css";

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

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="bg-[#2A374A] mt-4 h-[320px] flex justify-between relative w-full">
      <div className="flex max-md:flex-col justify-between mx-0 lg:px-[2%] xl:px-[10%] 2xl:px-[15%] items-center h-full w-full text-neutral-200 absolute">
        <div className="flex bg-whit border-0 gap-3 lg:me-10 shrink-0">
          <img src={logo} className="h-14 rounded-2xl" alt="logo" />
          <p className="text-4xl font-semibold my-auto">Brooklyn</p>
        </div>
        <div className="mx-3 grid grid-flow-row grid-cols-3 lg:grid-flow-col lg:grid-rows-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-3 group inline-block relative w-fit"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span class="absolute left-0 bottom-0 h-0.5 w-full bg-picto-primary scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p>Copyright &copy; {copyrightYear} Picto.</p>
      </div>
      <p className="text-white absolute bottom-0 left-0 text-center w-full pb-5">
        Made by ❤️ ThemeWagon{" "}
      </p>
    </div>
  );
};

export default Footer;
