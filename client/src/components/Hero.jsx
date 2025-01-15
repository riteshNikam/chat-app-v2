import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="px-44 h-[90vh] flex justify-center items-center flex-col">
        <div className="text-white text-lg mb-3 text-center">
          <p>This a simple text based, real time chat application.</p>
          <p>Login to get started</p>
        </div>

        <NavLink
          to={"/login"}
          className="border-transparent py-[16px] px-[60px] bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-[32px]"
        >
          Get Started
        </NavLink>
      </div>
    </>
  );
};

export default Hero;
