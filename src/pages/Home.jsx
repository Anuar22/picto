import React from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";

// TODO: Add a background image to the home page
const Home = () => {
  return (
    <div className={``}>
      <div className="w-full h-full  mx-auto">
        <Introduction />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
