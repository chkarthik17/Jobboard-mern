import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
