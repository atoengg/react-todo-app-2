import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoForm } from "./TodoForm";

export const Todo = ({ todos, removeTodo, completeTodo, updateTodo }) => {

    const [edit, setEdit] = useState({
        id : null,
        value: '',
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value : ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((item, index) => (
    <div className={item.isComplete ? "bg-[#d5d7da] flex justify-between items-center my-2 mx-auto line-through opacity-40 mb-8 p-3 rounded-md w-11/12": "flex justify-between items-center my-2 mx-auto text-white p-3 rounded-md w-11/12 bg-gradient-to-r from-cyan-500 to-blue-500"} key={index}>
      <div className="flex items-center gap-2" key={item.id}>
        <input type="checkbox" className="w-4 h-4" onClick={() => completeTodo(item.id)} />
        <p>{item.text}</p>
      </div>

      <div className="flex items-center text-2xl cursor-pointer">
        <RiCloseCircleLine className="mr-1 text-white" onClick={() => removeTodo(item.id)}/>
        <TiEdit className="text-white" onClick={() => setEdit({id : item.id, value: item.text})}/>
      </div>
    </div>
  ));
};
