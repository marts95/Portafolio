import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";


export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
