import React, { useContext } from "react";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { ThemeContext } from "../../layouts/Main";
const Introduction = () => {
  const [theme] = useContext(ThemeContext);
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
    <div className="flex justify-between pt-[126px]">
      <div className="w-full flex flex-col justify-between">
        <div className="pt-[52px] me-[126px]">
          <p className="text-7xl font-semibold">
            Hello, I’m <br />
            Brooklyn Gilbert
          </p>
          <p className="text-[18px]">
            I'm a Freelance <span className="bg-highlight">UI/UX Designer</span>{" "}
            and <span className="bg-highlight"> Developer</span> based in
            London, England. I strives to build immersive and beautiful web
            applications through carefully crafted code and user-centric design.
          </p>
          <a className="btn-primary btn w-32 h-12 text-white mt-6" href="#">
            Say Hello!
          </a>
        </div>
        <div className="flex z-0">
          {informationSummaryData.map((item) => (
            <InformationSummary key={item.id} item={item} />
          ))}
        </div>
      </div>
      <img
        className={`h-[636px] w-[536px] shadow-2xl shadow-gray-200 ${
          theme == "dark" ? "bg-gray-300" : "bg-white "
        } rounded-3xl`}
        src={person}
        alt="person"
      />
    </div>
  );
};

export default Introduction;
