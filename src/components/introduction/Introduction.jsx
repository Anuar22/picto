import React, { useContext } from "react";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { ThemeContext } from "../../layouts/Main";
const Introduction = () => {
  const [theme] = useContext(ThemeContext); /* Theme context: dark/light */

  // Information summary data
  const informationSummaryData = [
    {
      id: 1,
      title: "Experience",
      description: "15 Y.",
    },
    {
      id: 2,
      title: "Projects Completed",
      description: "250+",
    },
    {
      id: 3,
      title: "Happy Clients",
      description: "58",
    },
  ];

  return (
    <div
      className="flex justify-between pt-[126px] mb-27.5 max-[1150px]:flex-col-reverse p-2"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between">
        <div className="pt-[52px] me-[126px] w-full sm:w-auto">
          <p className="text-7xl max-sm:text-5xl font-semibold max-[1150px]:text-6xl">
            Hello, I’m <br />
            Brooklyn Gilbert
          </p>
          <p className="text-[18px] my-6">
            I'm a Freelance <span className="bg-highlight">UI/UX Designer</span>{" "}
            and <span className="bg-highlight"> Developer</span> based in
            London, England. I strives to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>
          <p className="text-center sm:text-start">
          <a
            className="btn-primary btn w-32 h-12 text-white"
            href="mailto:example@gmail.com"
          >
            Say Hello!
          </a>
          </p>
        </div>
        <div className="flex z-0 max-[1150px]:hidden">
          {informationSummaryData.map((item) => (
            <InformationSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
      <img
        className={`shadow-2xl shadow-gray-200 h-auto max-[1150px]:w-1/2 ${
          theme == "dark" ? "bg-gray-300" : "bg-white "
        } rounded-3xl`}
        src={person}
        alt="person"
      />
      <div className="flex flex-col z-10 top-[126px] end-0 absolute min-[1150px]:hidden">
        {informationSummaryData.map((item) => (
          <InformationSummary key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;
