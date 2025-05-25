import React from "react";
import person from "../../assets/images/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Profile = () => {
  // Social icons and links
  const socialIcons = [
    { icon: faFacebookF, link: "#" },
    { icon: faDribbble, link: "#" },
    { icon: faInstagram, link: "#" },
    { icon: faLinkedin, link: "#" },
    { icon: faBehance, link: "#" },
  ];

  return (
    <div className="mt-56 rounded-2xl bg-gray-200 p-28">
      <div className="flex justify-between items-center">
        <img
          className="w-[424px] bg-[#F0F1F3] rounded-xl"
          src={person}
          alt=""
        />

        <div className="w-134">
          <h2 className="text-[38px] font-semibold mb-8">
            I am Professional User Experience Designer
          </h2>
          <p className="text-[18px] font-normal text-gray-600">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <p className="text-[18px] mt-3 font-normal text-gray-600">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services.
          </p>
          <div className="mt-8">
            <a className="btn btn-primary w-33 h-12 text-[16px]" href="#">
              My Project
            </a>
            <a
              className="btn border-[#9929fb] text-[#9929fb] w-47.5 h-12 ms-4 text-[16px]"
              href="#"
            >
              <FontAwesomeIcon icon={faDownload} style={{ color: "#9929fb" }} />{" "}
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/* WORKING: on social media section under picture section */}
      {/* TODO: make a component to display social icons and keep alignment right*/}
      <div className="w-[424px]">
        <div className="flex justify-center">
          <div className="w-66 h-18 mt-[-36px] z-50 absolute text-center bg-white rounded-[4px] flex justify-center items-center">
            {socialIcons.map((item, index) => (
              <a href={item.link} className="p-3.75 bg-white" key={index}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2xl"
                  className="w-4.5 h-4.5 text-[#9929fb]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
