import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import { createContext, useEffect, useState } from "react";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

export const ThemeContext = createContext("light");

const Main = () => {
  const [theme, setTheme] = useState("");
  /* Dark mode management */
  useEffect(() => {
    const darkTheme = localStorage.getItem("dark") == "true" ? "dark" : "light";
    setTheme(darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div data-theme={theme} className="relative">
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
