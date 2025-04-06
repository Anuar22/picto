import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
