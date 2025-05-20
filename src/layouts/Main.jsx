import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light");

const Main = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const darkTheme = localStorage.getItem("dark") == "true" ? "dark" : "light";
    setTheme(darkTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {/* WORKING */}
      {/* <div data-theme={theme} className="xl:px-50 mx-auto max-w-[1920px]"> */}
      <div data-theme={theme} className="w-[1320px] mx-auto max-w-[1920px]">
        <NavBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
