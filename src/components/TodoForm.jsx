import React, { useEffect, useRef, useState } from "react";

export const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="mb-8" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update Todolist"
            value={input}
            name="text"
            className="py-3 px-5 rounded-md mr-3 border-solid border-2 border-[#d5d7da] outline-none bg-transparent text-black duration-200 transition-all ease-in
        w-80 placeholder:text-slate-300 focus:border-teal-500"
            onChange={handleChanges}
            ref={inputRef}
          />

          <button
            className="edit py-3 px-5 font-semibold border-none rounded-md cursor-pointer outline-none text-white 
        capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Masukan Todolist"
            value={input}
            name="text"
            className="py-3 px-5 rounded-md border-solid border-2 mr-3 border-[#d5d7da] outline-none bg-transparent text-black duration-200 transition-all ease-in
        w-80 placeholder:text-slate-300 focus:border-teal-500"
            onChange={handleChanges}
            ref={inputRef}
          />

          <button
            className="tambah py-3 font-semibold px-5 rounded-md border-none cursor-pointer outline-none text-white 
        capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Tambah
          </button>
        </>
      )}
    </form>
  );
};
