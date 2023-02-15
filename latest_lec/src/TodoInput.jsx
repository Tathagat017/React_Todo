import React from "react";
import { useState } from "react";
const TodoInput = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    if (value) {
      handleAddTodo(value);
      setValue("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" disabled={!value}>
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoInput;
