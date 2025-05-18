import React from "react";
import person from "../../../assets/images/person.png";
import "./introduction.css";
const Introduction = () => {
  return (
    <div className="w-full h-full md:w-[90%] lg:w-[75%] mx-auto flex justify-between">
      <div className=" w-full lg:pt-30">
        <p className="text-7xl font-medium">
          Hello, I’m <br />
          Brooklyn Gilbert
        </p>
        <p className="text-xl">
          I'm a Freelance <span className="bg-highlight">UI/UX Designer</span>{" "}
          and <span className="bg-highlight"> Developer</span> based in London,
          England. I strives to build immersive and beautiful web applications
          through carefully crafted code and user-centric design.
        </p>
        <a className="btn-primary btn text-white mt-[15px]" href="#">
          Say Hallo!
        </a>
        {/* WORKING */}
        <div className="flex">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </div>
      <div className="w-full">
        <img className="w-[636px]" src={person} alt="person" />
      </div>
    </div>
  );
};

export default Introduction;
