import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (todos.length === 0) {
    return <h2>No todos available. Add a todo to get started!</h2>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="complete2 tooltip" key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
        <p class="tooltiptext">Complete</p>
      </div>
      <div className="icons">
        {!todo.isComplete && (
          <>
            <div className="tooltip">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <p class="tooltiptext">Delete</p>
            </div>
            <div className="tooltip">
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
            <p class="tooltiptext">Edit</p>
            </div>
          </>
        )}
      </div>
    </div>
  ));
};

export default Todo;
