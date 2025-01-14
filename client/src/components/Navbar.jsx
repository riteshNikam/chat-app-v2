const Navbar = () => {
  return (
    <>
      <header className="bg-slate-700 flex items-center justify-between h-[10vh] px-44">
        <h1 className="font-bold text-3xl text-white">Navbar</h1>
        <ul className="flex text-white">
          <li className="mr-4">Register</li>
          <li className="mr-4">Login</li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
