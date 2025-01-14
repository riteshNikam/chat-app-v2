import Navbar from "./components/Navbar";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <div className="h-[100vh] bg-slate-800">
        <Navbar></Navbar>
        <Register></Register>
      </div>
    </>
  );
};

export default App;
