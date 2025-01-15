import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-slate-700 flex items-center justify-between h-[10vh] px-44">
        <NavLink to={"/"}>
          <h1 className="font-bold text-3xl text-white">ChatApp</h1>
        </NavLink>

        <ul className="flex text-white">
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) => {
                return isActive
                  ? `mr-2 px-5 py-2 rounded-3xl font-semibold bg-slate-800`
                  : `mr-2 px-5 py-2 rounded-3xl font-semibold hover:bg-slate-800`;
              }}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) => {
                return isActive
                  ? `mr-2 px-5 py-2 rounded-3xl font-semibold bg-slate-800`
                  : `mr-2 px-5 py-2 rounded-3xl font-semibold hover:bg-slate-800`;
              }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
