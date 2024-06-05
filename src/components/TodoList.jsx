import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoList = () => {
  return (
    <div>
      <h1 className="text-2xl text-black my-8 mx-0 font-bold ">
        Buat To-Do-List Hari Ini
      </h1>
      <TodoForm/>
      <Todo/>
    </div>
  );
};
