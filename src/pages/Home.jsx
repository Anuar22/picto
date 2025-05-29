import React from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import "../../index.css";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";

// TODO: Add a background image to the home page
const Home = () => {
  return (
    <div className={`relative`}>
      <div className="content mx-auto">
        <Introduction />
        <Profile />
      </div>
      <div className=" w-full h-100 absolute top-0 end-0 first-layer" />
      <div className="bg-[#F0F1F3] h-249.5 flex justify-center items-center relative">
        <WorkProcess />
      </div>
      <div className="h-368">
        <Portfolio />
      </div>
      <div className="h-118 bg-gray-900">
        <WorkTogether />
      </div>
      <div className="h-196 ">
        <Blog />
      </div>
      <div className="h-219 bg-[#F0F1F3]">
        <Profession />
      </div>
      <div className="h-138">
        <HappyClients />
      </div>
      <div className="h-133.5">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
