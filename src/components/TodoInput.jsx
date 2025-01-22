import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";
import { FaPlus } from "react-icons/fa"; // 

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#cdb4db] p-6 rounded-lg shadow-lg space-x-4"
    >
      
      <p className="text-white font-semibold text-lg hidden md:block">
        Add a new task:
      </p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 bg-[#edede9] text-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500 transition duration-300"
      />

      
      <button
        type="submit"
        className="flex items-center space-x-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-md shadow-md hover:bg-indigo-50 hover:scale-105 transform transition-all duration-300"
      >
        <FaPlus size={16} />
        <span>Add</span>
      </button>
    </form>
  );
};

export default TodoInput;
