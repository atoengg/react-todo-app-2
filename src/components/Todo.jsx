import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export const Todo = () => {
  return (
    <>
      <div className="flex justify-between items-center my-2 mx-auto text-white p-3 rounded-md w-11/12 bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <p>test</p>
        </div>

        <div className="flex items-center text-2xl cursor-pointer">
          <RiCloseCircleLine className="mr-1 text-white" />
          <TiEdit className="text-white" />
        </div>
      </div>
    </>
  );
};
