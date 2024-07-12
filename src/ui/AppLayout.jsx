import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

function AppLayout() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
