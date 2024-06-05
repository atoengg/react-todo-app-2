import React from "react";

export const TodoForm = () => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Masukan Todolist"
        name="text"
        className="py-3 px-5 rounded-md border-solid border-2 mr-3 border-[#d5d7da] outline-none bg-transparent text-white w-80 duration-200 transition-all ease-in placeholder:text-slate-300 focus:border-teal-500"
      />
      <button
        className="tambah py-3 font-semibold px-5 rounded-md border-none cursor-pointer outline-none text-white 
        capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Tambah
      </button>
    </div>
  );
};
