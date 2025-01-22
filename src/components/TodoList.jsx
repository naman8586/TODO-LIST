import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo, toggleImportant } from "../redux/todosSlice";
import { FaStar, FaRegStar } from "react-icons/fa";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, currentText) => {
    setEditMode(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditMode(null);
    }
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      
      <div className="mb-6 text-gray-700 text-center">
        <p className="text-xl font-semibold">Total Tasks: {totalTasks}</p>
        <p className="text-lg text-green-600">Completed Tasks: {completedTasks}</p>
      </div>

     
      <ul className="space-y-6 bg-[#eaf4f4]">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center bg-[#f7e1d7] p-5 rounded-lg shadow-lg transform transition duration-300 ${
              todo.completed
                ? "bg-gradient-to-r from-green-100 to-green-50 text-gray-500 line-through"
                : "bg-gradient-to-r from-white to-gray-50 text-gray-800"
            } hover:scale-105`}
          >
            
            <div className="flex items-center space-x-4">
              
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="form-checkbox h-5 w-5 text-green-600 rounded-md cursor-pointer focus:ring-2 focus:ring-green-500"
              />

              {editMode === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              ) : (
                <span
                  className="text-lg font-medium cursor-pointer hover:text-blue-500"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}
                </span>
              )}
            </div>

            
            <div className="flex items-center space-x-3">
              {editMode === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="px-4 py-2 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>

              <button
                onClick={() => dispatch(toggleImportant(todo.id))}
                className={`${
                  todo.important
                    ? "text-yellow-500 hover:text-yellow-600"
                    : "text-gray-400 hover:text-yellow-500"
                } transition duration-300`}
              >
                {todo.important ? <FaStar size={24} /> : <FaRegStar size={24} />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;