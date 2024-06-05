import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo, ...todos)
  };

  return (
    <div>
      <h1 className="text-2xl text-black my-8 mx-0 font-bold ">
        Buat To-Do-List Hari Ini
      </h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos}/>
    </div>
  );
};
