import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
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

export default App;
