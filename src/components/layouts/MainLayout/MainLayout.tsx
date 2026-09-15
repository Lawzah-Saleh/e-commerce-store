import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar storeName="NEXORA" />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;