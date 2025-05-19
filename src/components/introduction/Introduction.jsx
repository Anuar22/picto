import React from "react";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
const Introduction = () => {
    const informationSummaryData = [
        {
            id: 1,
            title:"Experience",
            description: "15 Y",
        },
        {
            id: 2,
            title:"Projects Completed",
            description: "250+",
        },
        {
            id: 3,
            title:"Happy Clients",
            description: "15+",
        }
    ]
  return (
    <div className=" mx-auto flex justify-between">
      <div className="w-full lg:pt-30 flex flex-col justify-between">
        <div>
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
        </div>
        {/* WORKING */}
        <div className="flex mb-30 mt-40">
            {informationSummaryData.map((item) => (
                <InformationSummary key={item.id} item={item} />
            ))}
        </div>
      </div>
      <div className="w-full">
        <img className="w-[636px] ms-auto" src={person} alt="person" />
      </div>
    </div>
  );
};

export default Introduction;
