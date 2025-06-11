import React from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const Portfolio = () => {
  const projectData = [
    {
      id: 1,
      image: card1,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 2,
      image: card2,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 3,
      image: card3,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 4,
      image: card4,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 5,
      image: card5,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
    {
      id: 6,
      image: card6,
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "#",
    },
  ];

  return (
    <div className="content h-368 mt-25" id="portfolio">
      <div className="h-293.5">
        <div className="h-32 mb-17.5">
          <div className="w-144.25 text-center mx-auto">
            <p className="section-title">Portfolio</p>
            <p className="font-normal text-[18px] pt-6 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-between gap-6 mx-auto">
            {projectData.map((data, index) => (
              <Projects data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href="#"
          className="btn btn-primary w-37.25 h-12 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
