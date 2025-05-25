import React from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import "../../index.css";
import WorkProcess from "../components/workProcess/WorkProcess";

// TODO: Add a background image to the home page
const Home = () => {
  return (
    <div className={``}>
      <div className="content mx-auto">
        <Introduction />
        <Profile />
      </div>
      <div className="bg-[#F0F1F3] h-249.5 flex justify-center items-center">
        <WorkProcess />
      </div>
    </div>
  );
};

export default Home;
