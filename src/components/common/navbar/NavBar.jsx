import React from "react";
import logo from "../../../assets/logo.jpg";
const NavBar = () => {
  //   Menu list for the navbar
  const menu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Process</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Services</a>
      </li>
    </>
  );

  return (
    <div className="w-full">
      <div className="navbar shadow-sm flex justify-between px-4 lg:px-20 py-2">
        <div className="flex">
          <div className="dropdown">
            {/* TODO: Menu for small screen start */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {menu}
            </ul>
            {/* Menu for small screen end */}
          </div>

          <div /* Logo section */ className="flex bg-whit border-0 gap-1">
            <img src={logo} className="h-14 rounded-2xl" alt="logo" />
            <p className="text-4xl font-semibold my-auto">Brooklyn</p>
          </div>
        </div>

        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1 gap-3">{menu}</ul>
          <a className="btn btn-lg btn-primary">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
