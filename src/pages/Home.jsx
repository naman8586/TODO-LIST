import React from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="w-[66rem] mx-auto mt-20 p-8 bg-gradient-to-r from-[#bde0fe] via-[#a2d2ff] to-[#6a8caf] shadow-xl  rounded-lg">
      
      <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-md mb-10">
        Your To-Do Manager
      </h1>

     
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 transform hover:scale-[1.02] transition-transform duration-200 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add Your Tasks</h2>
        <TodoInput />
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-transform duration-200 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Tasks</h2>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;
