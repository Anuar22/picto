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
  console.log(theme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div data-theme={theme}>
        <NavBar />
        <Outlet></Outlet>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Main;
