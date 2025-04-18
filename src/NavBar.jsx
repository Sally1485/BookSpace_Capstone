import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-end p-4 text-black hover:after:text-gray-950">
      <div className=" flex h- w-10 mt-15">
        <img src={"/images/logo.png"} alt="Logo" />
      </div>
      <nav className=" space-x-4 sm:space-x-0 md:space-x-2">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/details">Details</Link>
        <Link to="/library">Library</Link>
      </nav>
    </div>
  );
}

export default NavBar;
