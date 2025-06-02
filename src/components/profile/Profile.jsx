import React, { useContext, useEffect, useState } from "react";
import person from "../../assets/images/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../layouts/Main";
import SocialMedia from "../common/socialMedia/SocialMedia";
const Profile = () => {
  const [theme] = useContext(ThemeContext);
  const [dark, setDark] = useState(theme === "dark");
  useEffect(() => {
    theme === "dark" ? setDark(true) : setDark(false);
  }, [theme]);

  return (
    <div
      className={`mt-56 rounded-2xl bg-white drop-shadow-2xl shadow-white p-28`}
    >
      <div className="flex justify-between items-center">
        <img
          className="w-[424px] bg-[#F0F1F3] rounded-xl"
          src={person}
          alt=""
        />

        <div className="w-134">
          <h2
            className={`text-[38px] font-semibold mb-8 ${dark && "text-black"}`}
          >
            I am Professional User Experience Designer
          </h2>
          <div
            className={`text-[18px] font-normal ${
              dark ? "text-gray-800" : "text-gray-600"
            }`}
          >
            <p className={``}>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="mt-3">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>
          <div className="mt-8">
            <a className="btn btn-primary w-33 h-12 text-[16px]" href="#">
              My Project
            </a>
            <a
              className={`btn border-[#9929fb] text-[#9929fb] w-47.5 h-12 ms-4 text-[16px] ${
                dark && "bg-transparent"
              }`}
              href="#"
            >
              <FontAwesomeIcon icon={faDownload} style={{ color: "#9929fb" }} />{" "}
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="w-[424px]">
        <div className="flex justify-center">
          <div className="w-66 h-18 mt-[-36px] z-50 absolute text-center bg-white rounded-[4px] center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
