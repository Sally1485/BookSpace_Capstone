import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 text-black ">
      <div className=" flex items-center ">
        <img src={"/images/logo.png"} alt="Logo" className="h-10 w-auto" />
      </div>
      <nav className=" space-x-4 sm:space-x-0 md:space-x-2 ">
        <Link to="/" className=" text-black hover:text-purple-600">
          Home
        </Link>
        <Link to="/explore" className=" text-black hover:text-purple-600">
          Explore
        </Link>
        <Link to="/book/:id" className=" text-black hover:text-purple-600a">
          Details
        </Link>
        <Link to="/library" className=" text-black hover:text-purple-600">
          Library
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
