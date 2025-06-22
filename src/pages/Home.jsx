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
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div className={`relative mt-20`}>
      {/* NOTE: remove margin top before production */}
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-[#F0F1F3] min-xl:h-249.5 min-xl:pt-62">
        <WorkProcess />
      </div>
      <div className="h_368">
        <Portfolio />
      </div>
      <div className="h_118 bg-gray-900">
        <WorkTogether />
      </div>
      <div className="h-196 blog-background">
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
      <div className="h-165 relative z-10">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
