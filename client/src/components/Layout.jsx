import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default Layout;
