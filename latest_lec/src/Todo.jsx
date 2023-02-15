import React from "react";
import { useReducer, useState } from "react";
import TodoInput from "./TodoInput";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  console.log(todo);
  const handleAddTodo = (value) => {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        value: value,
        isCompleted: false,
      },
    ]);
  };

  const toggleStatus = (id) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput handleAddTodo={handleAddTodo} />
      <div>
        {todo.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleStatus(todo.id)}
              />
              <span>{todo.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
