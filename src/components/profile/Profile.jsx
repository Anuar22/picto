import React, { useContext, useEffect, useState } from "react";
import person from "../../assets/images/person2.png";
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
      className={`relative xl:-bottom-28 z-10 rounded-2xl bg-white min-xl:drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center">
        <div className="W-106 h-126 rounded-2xl">
          <div className="min-[440px]:w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover "
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className=" relative bottom-9">
            <div className="flex justify-center">
              <div className="w-66 h-18 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-134 min-[1160px]:p-5">
          <h2
            className={`text-[38px] max-sm:text-[30px] font-semibold mb-8 ${
              dark && "text-black"
            }`}
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
          <div className="mt-8 flex max-sm:justify-center">
            <a className="btn btn-primary w-33 h-12 text-[16px]" href="#!">
              My Projects
            </a>
            <a
              className={`btn hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary w-47.5 h-12 ms-4 text-[16px] ${
                dark && "bg-transparent"
              }`}
              href="#!"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
