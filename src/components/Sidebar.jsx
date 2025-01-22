import React from "react";
import { FaCalendar, FaCalendarCheck, FaPlus, FaStar, FaTasks, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 flex flex-col justify-between shadow-2xl w-64 z-50 transition-all duration-300">
      <div className="space-y-6">
       
        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaCalendar className="text-lg text-blue-400" />
          <p className="text-md font-medium">Today</p>
        </div>

        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaCalendarCheck className="text-lg text-green-400" />
          <p className="text-md font-medium">Completed Tasks</p>
        </div>

        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaStar className="text-lg text-yellow-400" />
          <p className="text-md font-medium">Important Tasks</p>
        </div>

        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaTasks className="text-lg text-purple-400" />
          <p className="text-md font-medium">All Tasks</p>
        </div>

        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaCog className="text-lg text-gray-400" />
          <p className="text-md font-medium">Settings</p>
        </div>

        <div className="flex items-center space-x-4 p-3 cursor-pointer rounded-lg transition duration-300 hover:bg-gray-700">
          <FaSignOutAlt className="text-lg text-red-400" />
          <p className="text-md font-medium">Logout</p>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg cursor-pointer transition duration-300 shadow-md">
          <FaPlus className="text-lg" />
          <p className="text-md font-medium">Add New Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
