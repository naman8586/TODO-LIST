import React, { useState } from "react";
import { FaBars, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen && <Sidebar />}
      <nav className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-white py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20">
        <div className="container mx-auto flex justify-between items-center w-full">
          <button onClick={handleSidebarToggle} className="text-3xl text-gray-200 ">
            <FaBars />
          </button>

          <h2 className="text-4xl font-extrabold tracking-wide hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105 relative right-48">
            To-Do
          </h2>

          <div className="flex items-center">
            <form className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 transition duration-300 hover:shadow-xl">
              <input
                type="text"
                placeholder="Search Task"
                className="bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 w-80 px-3 py-1 rounded-l-full"
              />
              <button
                type="submit"
                className="text-gray-500 text-lg rounded-r-full p-2 transition duration-300
                 hover:bg-gray-100"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300">
              Login | Sign Up
            </button>

            <div className="flex items-center space-x-4 text-2xl">
              <FaMoon className="cursor-pointer hover:text-yellow-300 transition duration-300 transform hover:scale-110" />
              <FaSun className="cursor-pointer hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;