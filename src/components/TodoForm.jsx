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
      <input
        type="text"
        placeholder="Masukan Todolist"
        name="text"
        value={input}
        onChange={handleChanges}
        ref={inputRef}
        className="py-3 px-5 rounded-md border-solid border-2 mr-3 border-[#d5d7da] outline-none bg-transparent text-black w-80 duration-200 transition-all ease-in placeholder:text-slate-300 focus:border-teal-500"
      />
      <button
        className="tambah py-3 font-semibold px-5 rounded-md border-none cursor-pointer outline-none text-white 
        capitalize bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Tambah
      </button>
    </form>
  );
};
