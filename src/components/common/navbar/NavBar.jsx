import React from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  //   Menu list for the navbar
  const navItems = [
    { id: 1, name: "Home", url: "Home" },
    { id: 2, name: "About", url: "About" },
    { id: 3, name: "Process", url: "Process" },
    { id: 4, name: "Portfolio", url: "Portfolio" },
    { id: 5, name: "Blog", url: "Blog" },
    { id: 6, name: "Services", url: "Services" },
  ];

  //   Navigator function
  const handleNavigate = (urlLink) => {
    // WORKING HERE [Three word problems]
    console.log(urlLink.toLowerCase());
    urlLink?.includes(" ") ? (urlLink = urlLink.replaceAll(" ", "-")) : urlLink;
    navigate(`/#${urlLink}`);
  };

  const menu = navItems.map((item) => (
    <li key={item.id}>
      <a
        className="hover:text-purple-700"
        onClick={() => handleNavigate(item.url?.toLowerCase())}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="w-full px-[27px]">
      <div className="navbar flex justify-between mx-auto w-full xl:px-50">
        <div className="flex items-center">
          <div className="dropdown">
            {/* Menu for small screen start */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold flex-nowrap"
            >
              {menu}
            </ul>
            {/* Menu for small screen end */}
          </div>

          {/* Logo and title for small screen start */}
          <div className="flex bg-whit border-0 gap-1 lg:pe-10">
            <img src={logo} className="h-14 rounded-2xl" alt="logo" />
            <p className="text-4xl font-semibold my-auto">Brooklyn</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-5">
          <ul className="menu menu-horizontal lg:text-xl text-xl px-1 gap-3 md:shrink-0">
            {menu}
          </ul>
          <a className="btn btn-lg btn-primary">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
