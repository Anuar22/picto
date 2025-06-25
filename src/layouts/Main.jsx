import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import { createContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";

export const ThemeContext = createContext("light");

const options = {
  duration: 500,
  smooth: true,
};

const Main = () => {
  // States
  const [theme, setTheme] = useState("");
  const [position, setPosition] = useState(0);

  /* Dark mode management */
  useEffect(() => {
    const darkTheme = localStorage.getItem("dark") == "true" ? "dark" : "light";
    setTheme(darkTheme);
  }, [theme]);

  useEffect(() => {
    /* Scroll position management */
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  //   Smooth scroll options : react-scroll

  // Scroll to top function
  const scrollToTop = () => {
    animateScroll.scrollToTop(options); /* To go to top */
    // animateScroll.scrollToBottom(options); /* To go to Bottom for development */
  };

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div data-theme={theme} className="mx-auto max-w-[1920px] relative">
        <NavBar />
        <Outlet />
        <Footer />

        {/* Scroll to top button */}
        <div className="flex justify-end relative me-10 z-10">
          <a
            onClick={scrollToTop}
            className={`bg-picto-primary fixed bottom-15 end-auto  w-15 h-15 flex justify-center items-center rounded-full text-white transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer ${
              position < 200 && "scale-0"
            }`}
          >
            <FontAwesomeIcon icon={faAngleUp} size="2xl" />
          </a>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
