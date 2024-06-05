import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export const Todo = ({ todos }) => {


  return todos.map((item, index) => (
    <div className="flex justify-between items-center my-2 mx-auto text-white p-3 rounded-md w-11/12 bg-gradient-to-r from-cyan-500 to-blue-500" key={index}>
      <div className="flex items-center gap-2" key={item.id}>
        <input type="checkbox" className="w-4 h-4" />
        <p>{item.text}</p>
      </div>

      <div className="flex items-center text-2xl cursor-pointer">
        <RiCloseCircleLine className="mr-1 text-white" />
        <TiEdit className="text-white" />
      </div>
    </div>
  ));
};
